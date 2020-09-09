/**
 *
 * RegistorFrom
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withSizes from 'react-sizes';
import Button from '@material-ui/core/Button';
import uploadIcon from '../../images/uploadIcon.svg';
import cameraIcon from '../../images/cameraIcon.svg';
import { RegistorFromContainer } from './style';

function RegistorFrom(props) {
  const { isMobile } = props;
  return (
    <RegistorFromContainer>
      <h4 className="_hText">Create AN Account</h4>
      <span className="_decText">Start learning marketing courses</span>
      <div className="_wrapper">
        {isMobile ? (
          <div className="profilePic">
            <i className="_proPic">
              <img alt="" title="" />
            </i>
          </div>
        ) : null}
        <div className="_twoComumnWrapper">
          <input type="text" placeholder="First name *" />
          <input type="text" placeholder="Last name *" />
        </div>
        <div className={`${isMobile ? '_twoRowWrapper' : '_twoComumnWrapper'}`}>
          <input type="text" placeholder="Email Address *" />
          <input type="text" placeholder="Phone Number *" />
        </div>
        <input type="text" placeholder="Aadhar Card Number *" />
        <div className="uploadField">
          <label htmlFor="fileupload">
            <input type="file" id="fileupload" />
            <div className="_leftUpload">
              <img src={uploadIcon} alt="" title="" />
            </div>
            <div className="_rightUpload">
              <span className="uploadText">
                <i>
                  <img src={cameraIcon} alt="" title="" />
                </i>
                Upload
              </span>
              <span> Aadhar Card</span>
            </div>
          </label>
        </div>
        <input type="text" placeholder="Password *" />
        <Button variant="contained" color="primary" type="button">
          PROCEED
        </Button>
        <span className="donthavetext">{isMobile ? 'Already have an account?' : 'BACK TO LOGIN'}</span>
      </div>
    </RegistorFromContainer>
  );
}

RegistorFrom.propTypes = {
  isMobile: PropTypes.bool,
};

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 768,
});

export default withSizes(mapSizesToProps)(RegistorFrom);
