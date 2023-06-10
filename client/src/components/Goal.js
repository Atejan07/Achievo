import React from "react";
import GoalForm from "./GoalForm";
import { useEffect, useState, useContext } from "react";
import { getGoals } from "../services/Goals";
import GoalList from "./GoalList";

export default function Goal({categoryId}) {
  const [goals, setGoal] = useState([]);
  console.log(goals, categoryId, 'INSIDE EACH GOAL')

  useEffect(() => {
    getGoals(categoryId).then((data) => {
      // console.log(data)
      setGoal(data.goals);
    });
  }, []);

  return (
    <div>
      <GoalForm setGoal={setGoal} categoryId={categoryId}></GoalForm>
      <GoalList goals={goals} setGoal={setGoal}></GoalList>
    </div>
  );
}
