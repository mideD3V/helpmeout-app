import React from 'react'
import { Link } from 'react-router-dom';

import Logo2 from "../assets/logo2.png";


const Footer = () => {
  return (
    <div id="footer">
      <div>
        <img src={Logo2} alt="logo 2" />
      </div>
      <div className="footer-menu footer-links">
        <h4>Menu</h4>
        <Link classsName="footer-link" to="/">
          Home
        </Link>
        <Link classsName="footer-link" to="/">
          Converter
        </Link>
        <Link classsName="footer-link" to="/">
          How it Works
        </Link>
      </div>
      <div className="footer-about footer-links">
        <h4>About us</h4>

        <Link classsName="footer-link" to="/">
          About
        </Link>
        <Link classsName="footer-link" to="/">
          Contact us
        </Link>
        <Link classsName="footer-link" to="/">
          Privacy policy
        </Link>
      </div>
      <div className="footer-record footer-links">
        <h4>Screen Record</h4>

        <Link classsName="footer-link" to="/">
          Browser window
        </Link>
        <Link classsName="footer-link" to="/">
          Desktop
        </Link>
        <Link classsName="footer-link" to="/">
          Application
        </Link>
      </div>
    </div>
  );
}

export default Footer