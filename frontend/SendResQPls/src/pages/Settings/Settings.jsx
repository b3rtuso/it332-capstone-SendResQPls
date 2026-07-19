import React from "react";
import "./settings.css";

import {
  MdPerson,
  MdNotifications,
  MdSecurity,
  MdEmergency,
  MdBusiness,
  MdSave
} from "react-icons/md";

export default function Settings() {
  return (
    <div className="settings-page">

      <div className="settings-grid">

        {/* Account Settings */}
        <div className="settings-card">
          <div className="settings-title">
            <MdPerson />
            <h3>Administrator Account</h3>
          </div>

          <div className="settings-content">
            <label>Name</label>
            <input type="text" value="Admin User" readOnly />

            <label>Role</label>
            <input type="text" value="System Administrator" readOnly />

            <label>Email</label>
            <input type="email" value="admin@sendresqpls.com" readOnly />
          </div>
        </div>


        {/* Notification Settings */}
        <div className="settings-card">
          <div className="settings-title">
            <MdNotifications />
            <h3>Notifications</h3>
          </div>

          <div className="toggle-row">
            <span>New Emergency Requests</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>Responder Updates</span>
            <input type="checkbox" defaultChecked />
          </div>

          <div className="toggle-row">
            <span>System Alerts</span>
            <input type="checkbox" />
          </div>
        </div>


        {/* Emergency Settings */}
        <div className="settings-card">
          <div className="settings-title">
            <MdEmergency />
            <h3>Emergency Categories</h3>
          </div>

          <ul className="category-list">
            <li>Fire Emergency</li>
            <li>Medical Emergency</li>
            <li>Road Accident</li>
            <li>Flood</li>
            <li>Rescue Operation</li>
          </ul>
        </div>


        {/* Department Settings */}
        <div className="settings-card">
          <div className="settings-title">
            <MdBusiness />
            <h3>Departments</h3>
          </div>

          <p>
            Manage MDRRMO departments and responder assignments.
          </p>

          <button>
            Manage Departments
          </button>
        </div>


        {/* Security Settings */}
        <div className="settings-card">
          <div className="settings-title">
            <MdSecurity />
            <h3>Security</h3>
          </div>

          <button className="password-btn">
            Change Password
          </button>
        </div>


      </div>


      <button className="save-btn">
        <MdSave />
        Save Changes
      </button>

    </div>
  );
}