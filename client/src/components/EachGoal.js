import React from "react";
import { deleteGoal } from "../services/Goals";

export default function EachGoal({ goal, setGoal }) {
  const handleDelete = (e) => {
    // console.log(goal,'here')
    deleteGoal(goal._id).then((goal) => {
      // console.log(goal, 'here')
      setGoal((goals) => goals.filter((el) => el._id !== goal._id));
    });
  };

  // function calculateDaysLeft(currentDate) {
  //   const current = new Date(currentDate);
  //   const targetDate = goal.deadline;
  //   const differenceMs = targetDate - current;
  //   const daysLeft = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  //   return daysLeft;
  // }


  return (
    <div>
      <h1>{goal.title}</h1>
      <p>{goal.description}</p>
      <p>{goal.deadline}</p>
      <h3>{goal.important ? "❤️" : ""}</h3>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
