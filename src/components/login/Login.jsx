import React from "react";
import "./login.css";

import Logo from '../../assets/logo.png'
import googleLogo from "../../assets/Google svg.png";
import fbLogo from "../../assets/Facebook svg.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div id="account">
      <Link to="/">
        <img src={Logo} alt="logo" className="login-logo" />
      </Link>
      <div className="login-header">
        <h3> Log in or Sign up</h3>
        <br />
        <p>Join millions of others in sharing successful moves on HelpMeOut.</p>
      </div>

      <div className="login-ctn">
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          {" "}
          <span className="icon">
            <img src={googleLogo} alt="" />
          </span>{" "}
          Continue with Google
        </a>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          <span className="icon">
            <img src={fbLogo} alt="" />
          </span>
          Continue with Facebook
        </a> thank you hello
      </div>

      <div className="breaker">
        <span className="divider">-------------------------------- </span>
        <span> or </span>
        <span className="divider">-------------------------------- </span>
      </div>

      <form action="" id="signup-form">
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
