import "./Requests.css";

import { useState } from "react";
import ReqFilters from "../../components/Requests/ReqFilters";
import ReqTable from "../../components/Requests/ReqTable";

function Requests() {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("All Status");
  const [type, setType] = useState("All Types");

  return (
    <div className="requests-page">
      <div className="requests-heading">
        <div className="requests-title-group">
          <h1>Requests</h1>
          <p>Manage emergency requests and dispatch departments.</p>
        </div>
      </div>

      <ReqFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        status={status}
        setStatus={setStatus}
        type={type}
        setType={setType}
      />

      <ReqTable searchQuery={searchQuery} status={status} type={type} />
    </div>
  );
}

export default Requests;