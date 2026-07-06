import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";
import "./RecentRequests.css";

const requests = [
  {
    id: "REQ-2026-001",
    name: "Maria Santos",
    type: "Pending AI Triage",
    location: "San Roque",
    time: "Jul 6, 04:02 PM",
    status: "Pending",
  },
  {
    id: "REQ-2026-002",
    name: "Juan dela Cruz",
    type: "Pending AI Triage",
    location: "Poblacion",
    time: "Jul 6, 03:47 PM",
    status: "Pending",
  },
  {
    id: "REQ-2026-003",
    name: "Barangay Health Worker",
    type: "Pending AI Triage",
    location: "Poblacion",
    time: "Jul 6, 03:32 PM",
    status: "Pending",
  },
  {
    id: "REQ-2026-004",
    name: "Traffic Officer",
    type: "Pending AI Triage",
    location: "Sukol",
    time: "Jul 6, 03:17 PM",
    status: "Pending",
  },
  {
    id: "REQ-2026-005",
    name: "Barangay Captain Reyes",
    type: "Pending AI Triage",
    location: "Calan",
    time: "Jul 6, 02:47 PM",
    status: "Pending",
  },
  {
    id: "REQ-2026-006",
    name: "Emergency Response Center",
    type: "Pending AI Triage",
    location: "Balayan",
    time: "Jul 6, 02:17 PM",
    status: "Pending",
  },
];

export default function RecentRequests() {
  const navigate = useNavigate();

  return (
    <section className="requests-card">
      <div className="requests-header">
        <div className="requests-title-group">
          <h2>Recent Requests</h2>
          <p>Latest emergency incidents received</p>
        </div>

        <button
          type="button"
          className="view-all-btn"
          onClick={() => navigate("/requests")}
        >
          View All
          <FiArrowRight />
        </button>
      </div>

      <div className="requests-table-wrapper">
        <table className="recent-requests-table">
          <thead>
            <tr>
              <th>Request ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Time Reported</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link
                    to={`/requests/${item.id}`}
                    className="request-id-link"
                  >
                    {item.id}
                  </Link>
                </td>

                <td className="request-name">{item.name}</td>

                <td>
                  <Link
                    to={`/requests/${item.id}`}
                    className="request-type-link"
                  >
                    <span className="request-type">
                      {item.type}
                    <span className="type-dot" />
                    </span>
                  </Link>
                </td>

                <td>
                  <span className="request-meta">
                    <FiMapPin />
                    {item.location}
                  </span>
                </td>

                <td>
                  <span className="request-meta">
                    <FiClock />
                    {item.time}
                  </span>
                </td>

                <td>
                  <span className="request-status pending">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}