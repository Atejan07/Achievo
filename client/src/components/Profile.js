import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import { getCategories } from '../services/Categories';
import Navbar from './Navbar';
import CategoryList from './CategoryLIst';

export default function Profile() {

const [items, setItem] = useState([]);

useEffect(() => {
getCategories().then(data => {
console.log(data)
setItem(data)
})
}, [])


  return (
    <div>
     <Navbar></Navbar>
     <CategoryForm setItem={setItem}></CategoryForm>
     <CategoryList  items={items} setItem={setItem}></CategoryList>
    </div>
  )
}
