import React from 'react'
import { useEffect, useState, useContext} from "react";
import { userContext } from "../context/userContext";
import { getAllImportant } from '../services/Goals';
import Draggable from 'react-draggable';



export default function Maingoals() {
const { user, updateUser } = useContext(userContext);
const [importantGoals, setImportantGoals] = useState([]);


useEffect(()=> {
if (user) getAllImportant(user._id).then((data) => {
setImportantGoals(data)
})
}, [user])

function calculateDaysLeft(deadline) {
  const current = new Date();
  const targetDate = new Date(deadline);
  const differenceMs = targetDate - current;
  const daysLeft = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  if (daysLeft < 0) {
    return "Should be accomplished";
  }
  return daysLeft;
}



  return (
    <div className='mainGoals'>
    {importantGoals.map((goal) => {
  return (
    <Draggable>
      <div className='thing'>
        <h1>{goal.title}</h1>
        <br />
        <p>Deadline: {calculateDaysLeft(goal.deadline)} days left</p>
        <br />
      </div>
    </Draggable>
  );
})}
    </div>
  )
}
