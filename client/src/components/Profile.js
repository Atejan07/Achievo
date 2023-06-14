import React, { useEffect, useState, useContext } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryLIst";
import { userContext } from "../context/userContext";
import Maingoals from "./maingoals";

export default function Profile({ setIsAuthenticated }) {
  const initialState = {
    userName: "",
  };

  const [items, setItem] = useState([]);
  const [state, setState] = useState(initialState);
  const { user, updateUser } = useContext(userContext);

  useEffect(() => {
    if (user) setItem(user.categories);
  }, [user]);

  return (
    <div className="profile-page">
      <CategoryForm setItem={setItem} items={items}></CategoryForm>
      <CategoryList items={items} setItem={setItem}></CategoryList>
      <Maingoals></Maingoals>
    </div>
  );
}
