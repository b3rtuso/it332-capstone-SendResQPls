import { useNavigate } from "react-router-dom";
import { FiMapPin, FiClock, FiEye } from "react-icons/fi";

import requests from "../../data/requests";

function ReqTable({ searchQuery = "", status = "All Status", type = "All Types" }) {
  const navigate = useNavigate();

  // filter requests based on search, status and type
  const filtered = requests.filter((r) => {
    const q = searchQuery.trim().toLowerCase();

    if (status && status !== "All Status" && r.status !== status) return false;
    if (type && type !== "All Types" && r.type !== type) return false;

    if (!q) return true;

    // match id, name, phone, or location
    return (
      String(r.id).toLowerCase().includes(q) ||
      (r.name && r.name.toLowerCase().includes(q)) ||
      (r.phone && r.phone.toLowerCase().includes(q)) ||
      (r.location && r.location.toLowerCase().includes(q))
    );
  });

  return (
    <div className="request-card request-table-card">
      <div className="table-header">
        <h2>{filtered.length} Requests</h2>
      </div>

      <div className="table-container">
        <table className="requests-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Name</th>
              <th>Type of Emergency</th>
              <th>Location</th>
              <th>Time Reported</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((request) => (
              <tr key={request.id}>
                <td>
                  <button
                    type="button"
                    className="request-id-link"
                    onClick={() => navigate(`/requests/${request.id}`)}
                  >
                    {request.id}
                  </button>
                </td>

                <td>
                  <div className="request-name">{request.name}</div>
                  <div className="request-phone">{request.phone}</div>
                </td>

                <td>
                  <button
                    type="button"
                    className="request-type-link"
                    onClick={() => navigate(`/requests/${request.id}`)}
                  >
                    <span className="request-type">{request.type}</span>
                    <span className="type-dot" />
                  </button>
                </td>

                <td>
                  <span className="request-meta">
                    <FiMapPin />
                    {request.location}
                  </span>
                </td>

                <td>
                  <span className="request-meta">
                    <FiClock />
                    {request.time}
                  </span>
                </td>

                <td>
                  <span
                    className={`request-status ${request.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {request.status}
                  </span>
                </td>

                <td>
                  <button
                    type="button"
                    className="view-btn"
                    onClick={() => navigate(`/requests/${request.id}`)}
                  >
                    <FiEye />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReqTable;