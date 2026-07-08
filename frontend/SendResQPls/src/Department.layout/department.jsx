import { Phone } from "lucide-react";
import "./department.css";

const departments = [
  {
    name: "BFP",
    color: "bfp",
    status: "active",
    officer: "Chief Mario Santos",
    requests: 12,
    phone: "0917-123-4567",
  },
  {
    name: "PNP",
    color: "pnp",
    status: "active",
    officer: "Police Col. Rey Ramos",
    requests: 9,
    phone: "0917-234-5678",
  },
  {
    name: "MHO",
    color: "mho",
    status: "active",
    officer: "Dr. Anna dela Cruz",
    requests: 7,
    phone: "0917-345-6789",
  },
  {
    name: "MDRRMO",
    color: "mdrrmo",
    status: "active",
    officer: "Engr. Joseph Lim",
    requests: 5,
    phone: "0917-456-7890",
  },
  {
    name: "MEO",
    color: "meo",
    status: "active",
    officer: "Ms. Carla Bautista",
    requests: 4,
    phone: "0917-567-8901",
  },
  {
    name: "CHO",
    color: "cho",
    status: "active",
    officer: "Dr. Miguel Torralba",
    requests: 10,
    phone: "0917-678-9012",
  },
  {
    name: "CCTO",
    color: "ccto",
    status: "active",
    officer: "Mr. Ronald Francisco",
    requests: 6,
    phone: "0917-789-0123",
  },
  {
    name: "CED",
    color: "ced",
    status: "active",
    officer: "Maam Joy Tabay",
    requests: 3,
    phone: "0917-890-1234",
  },
];

export default function DepartmentLayout() {
  return (
    <div className="department-layout">
      <div className="department-header">
        <h1>Departments</h1>
        <p>
          View the current department teams, on-duty officers, and active request
          load.
        </p>
      </div>

      <div className="department-container">
        <div className="department-grid">
          {departments.map((department) => (
            <div key={department.name} className="department-card-item">
              <div className="card-header">
                <div>
                  <h3 className={`department-title ${department.color}`}>
                    {department.name}
                  </h3>
                  <span className="department-subtitle">
                    {department.officer}
                  </span>
                </div>
                <span className={`status-badge ${department.status}`}>
                  {department.status}
                </span>
              </div>

              <div className="card-body">
                <div className="info-row">
                  <span className="info-label">Officer in Charge</span>
                  <span className="info-value">{department.officer}</span>
                </div>

                <div className="info-row">
                  <span className="info-label">Active Requests</span>
                  <span className="info-value info-badge">
                    {department.requests}
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">Contact Number</span>
                  <span className="info-value">{department.phone}</span>
                </div>
              </div>

              <div className="card-footer">
                <button className="contact-btn">
                  <Phone size={16} />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
