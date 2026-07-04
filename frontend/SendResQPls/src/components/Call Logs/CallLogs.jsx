import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import "./CallLogs.css";

import { MdSearch, MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export default function CallLogs() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <div className="topbar">
          <div className="topbar-left">
            <h1>Call Logs</h1>
            <p>View and manage emergency call records.</p>
          </div>

          <div className="topbar-right">
            <div className="search-box">
              <MdSearch />
              <input
                type="text"
                placeholder="Search call logs..."
              />
            </div>

            <div className="status-pill">
              <span className="status-dot"></span>
              System Online
            </div>

            <button className="icon-btn">
              <MdNotifications />
              <span className="notification-badge">3</span>
            </button>

            <div className="profile">
              <FaUserCircle className="profile-icon" />
              <div>
                <h4>Admin User</h4>
                <span>System Administrator</span>
              </div>
            </div>
          </div>
        </div>

        <div className="call-logs-container">
          <div className="call-log">
            <div className="call-log-header">
              <h3>Call Log 1</h3>
              <span>2024-06-01</span>
            </div>

            <div className="call-log-details">
              <p><strong>Caller:</strong> John Doe</p>
              <p><strong>Duration:</strong> 5 minutes</p>
              <p><strong>Status:</strong> Completed</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}