import { Phone } from "lucide-react";
import "./departments.css";

const departments = [
  {
    name: "MDRRMO",
    color: "mdrrmo",
    status: "active",
    officer: "Juan Dela Cruz",
    requests: 5,
    phone: "0912-345-6789",
  },
  {
    name: "BFP",
    color: "bfp",
    status: "active",
    officer: "Pedro Santos",
    requests: 3,
    phone: "0917-555-1234",
  },
  {
    name: "PNP",
    color: "pnp",
    status: "active",
    officer: "Maria Reyes",
    requests: 8,
    phone: "0918-222-4567",
  },
  {
    name: "MHO",
    color: "mho",
    status: "active",
    officer: "Ana Garcia",
    requests: 2,
    phone: "0920-111-2233",
  },
];

export default function Departments() {
  return (
    <div className="department-page">
      <div className="department-heading">
        <div className="department-title-group">
          <h1>Departments</h1>
            <p>
              Manage MDRRMO partner departments and emergency response contacts.
            </p>
        </div>
      </div>

      <div className="department-container">

        <div className="department-grid">

          {departments.map((department) => (
            <div
              key={department.name}
              className="department-card-item"
            >

              <div className="card-header">

                <h3
                  className={`department-title ${department.color}`}
                >
                  {department.name}
                </h3>

                <span
                  className={`status-badge ${department.status}`}
                >
                  {department.status}
                </span>

              </div>


              <div className="card-body">

                <div className="info-row">
                  <span className="info-label">
                    Officer in Charge:
                  </span>

                  <span className="info-value">
                    {department.officer}
                  </span>
                </div>


                <div className="info-row">
                  <span className="info-label">
                    Active Requests:
                  </span>

                  <span className="info-value info-badge">
                    {department.requests}
                  </span>
                </div>


                <div className="info-row">
                  <span className="info-label">
                    Contact:
                  </span>

                  <span className="info-value">
                    {department.phone}
                  </span>
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