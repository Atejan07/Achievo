import React, { useState , useContext } from "react";
import { deleteGoal, postGoal } from "../services/Goals";
import {userContext} from '../context/userContext'


export default function EachGoal({ goal, setGoal }) {

  const [completed, setCompleted] = useState(false);
  const {user} = useContext(userContext)



  const handleDelete = () => {
    deleteGoal(goal._id).then(() => {
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

  const handleCheckboxChange = () => {
    setCompleted(!completed);
    const updatedGoal = {
      ...goal,
      completed: !completed,
    };
    postGoal(updatedGoal).then((newGoal)=>{
    setGoal((goals) =>
      goals.map((g) => (g._id === goal._id ? updatedGoal : g), [...goals, newGoal])
    );
  })
  };

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
        onChange={handleCheckboxChange}
      />
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
