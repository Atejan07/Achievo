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
  // console.log(user);
  useEffect(() => {
    console.log(user.categories, 'profile items')
    setItem(user.categories);
    console.log(items, 'PROFILE ITEMS AFTER SETITEM')
    // console.log(user.categories , "Users categories")
  }, [user]);

  return (
    <div className="profile-page">
      <ProfileNavbar></ProfileNavbar>
      {user && <div style={{ color: "white" }}>hello {user.userName}</div>}
      <CategoryForm setItem={setItem} items={items}></CategoryForm>
      <CategoryList items={items} setItem={setItem}></CategoryList>
    </div>
  );
}
