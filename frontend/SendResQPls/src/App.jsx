import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/dashboard/dashboard";
import Requests from "./pages/Requests/Requests";
import CallLogs from "./components/Call Logs/CallLogs";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/call-logs" element={<CallLogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

