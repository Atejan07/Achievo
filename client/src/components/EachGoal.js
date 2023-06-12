import React from "react";
import { deleteGoal } from "../services/Goals";
import { useState } from "react";


export default function EachGoal({ goal, setGoal }) {

const [completed, setCompleted] = useState(false);


  const handleDelete = (e) => {
    // console.log(goal,'here')
    deleteGoal(goal._id).then((goal) => {
      // console.log(goal, 'here')
      setGoal((goals) => goals.filter((el) => el._id !== goal._id));
    });
  };
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

  const submitItem = () => {
  const completed = completed;
  setCompleted(false)
  const goal = {
    completed: completed,
  };
  
  }



  return (
    <div className="each-goal">
      <h1>{goal.title}</h1>
      <p>{goal.description}</p>
      <p>Days left to reach the Goal: {calculateDaysLeft(goal.deadline)}</p>
      <h3>{goal.important ? "❤️" : ""}</h3>
      <input
            className="important-input"
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          ></input>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
