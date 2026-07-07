import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Requests from "./pages/Requests/Requests";
import RequestDetails from "./pages/RequestDetails/RequestDetails";
import CallLogs from "./components/Call Logs/CallLogs";
import AnalyticsReports from "./pages/Analytics & Reports/AnalyReports";
import Departments from "./pages/Departments/Departments";

import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Requests */}
          <Route
            path="/requests"
            element={<Requests />}
          />

          {/* Request Details */}
          <Route
            path="/requests/:id"
            element={<RequestDetails />}
          />

          {/* Call Logs */}
          <Route
            path="/call-logs"
            element={<CallLogs />}
          />

          {/* Analytics & Reports */}
          <Route
            path="/analytics"
            element={<AnalyticsReports />}
          />

          <Route 
            path="/departments" 
            element={<Departments />} 
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;