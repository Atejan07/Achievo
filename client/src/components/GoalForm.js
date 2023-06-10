import React from "react";
import { useState } from "react";
import { postGoal } from "../services/Goals";
import { getGoals } from "../services/Goals";
import { DatePicker } from "antd";
const { MonthPicker } = DatePicker;

export default function GoalForm({ setGoal }) {
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
    setTitle("");
    setImportant(false);
    setDescription('');
    const goal = {
      title: goalsTitle,
      description: goalsDescription,
      deadline: selectDate,
      important: important,
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
        <input
            className="important-input"
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          ></input>
      <button onClick={submitItem} className="goal-input">
        Add
      </button>
      <div>
        <div>
          <DatePicker value={selectedDate} onChange={handleDateChange} />
        </div>
      </div>
    </div>
  );
}
