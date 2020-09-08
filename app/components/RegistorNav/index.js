/**
 *
 * RegistorNav
 *
 */

import React from 'react';
import { RegistorNavContainer } from './style';

function RegistorNav() {
  return (
    <RegistorNavContainer>
      <div className="active">LOGIN</div>
      <div>REGISTER</div>
    </RegistorNavContainer>
  );
}

RegistorNav.propTypes = {};

export default RegistorNav;
