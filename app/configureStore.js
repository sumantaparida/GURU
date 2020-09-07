/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { Iterable, fromJS } from 'immutable';
import { routerMiddleware } from 'connected-react-router/immutable';
import { createMiddleware } from 'redux-beacon';
import { getStoredState, persistStore } from 'redux-persist-immutable';
import { logger as beaconLogger } from 'redux-beacon/extensions/logger';
import createReducer from './reducers';
// Define an event
const pageView = action => ({
  hitType: 'pageview',
  page: action.payload,
});

// Map the event to a Redux action
const eventsMap = {
  LOCATION_CHANGE: pageView,
};

// Create the middleware
const beaconMiddleware = createMiddleware(eventsMap, {
  beaconLogger,
});

const stateTransformer = state => {
  if (Iterable.isIterable(state)) return state.toJS();
  return state;
};

async function setupreduxLogger() {
  let logger;
  await import('redux-logger').then(reduxlogger => {
    logger = reduxlogger.createLogger({
      stateTransformer,
    });
  });
  return logger;
}

// eslint-disable-next-line no-unused-vars
export default async function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [beaconMiddleware, promiseMiddleware(), thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV !== 'production') {
    const logger = await setupreduxLogger();
    middlewares.push(logger);
  }
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  const persistConfig = {
    blacklist: [],
  };
  const restoreState = await getStoredState(persistConfig);
  const store = createStore(createReducer(), fromJS(restoreState), composeEnhancers(...enhancers));

  // eslint-disable-next-line no-unused-vars
  const persistor = persistStore(store, persistConfig);

  // Extensions
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
