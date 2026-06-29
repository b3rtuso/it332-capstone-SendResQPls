import React from "react";
import "./Sidebar.css";

import logo from "../../assets/logo.png";

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
          <img
            src={logo}
            alt="SendResQPls"
            className="sidebar-logo"
          />

          <div>
            <h2>SendResQPls</h2>
            <p>MDRRMO Balayan</p>
          </div>
        </div>

        <nav className="sidebar-menu">

          <a href="#" className="active">
            <MdDashboard />
            Dashboard
          </a>

          <a href="#">
            <MdAssignment />
            Requests
          </a>

          <a href="#">
            <MdCall />
            Call Logs
          </a>

          <a href="#">
            <MdBarChart />
            Analytics & Reports
          </a>

          <a href="#">
            <MdApartment />
            Departments
          </a>

          <a href="#">
            <MdSettings />
            Settings
          </a>

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