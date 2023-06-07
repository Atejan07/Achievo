import './App.css';
import React from 'react'
import {useState} from 'react'
import Dashboard from '../src/components/Dashboard'
import Navbar from './components/Navbar';
import auth from './utils/auth'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div className="App">
    <Router>
    <Navbar Authenticated={isAuthenticated}></Navbar>
    <Dashboard setIsAuthenticated={setIsAuthenticated}></Dashboard>
    </Router>
    </div>
  );
}

export default App;
