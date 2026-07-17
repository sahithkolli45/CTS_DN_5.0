import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore({ name, school, total, goal }) {
  const average = total / goal;

  return (
    <div className="score-container">
      <h1>Student Details</h1>

      <div className="details">
        <p>
          <span>Name:</span> {name}
        </p>

        <p>
          <span>School:</span> {school}
        </p>

        <p>
          <span>Total:</span> {total}
        </p>

        <p>
          <span>Goal:</span> {goal}
        </p>

        <p>
          <span>Average Score:</span> {average}
        </p>
      </div>
    </div>
  );
}

export default CalculateScore;