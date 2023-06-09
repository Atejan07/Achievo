import React from "react";
import { deleteGoal } from "../services/Goals";

export default function EachGoal({goal, setGoal}) {


  const handleDelete = (e) => {
    console.log(goal,'here')
    deleteGoal(goal._id).then((item) => {
    console.log(goal, 'here')
    setGoal((goal) => goal.filter((el) => el._id !== goal._id));
    });
  };

  return (
    <div>
      <h1>{goal.title}</h1>
      <p>{goal.description}</p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
