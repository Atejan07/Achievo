import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryForm from "./CategoryForm";
import { getCategories } from "../services/Categories";
import Navbar from "./Navbar";
import CategoryList from "./CategoryLIst";
import apiService from "../services/ApiService";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import ProfileNavbar from "./profileNavbar";

export default function Profile({ setIsAuthenticated }) {
  const initialState = {
    userName: "",
  };

  const [items, setItem] = useState([]);
  const [state, setState] = useState(initialState);
  const { user, updateUser } = useContext(userContext);
  console.log(user);

  useEffect(() => {
    setItem(user.categories);
  }, []);

  const userEmail = user.email;

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   const getProfile = async (accessToken) => {
  //     const userInfo = await apiService.profile(accessToken);
  //     if (userInfo) {
  //       const { firstName, lastName } = userInfo;
  //       setState((prevState) => {
  //         return {
  //           ...prevState,
  //           userName,
  //         };
  //       });
  //     } else {
  //       console.log('No user info found ');
  //     }
  //   };
  //   getProfile(accessToken);
  // }, []);

  return (
    <div className="profile-page">
      <ProfileNavbar></ProfileNavbar>
      {user && <div style={{ color: "white" }}>hello {user.userName}</div>}
      <CategoryForm setItem={setItem}></CategoryForm>
      <CategoryList items={items} setItem={setItem}></CategoryList>
    </div>
  );
}
