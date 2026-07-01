import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";

import { NavLink } from "react-router-dom";

import {
  MdDashboard,
  MdAssignment,
  MdCall,
  MdBarChart,
  MdApartment,
  MdSettings,
} from "react-icons/md";

import { FaUserCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar-header">
          <img src={logo} alt="SendResQPls" className="sidebar-logo" />

          <div>
            <h2>SendResQPls</h2>
            <p>MDRRMO Balayan</p>
          </div>
        </div>

        <nav className="sidebar-menu">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdDashboard />
            Dashboard
          </NavLink>

          <NavLink
            to="/requests"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdAssignment />
            Requests
          </NavLink>

          <NavLink
            to="/call-logs"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdCall />
            Call Logs
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdBarChart />
            Analytics & Reports
          </NavLink>

          <NavLink
            to="/departments"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdApartment />
            Departments
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdSettings />
            Settings
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-user">
        <FaUserCircle className="user-avatar" />

        <div>
          <h4>Admin User</h4>
          <span>System Administrator</span>
        </div>
      </div>
    </aside>
  );
}