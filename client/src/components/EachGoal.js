import React, { useState , useContext } from "react";
import { deleteGoal, postGoal } from "../services/Goals";
import {userContext} from '../context/userContext'
import { updateCompleted } from "../services/Goals";
import importantImage from '../images/alert.png'
import deleteImg from '../images/delete.png'


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
    updateCompleted(goal).then((newGoal)=>{
    setGoal((goals) =>
      goals.map((g) => (g._id === goal._id ? updatedGoal : g) )
    );
  })
  };

  return (
    <div className="each-goal">
      <h1>{goal.title}</h1>
      <p>Description: {goal.description}</p>
      <p>Deadline: {calculateDaysLeft(goal.deadline)}</p>
      <div className="important">
      <p>Completed</p> {goal.important && (
        <img src={importantImage} alt="Important" className="important-image" />
      )}
      <input
        className="important-input"
        type="checkbox"
        checked={goal.completed}
        onChange={handleCheckboxChange}
      />
      </div>
      <button onClick={handleDelete} className="delete-btn"><img src={deleteImg} alt="Important" className="deleteImg" /></button>
    </div>
  );
}
