import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Requests from "./pages/Requests/Requests";
import RequestDetails from "./pages/RequestDetails/RequestDetails";

import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Admin Pages */}
        <Route element={<AdminLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/requests" element={<Requests />} />

          <Route
            path="/requests/:id"
            element={<RequestDetails />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;