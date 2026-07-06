import React from "react";
import "./StatsCards.css";

import {
  FiFileText,
  FiAlertTriangle,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Requests",
    value: "7",
    icon: <FiFileText />,
    color: "neutral",
  },
  {
    title: "Pending",
    value: "7",
    icon: <FiAlertTriangle />,
    color: "pending",
  },
  {
    title: "Dispatched",
    value: "0",
    icon: <FiSend />,
    color: "dispatched",
  },
  {
    title: "Completed",
    value: "0",
    icon: <FiCheckCircle />,
    color: "completed",
  },
];

export default function StatsCards() {
  return (
    <section className="stats-grid">
      {stats.map((item, index) => (
        <div className={`stats-card ${item.color}`} key={index}>
          <div className="stats-content">
            <div className="stats-details">
              <p>{item.title}</p>
              <h2>{item.value}</h2>
            </div>

            <div className="stats-icon">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}