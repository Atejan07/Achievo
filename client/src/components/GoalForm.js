import React from "react";
import { useState } from "react";
import { postGoal } from "../services/Goals";

export default function GoalForm({ setGoal }) {
  const [title, setTitle] = useState("");



  const submitItem = () => {
    const goalsTitle = title;
    if (!goalsTitle) return alert("Need to provide a Goal");
    setTitle("");
    const goal = {
      title: goalsTitle,
    };
    postGoal(goal).then((newGoal) => {
      // console.log(newItem);
      setGoal((goals) => [...goals, newGoal]);
    });
  };

  return (
    <div className="goal-form">
      <input
        type="input"
        title={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Goal"
        className="goal-title"
      ></input>
      <button onClick={submitItem} className="goal-input">
        Add
      </button>
    </div>
  );
}
