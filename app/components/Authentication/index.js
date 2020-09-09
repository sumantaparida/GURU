/**
 *
 * Authentication
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import { AuthenticationContainer } from './style';

function Authentication() {
  return (
    <AuthenticationContainer>
      <h4 className="_hText">Authentication Code</h4>
      <span className="_decText">Verifying your mobile number</span>
      <div className="_wrapper">
        <div className="otpWrapper">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
        <Button variant="contained" color="primary" type="button">
          PROCEED
        </Button>
        <span className="donthavetext">Resend Code 00:30</span>
      </div>
    </AuthenticationContainer>
  );
}

Authentication.propTypes = {};

export default Authentication;
