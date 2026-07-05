import "./Requests.css";

import ReqFilters from "../../components/Requests/ReqFilters";
import ReqTable from "../../components/Requests/ReqTable";
import Pagination from "../../components/Requests/Pagination";

function Requests() {
  return (
    <div className="requests-page">
        <p>
          Manage emergency requests and dispatch departments.
        </p>

      <ReqFilters />

      <ReqTable />

      <Pagination />
    </div>
  );
}

export default Requests;