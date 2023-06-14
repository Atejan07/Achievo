import React from "react";
import { useState } from "react";
import apiService from "../services/ApiService";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  userName: "",
};

const Register = ({ setIsAuthenticated }) => {
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
    const { email, password, userName } = state;
    const user = { email, password, userName };
    const res = await apiService.register(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem("accessToken", accessToken);
      setIsAuthenticated(true);
      navigate("/profile");
    }
  };

  const validateForm = () => {
    return !state.email || !state.password || !state.userName;
  };

  return (
    <div className="login">
      <div className="login-box">
        <h2>Register</h2>
        <form className="user-box" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name@mail.com"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={state.userName}
            onChange={handleChange}
          />
          <button
            className="register-button"
            type="submit"
            disabled={validateForm()}
          >
            Register
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </form>
      </div>
      <div className="right-side-home">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_i7dxj8qw.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Register;
