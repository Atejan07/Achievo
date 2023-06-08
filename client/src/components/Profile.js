import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import CategoryList from './CategoryList';

export default function Profile() {
  return (
    <div>
     <Navbar></Navbar>
     <CategoryList></CategoryList>
    </div>
  )
}
