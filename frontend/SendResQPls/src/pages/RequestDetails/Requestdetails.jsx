import { useParams, useNavigate } from "react-router-dom";
import "./RequestDetails.css";

import requests from "../../data/requests";

function RequestDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const request = requests.find((req) => req.id === id);

  if (!request) {
    return (
      <div className="request-details-page">
        <button
          className="back-btn"
          onClick={() => navigate("/requests")}
        >
          ← Back to Requests
        </button>

        <h2>Request not found.</h2>
      </div>
    );
  }

  return (
    <div className="request-details-page">

      <button
        className="back-btn"
        onClick={() => navigate("/requests")}
      >
        ← Back to Requests
      </button>

      <div className="details-card">

        <div className="details-header">
          <h2>{request.id}</h2>

          <span
            className={`status ${request.status
              .toLowerCase()
              .replace(/\s/g, "")}`}
          >
            {request.status}
          </span>
        </div>

        <div className="details-grid">

          <div>
            <label>Reporter</label>
            <p>{request.name}</p>
          </div>

          <div>
            <label>Phone Number</label>
            <p>{request.phone}</p>
          </div>

          <div>
            <label>Emergency Type</label>
            <p>{request.type}</p>
          </div>

          <div>
            <label>Time Reported</label>
            <p>{request.time}</p>
          </div>

          <div className="full-width">
            <label>Location</label>
            <p>{request.location}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RequestDetails;