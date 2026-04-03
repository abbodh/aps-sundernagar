import React, { useState } from 'react';

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="content form-card">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      {isSignUp ? (
        <>
          <label>Name</label>
          <input type="text" placeholder="Full Name" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <p className="switch-text">
            Already have an account?{' '}
            <button className="link-btn" onClick={() => setIsSignUp(false)}>
              Login
            </button>
          </p>
        </>
      ) : (
        <>
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p className="switch-text">
            New user?{' '}
            <button className="link-btn" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default LoginPage;
