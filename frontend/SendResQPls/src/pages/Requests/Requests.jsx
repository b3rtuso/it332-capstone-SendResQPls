import "./Requests.css";

import ReqFilters from "../../components/Requests/ReqFilters";
import ReqTable from "../../components/Requests/ReqTable";
import Pagination from "../../components/Requests/Pagination";

function Requests() {
  return (
    <div className="requests-page">
      <div className="requests-header">
        <p>
          Manage emergency requests and dispatch departments.
        </p>
      </div>

      <ReqFilters />

      <ReqTable />

      <Pagination />
    </div>
  );
}

export default Requests;