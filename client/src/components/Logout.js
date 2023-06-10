import React from "react";
import { useState } from "react";
import apiService from "../services/ApiService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Logout({ setIsAuthenticated }) {
  let navigate = useNavigate();

  const handleClick = () => {
    removeToken();
    handleAuth();
  };

  const removeToken = () => {
    apiService.logout("accessToken");
  };

  const handleAuth = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <section>
      <h2>Are you sure you want to log out?</h2>
      <Link to="/">
        <button className="confirm-btn">No</button>
      </Link>
      <button className="confirm-btn" onClick={() => handleClick()}>
        Yes
      </button>
    </section>
  );
}
