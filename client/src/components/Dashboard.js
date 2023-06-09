import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Register from '../components/Register'
import Logout from '../components/Logout'
import Home from '../components/Home'
import Profile from '../components/Profile'

export default function Dashboard({ setIsAuthenticated, setUser, user}) {
  return (
    <section className="dashboard">
    <Routes>
      <Route
        path="/register"
        element={<Register setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route path="/profile" element={<Profile setIsAuthenticated={ setIsAuthenticated }/>} />
      <Route
        path="/logout"
        element={<Logout setIsAuthenticated={setIsAuthenticated} />}
      />
       <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
    </Routes>
  </section>
  )
}