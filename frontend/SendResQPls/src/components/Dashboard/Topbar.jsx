import React, { useEffect, useRef, useState } from "react";
import "./Topbar.css";

import { FiSearch, FiBell } from "react-icons/fi";

export default function Topbar() {
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New request #1023 received", time: "2m" },
    { id: 2, text: "Ambulance dispatched for #1019", time: "1h" },
  ]);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setNotifOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleBellClick() {
    setNotifOpen((p) => !p);
  }

  async function enableDesktopNotif() {
    if (!("Notification" in window)) {
      alert("Desktop notifications are not supported by this browser.");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      new Notification("SendResQPls", {
        body: "Desktop notifications enabled.",
      });
    }
  }

  return (
    <header className="topbar" ref={ref}>
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

        <div style={{ position: "relative" }}>
          <button className="icon-btn" type="button" onClick={handleBellClick}>
            <FiBell />
            <span className="notification-badge">{notifications.length}</span>
          </button>

          {notifOpen && (
            <div className="notification-dropdown">
              <div className="notification-header">
                <strong>Notifications</strong>
                <button type="button" className="enable-btn" onClick={enableDesktopNotif}>
                  Enable desktop
                </button>
              </div>

              <ul className="notification-list">
                {notifications.map((n) => (
                  <li key={n.id} className="notification-item">
                    <div>{n.text}</div>
                    <small>{n.time}</small>
                  </li>
                ))}
                {notifications.length === 0 && <li className="notification-item">No notifications</li>}
              </ul>
            </div>
          )}
        </div>

        <div className="topbar-divider"></div>

        <button className="profile-btn" type="button">
          AD
        </button>
      </div>
    </header>
  );
}