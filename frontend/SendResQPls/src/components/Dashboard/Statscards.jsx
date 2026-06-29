import React from "react";
import "./StatsCards.css";

import {
  FiFileText,
  FiAlertTriangle,
  FiUsers,
  FiClock,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Requests",
    value: "1,248",
    change: "+12%",
    icon: <FiFileText />,
    color: "blue",
  },
  {
    title: "Active Incidents",
    value: "23",
    change: "+5%",
    icon: <FiAlertTriangle />,
    color: "red",
  },
  {
    title: "Responders",
    value: "86",
    change: "+8%",
    icon: <FiUsers />,
    color: "green",
  },
  {
    title: "Avg. Response",
    value: "4.8 min",
    change: "-10%",
    icon: <FiClock />,
    color: "orange",
  },
];

export default function StatsCards() {
  return (
    <section className="stats-grid">
      {stats.map((item, index) => (
        <div className={`stats-card ${item.color}`} key={index}>

          <div className="stats-top">

            <div>
              <p>{item.title}</p>
              <h2>{item.value}</h2>
            </div>

            <div className="stats-icon">
              {item.icon}
            </div>

          </div>

          <span className="stats-change">
            {item.change} this month
          </span>

        </div>
      ))}
    </section>
  );
}