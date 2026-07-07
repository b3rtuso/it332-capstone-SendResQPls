import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";

import "../pages/dashboard/dashboard.css";

function AdminLayout() {
  const location = useLocation();

  let title = "Dashboard";

  switch (true) {
    case location.pathname === "/dashboard":
      title = "Dashboard";
      break;

    case location.pathname === "/requests":
      title = "Requests";
      break;

    case location.pathname.startsWith("/requests/"):
      title = "Request Details";
      break;

    case location.pathname === "/call-logs":
      title = "Call Logs";
      break;

    case location.pathname === "/analytics":
      title = "Analytics & Reports";
      break;

    case location.pathname === "/departments":
      title = "Departments";
      break;

    case location.pathname === "/settings":
      title = "Settings";
      break;

    default:
      title = "Dashboard";
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