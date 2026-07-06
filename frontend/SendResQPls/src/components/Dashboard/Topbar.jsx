import React from "react";
import "./Topbar.css";

import {
  FiSearch,
  FiBell,
} from "react-icons/fi";

import { FaUserCircle } from "react-icons/fa";

export default function Topbar({ title }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="topbar">
      <div className="topbar-left">
        <h1>{title}</h1>
        <p>{today}</p>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <FiSearch />
          <input
            type="text"
            placeholder="Search incidents..."
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