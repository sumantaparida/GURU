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
      <input type="text" placeholder="Phone Number *" />
      <Button variant="contained" color="primary" type="button">
        SUBMIT
      </Button>
      <span className="donthavetext">Don’t have your account?</span>
    </SignInContainer>
  );
}

SignIn.propTypes = {};

export default SignIn;
