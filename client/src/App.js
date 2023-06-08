import './App.css';
import React from 'react'
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
// import Dashboard from './src/components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar';
import Register from './components/Register'
import Logout from './components/Logout'
import Profile from './components/Profile'
import auth from './utils/auth'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div className="App">
    <Router>
    <Routes>
      <Route
        path="/register"
        element={<Register setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/logout"
        element={<Logout setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} />} />

    {/* <Navbar Authenticated={isAuthenticated}></Navbar> */}
    {/* <Home setIsAuthenticated={setIsAuthenticated}></Home> */}
    {/* <Dashboard setIsAuthenticated={ setIsAuthenticated }></Dashboard> */}
    </Routes>
    </Router>
    </div>
  );
}

export default App;
