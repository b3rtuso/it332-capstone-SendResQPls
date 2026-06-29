import React from "react";
import "./Topbar.css";

import {
  FiSearch,
  FiBell,
  FiCalendar,
} from "react-icons/fi";

import { FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="topbar">

      <div className="topbar-left">
        <h1>Dashboard</h1>
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

          <div>
            <h4>Admin User</h4>
            <span>Administrator</span>
          </div>
        </div>

      </div>

    </header>
  );
}