import React from "react";
import "./CallLogs.css";

export default function CallLogs() {
  const callLogs = [
    {
      id: "CL-001",
      caller: "Juan Dela Cruz",
      phone: "0917-123-4567",
      emergency: "Fire",
      location: "Barangay 1, Balayan",
      time: "10:35 AM",
      duration: "3m 42s",
      status: "Completed",
    },
    {
      id: "CL-002",
      caller: "Maria Santos",
      phone: "0998-456-7890",
      emergency: "Medical",
      location: "Barangay 5, Balayan",
      time: "11:18 AM",
      duration: "6m 15s",
      status: "Responding",
    },
    {
      id: "CL-003",
      caller: "Pedro Reyes",
      phone: "0922-765-4432",
      emergency: "Road Accident",
      location: "National Highway",
      time: "12:42 PM",
      duration: "4m 05s",
      status: "Completed",
    },
  ];

  return (
    <div className="calllogs-page">

      <div className="calllogs-card">

        <div className="table-header">
          <h2>Emergency Call Logs</h2>
          <span>{callLogs.length} Records</span>
        </div>

        <table className="calllogs-table">
          <thead>
            <tr>
              <th>Log ID</th>
              <th>Caller</th>
              <th>Phone Number</th>
              <th>Emergency</th>
              <th>Location</th>
              <th>Time</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {callLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.caller}</td>
                <td>{log.phone}</td>
                <td>{log.emergency}</td>
                <td>{log.location}</td>
                <td>{log.time}</td>
                <td>{log.duration}</td>

                <td>
                  <span
                    className={`status ${log.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}