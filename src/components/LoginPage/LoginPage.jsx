import React from 'react';
import { useState } from 'react';
import email_icon from '../../assets/Email icon.png';
import password_icon from '../../assets/Password icon.png';
import Facebook_icon from '../../assets/Facebook icon.png';
import Google_icon from '../../assets/google icon.png';
import Twitter_icon from '../../assets/x icon.png';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate(); 

  return (
    <div className='loginpage'>
      <div className="main-part">
        <div className="left-part">
          <h1>Already Here?</h1>
          <p>Login and discover a great amount of new opportunities</p>
        </div>
        <div className="right-part">
          <h1>Login Here</h1>
          <div className="input-field">
            <img src={email_icon} alt="" height='20px' />
            <input type="text" placeholder='Email Address' />
          </div>
          <div className="input-field">
            <img src={password_icon} alt="" height="20px" />
            <input type="text" placeholder='Password' />
          </div>
          <div className="input-written-section">
            <p>remember me</p>
            <p>Forgot Password?</p>
          </div>
          <div className="buttons">
            <div className='login'>Login</div>
          </div>
          <div className="signup-page">
            <p>Don't have an Account?</p>
            <span onClick={() => navigate('/SignupPage')}>SignUp</span>
          </div>
          <div className="extra">
            <hr /><span>or</span><hr />
          </div>
          <div className="icon-section">
            <div className="icon-image">
              <img src={Facebook_icon} alt="" height='30px' />
              <img src={Google_icon} alt="" height='30px' />
              <img src={Twitter_icon} alt="" height='30px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
