import React from 'react'
import { Link } from 'react-router-dom';

import Logo from "../assets/logo.png";


const Header = () => {
    return (
      <nav>
        <logo>
          <img src={Logo} alt="help me out logo" />
        </logo>

        <navlinks>
          <p>Features</p>
          <p>How it works</p>
        </navlinks>

        <Link to="/login" className="link">
          Get started
        </Link>
      </nav>
    );
}

export default Header