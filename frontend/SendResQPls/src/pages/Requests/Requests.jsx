import "./Requests.css";

import ReqFilters from "../../components/Requests/ReqFilters";
import ReqTable from "../../components/Requests/ReqTable";

function Requests() {
  return (
    <div className="requests-page">
      <div className="requests-heading">
        <div className="requests-title-group">
          <h1>Requests</h1>
          <p>Manage emergency requests and dispatch departments.</p>
        </div>
      </div>

      <ReqFilters />
      <ReqTable />
    </div>
  );
}

export default Requests;