import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>SendResqPls</h2>
          <p>Admin Dashboard</p>
        </div>

        <ul className="sidebar-menu">
          <li>
            <a href="#" className="active">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#">Incidents</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Emergency Response Monitoring System</p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card blue">
            <h3>Total Reports</h3>
            <div className="number">245</div>
          </div>

          <div className="stat-card green">
            <h3>Resolved Cases</h3>
            <div className="number">198</div>
          </div>

          <div className="stat-card orange">
            <h3>Pending Cases</h3>
            <div className="number">32</div>
          </div>

          <div className="stat-card red">
            <h3>Emergency Alerts</h3>
            <div className="number">15</div>
          </div>
        </div>

        <div className="table-card">
          <h2>Recent Incident Reports</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Incident</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#001</td>
                <td>Fire Incident</td>
                <td>Barangay San Jose</td>
                <td>
                  <span className="status emergency">Emergency</span>
                </td>
              </tr>
              <tr>
                <td>#002</td>
                <td>Flood Alert</td>
                <td>Barangay Poblacion</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
              </tr>
              <tr>
                <td>#003</td>
                <td>Road Accident</td>
                <td>National Highway</td>
                <td>
                  <span className="status resolved">Resolved</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
