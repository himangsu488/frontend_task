import React, { useState } from 'react';

export default function Auth() { 
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const validateEmail = (email) => {
        if (!email.trim()) {
          setEmailError('Email cannot be blank');
        } else if (!isValidEmail(email)) {
          setEmailError('Check your email and try again');
        } else {
          setEmailError('');
        }
      };
    
      const validatePassword = (password) => {
        if (!password.trim()) {
          setPasswordError('Password cannot be blank');
        } else {
          setPasswordError('');
        }
      };
    
      const handleLoginSubmit = (e) => {
        e.preventDefault();
        validateEmail(loginEmail);
        validatePassword(loginPassword);
      };
    
      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
  return (
    <div className='login-main'>
    <section className="main">
      <div className="form_wrapper">
        <div className="tile">
          <h3 className="login">Login</h3>
          <hr></hr>
        </div>

        <div className="form_wrap">
          <form className="form_fild login_form" onSubmit={handleLoginSubmit}>
            <div className="input_group">
            <label>Email:</label>
              <input type="email" className="input" placeholder="Email Address" value={loginEmail} onChange={(e) => {
                setLoginEmail(e.target.value); validateEmail(e.target.value); }}  />
              {emailError && <span className="error-msg">{emailError}</span>}
            </div>
            <div className="input_group">
            <label>Password:</label>
              <input type={showPassword ? 'text' : 'password'} className="input" placeholder="Password" value={loginPassword} onChange={(e) => { setLoginPassword(e.target.value);
              validatePassword(e.target.value); }}   />
              <span onClick={togglePasswordVisibility} className="password-toggle">
            {showPassword ? 'Hide' : 'Show'}
          </span>
               {passwordError && <span className="error-msg">{passwordError}</span>}
            </div>

            <a href="#forgot" className="forgot"> Forgot password? </a>

            <input  type="submit" class='btn' name="login" value="Login"/>
          </form>

        </div>
      </div>
    </section>
    </div>
  );
}
