import React from "react";
import "./RecentRequests.css";

const requests = [
  {
    id: "#INC-1001",
    incident: "Structure Fire",
    location: "Brgy. Poblacion",
    reporter: "Juan Dela Cruz",
    priority: "High",
    status: "Responding",
    time: "2 mins ago",
  },
  {
    id: "#INC-1002",
    incident: "Road Accident",
    location: "National Highway",
    reporter: "Maria Santos",
    priority: "Medium",
    status: "On Scene",
    time: "8 mins ago",
  },
  {
    id: "#INC-1003",
    incident: "Medical Emergency",
    location: "Brgy. Canda",
    reporter: "Pedro Cruz",
    priority: "Critical",
    status: "Dispatched",
    time: "14 mins ago",
  },
  {
    id: "#INC-1004",
    incident: "Flood Rescue",
    location: "Brgy. Calan",
    reporter: "Ana Reyes",
    priority: "Low",
    status: "Completed",
    time: "22 mins ago",
  },
];

export default function RecentRequests() {
  return (
    <section className="requests-card">

      <div className="requests-header">

        <div>
          <h2>Recent Emergency Requests</h2>
          <p>Latest emergency incidents received</p>
        </div>

        <button>View All</button>

      </div>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Incident</th>
            <th>Location</th>
            <th>Reporter</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Time</th>
          </tr>

        </thead>

        <tbody>

          {requests.map((item) => (

            <tr key={item.id}>

              <td>{item.id}</td>

              <td>{item.incident}</td>

              <td>{item.location}</td>

              <td>{item.reporter}</td>

              <td>
                <span className={`priority ${item.priority.toLowerCase()}`}>
                  {item.priority}
                </span>
              </td>

              <td>
                <span className={`status ${item.status.replace(" ","").toLowerCase()}`}>
                  {item.status}
                </span>
              </td>

              <td>{item.time}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}