import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../Navbar.css"


const Navbar = ({ isAuthenticated }) => {
  console.log(isAuthenticated, "Authenticated");

  return (
    <nav className="nav-register">
   <img src={logo} className="logo-home" />
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
              <Link to="/">Login</Link>
            </li>
          </>
        )}
      </ul>
      <div class="dot"></div>
    </nav>
  );
};

export default Navbar;
