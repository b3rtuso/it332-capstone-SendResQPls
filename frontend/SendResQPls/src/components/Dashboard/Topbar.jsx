import React, { useEffect, useState } from "react";
import "./Topbar.css";

import { FiSearch, FiBell } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function Topbar({ title }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1>{title}</h1>

        <div className="topbar-date-time">
          <span className="topbar-date">{formattedDate}</span>
          <strong className="topbar-time">{formattedTime}</strong>
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-search-box">
          <FiSearch />
          <input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
          />
        </div>

        <div className="status-pill">
          <span className="status-dot"></span>
          System Active
        </div>

        <button className="icon-btn">
          <FiBell />
          <span className="notification-badge">3</span>
        </button>

        <div className="profile">
          <FaUserCircle className="profile-icon" />
        </div>
      </div>
    </header>
  );
}