import React from 'react'
import { useEffect, useState, useContext} from "react";
import { userContext } from "../context/userContext";
import { getAllImportant } from '../services/Goals';


export default function Maingoals() {


const { user, updateUser } = useContext(userContext);
const [importantGoals, setImportantGoals] = useState([]);


useEffect(()=> {
console.log(user)
getAllImportant(user._id).then((data) => {
// console.log(data[0], 'mainhoe')
setImportantGoals(data)
})
}, [])

  return (
    <div className='mainGoals'>
      {importantGoals.map((goal)=>{
        return(
        <div>
      <p>{goal.title}</p>
      <p>{goal.description}</p>
      </div>
      )
      })}
    </div>
  )
}
