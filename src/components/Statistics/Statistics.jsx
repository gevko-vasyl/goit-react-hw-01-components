import React from "react";

import "./Statistics.scss";

export default function Statistics({ title, statistics }) {
  console.log(title);
  return (
    <div className="statistics-container">
      {title ? (
        <h2 className="title">{title}</h2>
      ) : (
        <h2 className="title">Upload stats</h2>
      )}
      <ul className="stat-list">
        {statistics.map((stat) => (
          <li key={stat.id} className="item">
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
