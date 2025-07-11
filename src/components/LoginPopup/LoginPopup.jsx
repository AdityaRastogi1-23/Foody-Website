import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState('Sign Up');

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt='close'
            onClick={() => setShowLogin(false)}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className='login-popup-inputs'>
          {currentState === 'Login' ? null : (
            <input type='text' placeholder='Enter Name' required />
          )}
          <input type='email' placeholder='Enter Email' required />
          <input type='password' placeholder='Enter Password' required />
        </div>

        <button type='submit'>
          {currentState === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>I agree to the Terms and Conditions</p>
        </div>

        {currentState === 'Login' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => setCurrentState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => setCurrentState('Login')}>Login here</span>
          </p>
        )}

        {/* Cancel Button */}
        <p className='cancel-btn' onClick={() => setShowLogin(false)}>
          Cancel
        </p>
      </form>
    </div>
  );
}

export default LoginPopup;
