/* eslint-disable react/no-unused-prop-types */
/**
 *
 * Signin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSignin from './selectors';
import reducer from './reducer';
import { SigninContainer } from './style';
import splashIMG from '../../images/splash.png';
import logoIMG from '../../images/logo.svg';

/* eslint-disable react/prefer-stateless-function */
export class Signin extends React.PureComponent {
  render() {
    return (
      <SigninContainer>
        <Helmet>
          <title>Signin</title>
          <meta name="description" content="Description of Signin" />
        </Helmet>
        <div className="wrapper">
          <div className="leftArticle">
            <div className="navigation">
              <div className="logo">
                <img src={logoIMG} alt="" title="" />
              </div>
            </div>
            <div className="content">
              <div className="blackBox">
                <h4>ACCESS YOUR ACCOUNT</h4>
                <span>Start learning marketing courses</span>
                <input type="text" placeholder="Phone Number *" />
                <button type="button">SUBMIT</button>
              </div>
            </div>
          </div>
          <div className="rightArticle">
            <img src={splashIMG} alt="" title="" />
          </div>
        </div>
      </SigninContainer>
    );
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignin(),
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

const withReducer = injectReducer({ key: 'signin', reducer });

export default compose(
  withReducer,
  withConnect,
)(Signin);
