import React from "react";
import logo from "../images/nav-logo.png";
import "../App.css";

export default function ProfileNavbar() {
  return (
    <nav className="nav">
      <img src={logo} className="nav-logo" />
      <ul>
        <li>
          <p>VisionBoard</p>
        </li>
      </ul>
    </nav>
  );
}
