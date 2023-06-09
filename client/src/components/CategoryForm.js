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
title: categoryTitle,
};
postCategory(category).then((newItem)=>{
// console.log(newItem);
setItem((items) => [...items, newItem])
});
};
  return (
    <div>
      <div className="form__group field">
      <input type="input" title={title}  onChange={(e) => setTitle(e.target.value)}
        placeholder="Category" className='form__field' id='Category' ></input>
        <label htmlFor="name"  className="form__label">Category</label>
       </div>
      <button onClick={submitItem} className='button-input'>Add</button>
      </div>
  )
}
