import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signin state domain
 */

const selectSigninDomain = state => state.get('signin', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Signin
 */

const makeSelectSignin = () => createSelector(selectSigninDomain, substate => substate.toJS());

export default makeSelectSignin;
export { selectSigninDomain };
