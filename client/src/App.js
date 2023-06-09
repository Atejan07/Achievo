import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
// import Dashboard from './src/components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Register from './components/Register'
import Logout from './components/Logout'
import Profile from './components/Profile'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';





function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);

function checkToken () {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    setIsAuthenticated(true)
  }
}
useEffect(() => {
  checkToken()
}, [])



  return (
    <div className="App">
    <Router>
    <Navbar setIsAuthenticated={setIsAuthenticated} ></Navbar>
      <Dashboard setIsAuthenticated={setIsAuthenticated} ></Dashboard>
    </Router>
    </div>
  );
}

export default App;
