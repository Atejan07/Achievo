import React from "react";
import GoalForm from "./GoalForm";
import { useEffect, useState, useContext } from "react";
import { getGoals } from "../services/Goals";
import GoalList from "./GoalList";

export default function Goal() {
  const [goals, setGoal] = useState([]);

  useEffect(() => {
    getGoals().then((data) => {
      // console.log(data)
      setGoal(data);
    });
  }, []);

  return (
    <div>
      <GoalForm setGoal={setGoal}></GoalForm>
      <GoalList goals={goals} setGoal={setGoal}></GoalList>
    </div>
  );
}
