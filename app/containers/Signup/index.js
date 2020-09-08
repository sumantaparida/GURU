/**
 *
 * Signup
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSignup from './selectors';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class Signup extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Description of Signup" />
        </Helmet>
        <div>Sign Up</div>
      </div>
    );
  }
}

Signup.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signup', reducer });

export default compose(
  withReducer,
  withConnect,
)(Signup);