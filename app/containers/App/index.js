/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/Loadable';
import Signin from '../Signin/Loadable';

import GlobalStyle from '../../global-styles';
import { AppContainer } from './style';

export default function App() {
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppContainer>
  );
}
