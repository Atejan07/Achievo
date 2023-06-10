import React from "react";
import GoalForm from "./GoalForm";
import { useEffect, useState, useContext } from "react";
import { getGoals } from "../services/Goals";
import GoalList from "./GoalList";

export default function Goal({categoryId}) {
  const [goals, setGoal] = useState([]);

  useEffect(() => {
    getGoals(categoryId).then((data) => {
      console.log(data)
      setGoal(data.goals);
      //send category id with request and in back end -> fetch category by id and populate the goals
      //or fetch goals by object id array that is in category object
    });
  }, []);

  return (
    <div>
      <GoalForm setGoal={setGoal} categoryId={categoryId}></GoalForm>
      <GoalList goals={goals} setGoal={setGoal}></GoalList>
    </div>
  );
}
