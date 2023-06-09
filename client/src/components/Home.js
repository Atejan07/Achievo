import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import apiService from "../services/ApiService";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import {userContext} from '../context/userContext';

const initialState = {
  email: "",
  password: "",
};

export default function Home({ setIsAuthenticated}) {
  const { user, updateUser } = useContext(userContext)
  let navigate = useNavigate();
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await apiService.login(state);
    // res= { accessToken : string, user: {...}}
    console.log(res)
    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem("accessToken", accessToken);
      const {user} = res;
      updateUser(user)
      setIsAuthenticated(true);
      navigate("/profile");
    }
  };

  const validateForm = () => {
    return !state.email || !state.password;
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
              placeholder="name@email.com"
              value={state.email}
              name="email"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={state.password}
              onChange={handleChange}
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
