import React from "react";
import { useState, useContext } from "react";
import { postCategory } from "../services/Categories";
import {userContext} from '../context/userContext'

export default function CategoryForm({ setItem }) {
  const [title, setTitle] = useState("");
  const {user} = useContext(userContext)


  const submitItem = () => {
    const categoryTitle = title;

    if (!categoryTitle) return alert("Need to provide a Category");
    setTitle("");
    const category = {
      title: categoryTitle
    };
      if (user)  postCategory(category, user._id).then((newItem) => {
      if (user)  setItem ((items) => [...items, newItem]);
      console.log(newItem, "newCategory")
    });
  };
  return (
    <div>
      <div className="form__group field">
        <input
          type="input"
          title={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Category"
          className="form__field"
          id="Category"
        ></input>
        <label htmlFor="name" className="form__label">
          Category
        </label>
      </div>
      <button onClick={submitItem} className="button-input">
        Add
      </button>
    </div>
  );
}
