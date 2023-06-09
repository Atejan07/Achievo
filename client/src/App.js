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
import 'antd/dist/reset.css';
import "./index.css";





function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const [user,setUser] = useState(null);

function checkToken () {
  const accessToken = localStorage.getItem('accessToken');
  const user = null; //implement api service with back end route that return user only using accessToken -> sends request to backend router -> with auth middleware -> finds out what the user was 
  //refreshed and set as a user 
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
    <Navbar isAuthenticated={isAuthenticated}></Navbar>
      {/* {user && <div style={{color: 'white'}}>Hello {user.userName}</div>} */}
      <Dashboard setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}></Dashboard>
    </Router>
    </div>
  );
}

export default App;
