import React from "react";
import "./Dashboard.css";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import StatsCards from "../../components/Dashboard/StatsCards";
import ChartSection from "../../components/Dashboard/ChartSection";
import RecentRequests from "../../components/Dashboard/RecentRequests";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="dashboard-content">

        <Topbar />
        <StatsCards />
        <ChartSection />
        <RecentRequests />
      </main>

    </div>
  );
}