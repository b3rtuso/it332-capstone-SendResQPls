import { useMemo, useState } from "react";
import { Download } from "lucide-react";

import "./Reports.css";
import requests from "../../data/requests";

function Reports() {
  const [incidentType, setIncidentType] = useState("All Types");
  const [barangay, setBarangay] = useState("All Barangays");

  // Get unique incident types
  const incidentTypes = [
    "All Types",
    ...new Set(requests.map((r) => r.type)),
  ];

  // Get unique barangays
  const barangays = [
    "All Barangays",
    ...new Set(requests.map((r) => r.barangay)),
  ];

  // Filter data
  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchType =
        incidentType === "All Types" ||
        request.type === incidentType;

      const matchBarangay =
        barangay === "All Barangays" ||
        request.barangay === barangay;

      return matchType && matchBarangay;
    });
  }, [incidentType, barangay]);

  // Summary Cards
  const total = filteredRequests.length;

  const resolved = filteredRequests.filter(
    (r) => r.status === "Resolved"
  ).length;

  const pending = filteredRequests.filter(
    (r) => r.status === "Pending"
  ).length;

  const affected = filteredRequests.reduce(
    (sum, item) => sum + (item.affected || 0),
    0
  );

  return (
    <div className="reports-page">

      {/* ================= Generate Report ================= */}

      <section className="report-card">

        <h2>Generate Report</h2>

        <div className="report-toolbar">

          <div className="filters">

            <div className="filter-group">

              <label>Incident Type</label>

              <select
                value={incidentType}
                onChange={(e) =>
                  setIncidentType(e.target.value)
                }
              >
                {incidentTypes.map((type) => (
                  <option key={type}>
                    {type}
                  </option>
                ))}
              </select>

            </div>

            <div className="filter-group">

              <label>Barangay</label>

              <select
                value={barangay}
                onChange={(e) =>
                  setBarangay(e.target.value)
                }
              >
                {barangays.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>

            </div>

          </div>

          <div className="export-buttons">

            <button>
              <Download size={17} />
              PDF
            </button>

            <button>
              <Download size={17} />
              Excel
            </button>

            <button>
              <Download size={17} />
              CSV
            </button>

          </div>

        </div>

      </section>

      {/* ================= Summary ================= */}

      <section className="report-summary">

        <div className="summary-box">
          <h3>{total}</h3>
          <span>Total</span>
        </div>

        <div className="summary-box resolved">
          <h3>{resolved}</h3>
          <span>Resolved</span>
        </div>

        <div className="summary-box pending">
          <h3>{pending}</h3>
          <span>Pending</span>
        </div>

        <div className="summary-box affected">
          <h3>{affected}</h3>
          <span>Affected</span>
        </div>

      </section>

      {/* ================= Table ================= */}

      <section className="report-card">

        <h2>
          Filtered Data ({filteredRequests.length})
        </h2>

        <div className="table-wrapper">

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Type</th>

                <th>Title</th>

                <th>Barangay</th>

                <th>Status</th>

                <th>Affected</th>

              </tr>

            </thead>

            <tbody>

              {filteredRequests.map((request) => (

                <tr key={request.id}>

                  <td>{request.id}</td>

                  <td>{request.type}</td>

                  <td>{request.title}</td>

                  <td>{request.barangay}</td>

                  <td>

                    <span
                      className={`status ${request.status.toLowerCase()}`}
                    >
                      {request.status}
                    </span>

                  </td>

                  <td>{request.affected || 0}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
}

export default Reports;