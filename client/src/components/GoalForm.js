import React from "react";
import { useState } from "react";
import { postGoal } from "../services/Goals";
import { getGoals } from "../services/Goals";
import { DatePicker } from "antd";
const { MonthPicker } = DatePicker;

export default function GoalForm({ setGoal, categoryId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [important, setImportant] = useState(false);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const submitItem = () => {
    const goalsTitle = title;
    const goalsDescription = description;
    const selectDate = selectedDate;
    if (!goalsTitle) return alert("Need to provide a Goal");
    const goal = {
      title: goalsTitle,
      description: goalsDescription,
      deadline: selectDate,
      important: important,
    };
    setTitle("");
    setImportant(false);
    setDescription("");
    setSelectedDate(null);
    postGoal(goal, categoryId).then((newGoal) => {
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
        <label  className="important-container">
        <input
           className="important-input"
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          ></input>
          </label>
      <button onClick={submitItem} className="goal-button">
        Add
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </button>
      <div>
        <div>
        <DatePicker
  value={selectedDate}
  onChange={handleDateChange}
  style={{ 
    borderColor: "#5d10a0",
    color: "#5d10a0"
  }}
/>
        </div>
      </div>
    </div>
  );
}
