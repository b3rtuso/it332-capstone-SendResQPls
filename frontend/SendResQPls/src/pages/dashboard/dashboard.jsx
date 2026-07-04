
import "./dashboard.css";

import StatsCards from "../../components/Dashboard/StatsCards";
import ChartSection from "../../components/Dashboard/ChartSection";
import RecentRequests from "../../components/Dashboard/RecentRequests";

function Dashboard() {
  return (
    <>
      <StatsCards />
      <ChartSection />
      <RecentRequests />
    </>
  );
}

export default Dashboard;