import React from 'react'
import { useEffect, useState, useContext} from "react";
import { userContext } from "../context/userContext";
import { getAllImportant } from '../services/Goals';


export default function Maingoals() {
const { user, updateUser } = useContext(userContext);
const [importantGoals, setImportantGoals] = useState([]);


useEffect(()=> {
console.log(user)
if (user) getAllImportant(user._id).then((data) => {
setImportantGoals(data)
})
}, [user])

  return (
    <div className='mainGoals'>
      {importantGoals.map((goal)=>{
        return(
        <div>
      <p>{goal.title}</p>
      </div>
      )
      })}
    </div>
  )
}
