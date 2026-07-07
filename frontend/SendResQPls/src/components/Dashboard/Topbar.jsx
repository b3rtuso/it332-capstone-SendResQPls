import React from "react";
import "./Topbar.css";

import { FiSearch, FiBell } from "react-icons/fi";

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search-box">
        <FiSearch />

        <input
          type="text"
          placeholder="Search requests, departments..."
          aria-label="Search requests and departments"
        />
      </div>

      <div className="topbar-actions">
        <div className="status-pill">
          <span className="status-dot"></span>
          <span>System Active</span>
        </div>

        <button className="icon-btn" type="button">
          <FiBell />
          <span className="notification-badge">7</span>
        </button>

        <div className="topbar-divider"></div>

        <button className="profile-btn" type="button">
          AD
        </button>
      </div>
    </header>
  );
}