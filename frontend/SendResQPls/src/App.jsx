import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Requests from "./pages/Requests/Requests";
import RequestDetails from "./pages/RequestDetails/RequestDetails";
import CallLogs from "./components/Call Logs/CallLogs";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";

import AdminLayout from "./Department.layout/AdminLayout";
import DepartmentLayout from "./Department.layout/department.jsx";

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
            element={<Analytics />}
          />

          <Route
            path="/departments"
            element={<DepartmentLayout />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;