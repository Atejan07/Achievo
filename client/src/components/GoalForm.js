import React from "react";
import { useState } from "react";
import { postGoal } from "../services/Goals";
import { DatePicker } from 'antd';
const { MonthPicker } = DatePicker;





export default function GoalForm({ setGoal }) {
  const [title, setTitle] = useState("");
  const [description ,setDescription] = useState("");
  

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const submitItem = () => {
    const goalsTitle = title;
    const goalsDescription = description;
    if (!goalsTitle) return alert("Need to provide a Goal");
    setTitle("");
    const goal = {
      title: goalsTitle,
      description: goalsDescription

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
       <input
        type="input"
        description={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="goal-description"
      ></input>
      <button onClick={submitItem} className="goal-input">
        Add
      </button>
      <div>
    <div>
    <DatePicker onChange={onChange} />
     </div>
    </div>
    </div>
  );
}
