import { useEffect, useState } from "react";
import "./dashboard.css";

import { FiRadio } from "react-icons/fi";

import StatsCards from "../../components/Dashboard/StatsCards";
import ChartSection from "../../components/Dashboard/ChartSection";
import RecentRequests from "../../components/Dashboard/RecentRequests";

function Dashboard() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="dashboard-page">
      {/* Dashboard Header */}
      <div className="dashboard-heading">
        <div className="dashboard-title-group">
          <h1>Dashboard</h1>

          <p>
            {formattedDate}
            <span>&nbsp;•&nbsp;{formattedTime}</span>
          </p>
        </div>

        <div className="pending-badge">
          <FiRadio />
          <span>7 pending</span>
        </div>
      </div>

      {/* Statistics */}
      <StatsCards />

      {/* Charts */}
      <ChartSection />

      {/* Recent Requests */}
      <RecentRequests />
    </div>
  );
}

export default Dashboard;