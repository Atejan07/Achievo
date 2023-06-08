import React from 'react'
import Category from './Category';

export default function CategoryList({items,setItem}) {
  return (
    <div className='category-list'>
      {items.map(item =>{
      return <Category key={item._id} item={item} setItem={setItem}></Category>
      })}
    </div>
  )
}
