import { Phone } from "lucide-react";
import "./department.css";

const departments = [];

export default function DepartmentLayout() {

  return (
    <div className="department-layout">
      <div className="department-container">
        <div className="department-grid">
          {departments.map((department) => (
            <div key={department.name} className="department-card-item">
              <div className="card-header">
                <h3 className={`department-title ${department.color}`}>
                  {department.name}
                </h3>
                <span className={`status-badge ${department.status}`}>
                  {department.status}
                </span>
              </div>

              <div className="card-body">
                <div className="info-row">
                  <span className="info-label">Officer in Charge:</span>
                  <span className="info-value">{department.officer}</span>
                </div>

                <div className="info-row">
                  <span className="info-label">Active Requests:</span>
                  <span className="info-value info-badge">
                    {department.requests}
                  </span>
                </div>

                <div className="info-row">
                  <span className="info-label">Contact:</span>
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
