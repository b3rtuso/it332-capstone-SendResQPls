import "./Requests.css";

import ReqFilters from "../../components/Requests/ReqFilters";
import ReqTable from "../../components/Requests/ReqTable";

function Requests() {
  return (
    <div className="requests-page">
      <div className="requests-page-heading">
        <p>Manage emergency requests and dispatch departments.</p>
      </div>

      <ReqFilters />
      <ReqTable />
    </div>
  );
}

export default Requests;