import "./App.css";
import React from "react";
import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "antd/dist/reset.css";
import "./index.css";
import { userContext } from "./context/userContext";
import apiService from "./services/ApiService";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, updateUser } = useContext(userContext);

  function checkToken() {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      apiService.profile(accessToken).then((data) => {
        updateUser(data);
      });
      setIsAuthenticated(true);
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar isAuthenticated={isAuthenticated}></Navbar>
        <Dashboard setIsAuthenticated={setIsAuthenticated}></Dashboard>
      </Router>
    </div>
  );
}

export default App;
