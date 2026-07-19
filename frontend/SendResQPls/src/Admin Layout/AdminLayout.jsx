import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";

import "../pages/dashboard/dashboard.css";

function AdminLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const title = (() => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/requests") return "Requests";
    if (pathname.startsWith("/requests/")) return "Request Details";
    if (pathname === "/call-logs") return "Call Logs";
    if (pathname === "/analytics") return "Analytics & Reports";
    if (pathname === "/departments") return "Departments";
    if (pathname === "/settings") return "Settings";
    return "Dashboard";
  })();

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

