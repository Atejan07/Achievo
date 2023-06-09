import './App.css';
import React from 'react'
import {useState, useEffect, useContext} from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import 'antd/dist/reset.css';
import "./index.css";
import {userContext} from './context/userContext'
import apiService from './services/ApiService';





function App() {
const [isAuthenticated, setIsAuthenticated] = useState(false);
const {user, updateUser} = useContext(userContext)

function checkToken () {
  const accessToken = localStorage.getItem('accessToken');
   //implement api service with back end route that return user only using accessToken -> sends request to backend router -> with auth middleware -> finds out what the user was 
  //refreshed and set as a user 
  if (accessToken) {
    apiService.profile(accessToken).then(data =>{
      console.log(data)
      updateUser(data);
    })
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
      <Dashboard setIsAuthenticated={setIsAuthenticated}></Dashboard>
    </Router>
    </div>
  );
}

export default App;
