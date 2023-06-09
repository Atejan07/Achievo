import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import { getCategories } from '../services/Categories';
import Navbar from './Navbar';
import CategoryList from './CategoryLIst';
import apiService from '../services/ApiService'
import { useNavigate } from 'react-router-dom';


export default function Profile() {

  const initialState = {
    userName: '',
  };


const [items, setItem] = useState([]);
const [state, setState] = useState(initialState);

useEffect(() => {
getCategories().then(data => {
console.log(data)
setItem(data)
})
}, [])


  const userName = state.userName;

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const getProfile = async (accessToken) => {
      const userInfo = await apiService.profile(accessToken);
      if (userInfo) {
        const { firstName, lastName } = userInfo;
        setState((prevState) => {
          return {
            ...prevState,
            userName,
          };
        });
      } else {
        console.log('No user info found ');
      }
    };
    getProfile(accessToken);
  }, []);


  return (
    <div className='profile-page'>
     <CategoryForm setItem={setItem}></CategoryForm>
     <CategoryList  items={items} setItem={setItem}></CategoryList>
    </div>
  )
}
