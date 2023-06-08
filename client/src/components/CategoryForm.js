import React from 'react'
import {useState} from "react"
import { postCategory } from '../services/Categories'

export default function CategoryForm({setItem}) {

const [title, setTitle] = useState('');

const submitItem= ()=> {
const categoryTitle = title;
if (!categoryTitle) return alert('Need to provide a Category');
setTitle('');
const category = {
title: categoryTitle
};
postCategory(category).then((newItem)=>{
console.log(newItem);
setItem((items) => [...items, newItem])
});
};
  return (
    <div>
      <input type="text" title={title}  onChange={(e) => setTitle(e.target.value)}
        placeholder="Category"></input>
        <button onClick={submitItem}>Add</button>
      </div>
  )
}
