import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";

import "../pages/dashboard/dashboard.css";

function AdminLayout() {
  const location = useLocation();

  let title;

switch (location.pathname) {
  case "/dashboard":
    title = "Dashboard";
    break;

  case "/requests":
    title = "Requests";
    break;

  case "/call-logs":
    title = "Call Logs";
    break;

  default:
    if (location.pathname.startsWith("/requests/")) {
      title = "Request Details";
    } else {
      title = "Dashboard";
    }
}
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard-content">
        <div className="dashboard-topbar">
          <Topbar title={title} />
        </div>
        <div className="dashboard-body">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;