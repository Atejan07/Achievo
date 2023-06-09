import React, { useState, useContext } from "react";
import { deleteGoal } from "../services/Goals";
import { userContext } from "../context/userContext";
import { updateCompleted } from "../services/Goals";
import importantImage from "../images/alert.png";
import deleteImg from "../images/delete.png";

export default function EachGoal({ goal, setGoal }) {
  const [completed, setCompleted] = useState(false);
  const { user } = useContext(userContext);

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
    updateCompleted(goal).then((newGoal) => {
      setGoal((goals) =>
        goals.map((g) => (g._id === goal._id ? updatedGoal : g))
      );
    });
  };

  return (
    <div className="each-goal">
      <div className="important-parent">
        <div className="main-title-goal">
          <h1 className="goal-title">{goal.title}</h1>
        </div>
        <p>Description: {goal.description}</p>
        <p>Deadline: {calculateDaysLeft(goal.deadline)}</p>
        <div className="important">
          {goal.important && (
            <img
              src={importantImage}
              alt="Important"
              className="important-image"
            />
          )}
        </div>
        <p className="completed-label">Completed</p>
        <label class="switch">
          <input
            className="important-input"
            type="checkbox"
            checked={goal.completed}
            onChange={handleCheckboxChange}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <button onClick={handleDelete} className="delete-btn">
        <img src={deleteImg} alt="Important" className="deleteImg" />
      </button>
    </div>
  );
}
