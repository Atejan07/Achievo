import React from "react";
import { deleteCategory } from "../services/Categories";
import { useState, useContext } from "react";
import {userContext} from '../context/userContext'

export default function Category({ item, setItem }) {
  const {user} = useContext(userContext)


  const handleDelete = (e) => {
    deleteCategory(item._id).then((item) => {
      if (user) setItem((items) => items.filter((el) => el._id !== item._id));
    });
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
