import React from "react";
import "./CallLogs.css";

const callLogs = [
  {
    id: 1,
    date: "2024-06-01",
    caller: "John Doe",
    duration: "5 minutes",
    status: "Completed",
  },
  {
    id: 2,
    date: "2024-06-02",
    caller: "Jane Smith",
    duration: "8 minutes",
    status: "Completed",
  },
  {
    id: 3,
    date: "2024-06-03",
    caller: "Michael Cruz",
    duration: "3 minutes",
    status: "Missed",
  },
];

export default function CallLogs() {
  return (
    <div className="calllogs-page">
      <div className="calllogs-card">
        <table className="calllogs-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Caller</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {callLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.id}</td>
                <td>{log.date}</td>
                <td>{log.caller}</td>
                <td>{log.duration}</td>
                <td>
                  <span
                    className={
                      log.status === "Completed"
                        ? "status completed"
                        : "status missed"
                    }
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