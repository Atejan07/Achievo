import React from "react";
import { deleteCategory } from "../services/Categories";
import { useState } from "react";

export default function Category({ item, setItem }) {
  // console.log(item, 'each item');

  const handleDelete = (e) => {
    deleteCategory(item._id).then((item) => {
      setItem((items) => items.filter((el) => el._id !== item._id));
    });
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
