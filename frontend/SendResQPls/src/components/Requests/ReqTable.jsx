import { useNavigate } from "react-router-dom";

import ReqTableRow from "./ReqTableRow";
import requests from "../../data/requests";

function ReqTable() {
  const navigate = useNavigate();

  return (
    <div className="request-card">
      <div className="table-header">
        <h2>{requests.length} Requests</h2>
      </div>

      <div className="table-container">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Reporter</th>
              <th>Emergency</th>
              <th>Location</th>
              <th>Time Reported</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((request) => (
              <ReqTableRow
                key={request.id}
                request={request}
                onView={() =>
                  navigate(`/requests/${request.id}`)
                }
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReqTable;