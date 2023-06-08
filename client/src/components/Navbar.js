import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/nav-logo.png";

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className='nav-register'>
      {/* <img src={logo} className="nav-logo" /> */}
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )} 
      </ul>
    </nav>
  );
};

export default Navbar;
