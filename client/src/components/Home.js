import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import apiService from "../services/ApiService";
import logo from "../images/logo.png";

export default function Home({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    apiService
      .login({
        email: email,
        userName: userName,
        password: password,
      })
      .then((data) => {
        setEmail("");
        setUserName("");
        setPassword("");
      });
  }

  const validateForm = () => {
    return !email || !password || !userName;
  };

  return (
    <div className="login">
      <img src={logo} className="logo-home" />
      <div className="position-login">
        <div className="login-box">
          <h1>Log In</h1>
          <form className="user-box" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              className="register-button"
              disabled={validateForm()}
            >
              Log In
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
        <div className="right-side-home">
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_jsilmnl8.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            className="main-animation"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}
