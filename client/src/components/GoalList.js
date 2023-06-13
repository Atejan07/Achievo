import React from "react";
import EachGoal from "./EachGoal";


export default function GoalList({ goals, setGoal }) {
  return (
    <div className='goal-list' >
      {goals.map((goal) => {
        return (
          <EachGoal key={goal._id} goal={goal} setGoal={setGoal}>
          </EachGoal>
        );
      })}
    </div>
  );
}
