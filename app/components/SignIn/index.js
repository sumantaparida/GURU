/**
 *
 * SignIn
 *
 */

import React from 'react';
import Button from '@material-ui/core/Button';
import { SignInContainer } from './style';

function SignIn() {
  return (
    <SignInContainer>
      <h4 className="_hText">ACCESS YOUR ACCOUNT</h4>
      <span className="_decText">Start learning marketing courses</span>
      <div className="_wrapper">
        <input type="text" placeholder="Phone Number *" />
        <Button variant="contained" color="primary" type="button">
          SUBMIT
        </Button>
        <span className="donthavetext">Don’t have your account?</span>
      </div>
    </SignInContainer>
  );
}

SignIn.propTypes = {};

export default SignIn;
