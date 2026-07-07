import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Requests from "./pages/Requests/Requests";
import RequestDetails from "./pages/RequestDetails/RequestDetails";
import CallLogs from "./components/Call Logs/CallLogs";

import AdminLayout from "./layouts/AdminLayout";
import DepartmentLayout from "./layouts/department.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin Layout */}
        <Route element={<AdminLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/requests"
            element={<Requests />}
          />

          <Route
            path="/requests/:id"
            element={<RequestDetails />}
          />

          <Route
            path="/call-logs"
            element={<CallLogs />}
          />

          <Route
            path="/departments"
            element={<DepartmentLayout />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App; 