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

function Sidebar() {
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

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdDashboard />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/requests"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <MdAssignment />
            <span>Requests</span>
          </NavLink>

          <NavLink
            to="/call-logs"
            className="sidebar-link"
          >
            <MdCall />
            <span>Call Logs</span>
          </NavLink>

          <NavLink
            to="/analytics"
            className="sidebar-link"
          >
            <MdBarChart />
            <span>Analytics & Reports</span>
          </NavLink>

          <NavLink
            to="/departments"
            className="sidebar-link"
          >
            <MdApartment />
            <span>Departments</span>
          </NavLink>

          <NavLink
            to="/settings"
            className="sidebar-link"
          >
            <MdSettings />
            <span>Settings</span>
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

export default Sidebar;