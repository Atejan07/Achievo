import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Logout from "../components/Logout";
import Home from "../components/Home";
import Profile from "../components/Profile";
import { useContext } from "react";
import { userContext } from "../context/userContext";

export default function Dashboard({ setIsAuthenticated }) {
  const user =useContext(userContext);
  return (
    <section className="dashboard">
      <Routes>
        <Route
          path="/register"
          element={<Register setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/profile"
          element={<Profile setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/logout"
          element={<Logout setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/"
          element={<Home setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </section>
  );
}
