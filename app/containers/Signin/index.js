/* eslint-disable react/no-unused-prop-types */
/**
 *
 * Signin
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withSizes from 'react-sizes';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectSignin from './selectors';
import reducer from './reducer';
import SignIn from '../../components/SignIn/Loadable';
import RegistorNav from '../../components/RegistorNav/Loadable';
import { SigninContainer } from './style';
import splashIMG from '../../images/splash.png';
import logoIMG from '../../images/logo.svg';

/* eslint-disable react/prefer-stateless-function */
export class Signin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMobile } = this.props;
    return (
      <SigninContainer>
        <Helmet>
          <title>Signin</title>
          <meta name="description" content="Description of Signin" />
        </Helmet>
        <div className="wrapper">
          <div className="leftArticle">
            <div className="navigation">
              {!isMobile ? (
                <div className="logo">
                  <img src={logoIMG} alt="" title="" />
                </div>
              ) : (
                <RegistorNav />
              )}
            </div>
            <div className="content">
              <div className="blackBox">
                <h4 className="_hText">ACCESS YOUR ACCOUNT</h4>
                <span className="_decText">Start learning marketing courses</span>
                <SignIn />
              </div>
            </div>
          </div>
          {!isMobile ? (
            <div className="rightArticle">
              <img src={splashIMG} alt="" title="" />
            </div>
          ) : null}
        </div>
      </SigninContainer>
    );
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignin(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'signin', reducer });

export default compose(
  withReducer,
  withConnect,
)(withSizes(mapSizesToProps)(Signin));
