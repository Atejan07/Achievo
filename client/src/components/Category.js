import React from 'react'
import { deleteCategory } from '../services/Categories';
import { useState } from 'react';

export default function Category({item, setItem}) {

  const handleDelete = () => {
    deleteCategory(item._id).then((item) => {
      console.log(item);
      setItem((items) => items.filter((el) => el._id !== item._id));
    });
  };

  return (
    <div className='category'>
      <h1>{item.title}</h1>
      <button onClick={handleDelete}></button>
    </div>
  )
}
