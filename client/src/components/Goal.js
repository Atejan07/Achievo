import React from "react";
import GoalForm from "./GoalForm";
import { useEffect, useState} from "react";
import { getGoals } from "../services/Goals";
import GoalList from "./GoalList";
import { Progress} from "antd";

export default function Goal({ categoryId }) {
  const [goals, setGoal] = useState([]);

  useEffect(() => {
    getGoals(categoryId).then((data) => {
      setGoal(data.goals);
    });
  }, [categoryId]);

  const calculateCompletionPercentage = () => {
    if (goals.length === 0) {
      return 0;
    }
    const completedGoals = goals.filter((goal) => goal.completed);
    const completionPercentage = (completedGoals.length / goals.length) * 100;
    return Math.floor(completionPercentage);
  };

  return (
    <div className="goal-wrapper">
      <GoalForm setGoal={setGoal} categoryId={categoryId}></GoalForm>
      <GoalList goals={goals} setGoal={setGoal}></GoalList>
      <Progress
        className="progress-circle"
        type="circle"
        percent={calculateCompletionPercentage()}
        strokeColor={{
          "0%": "#dc20e6",
          "100%": "#8800ff",
        }}
      />
    </div>
  );
}
