import { useState } from "react";
import "./Requests.css";

import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

import ReqFilters from "../../components/Requests/ReqFilters";
import ReqTable from "../../components/Requests/ReqTable";
import Pagination from "../../components/Requests/Pagination";

import ReqDetails from "../../components/Requests/ReqDetails";
import AssignDept from "../../components/Requests/AssignDept";
import Dispatch from "../../components/Requests/Dispatch";

function Requests() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const [showDetails, setShowDetails] = useState(false);
  const [showAssign, setShowAssign] = useState(false);
  const [showDispatch, setShowDispatch] = useState(false);

  const handleView = (request) => {
    setSelectedRequest(request);
    setShowDetails(true);
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="dashboard-content">
        <Topbar title="Requests" />

        <div className="requests-page">
          <div className="requests-header">
            <p>Manage emergency requests and dispatch departments.</p>
          </div>

          <ReqFilters />

          <ReqTable onView={handleView} />

          <Pagination />
        </div>
      </main>

      {showDetails && selectedRequest && (
        <ReqDetails
          request={selectedRequest}
          onClose={() => setShowDetails(false)}
          onAssign={() => {
            setShowDetails(false);
            setShowAssign(true);
          }}
        />
      )}

      {showAssign && (
        <AssignDept
          request={selectedRequest}
          onClose={() => setShowAssign(false)}
          onDispatch={() => {
            setShowAssign(false);
            setShowDispatch(true);
          }}
        />
      )}

      {showDispatch && (
        <Dispatch
          request={selectedRequest}
          onClose={() => setShowDispatch(false)}
        />
      )}
    </div>
  );
}

export default Requests;