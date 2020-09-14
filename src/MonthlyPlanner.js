import React from "react";
import "./index.css";
import PlannedMeal from "./PlannedMeal";

let MonthlyPlanner = ({ items }) => {
  return (
      <div className="31daygrid">
    <div className="cards">
      {items.map((item) => (
        <PlannedMeal key={item.id} item={item}></PlannedMeal>
      ))}
    </div>
    </div>
  );
};

export default MonthlyPlanner;