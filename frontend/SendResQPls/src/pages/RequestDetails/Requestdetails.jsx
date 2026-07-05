import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  User,
  Phone,
  MapPin,
  Clock3,
  Users,
  Image,
} from "lucide-react";

import "./RequestDetails.css";
import requests from "../../data/requests";

function RequestDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const request = requests.find((req) => req.id === id);

  if (!request) {
    return (
      <div className="request-details-page">
        <h2>Request not found.</h2>

        <button
          className="back-btn"
          onClick={() => navigate("/requests")}
        >
          Back to Requests
        </button>
      </div>
    );
  }

  return (
    <div className="request-details-page">

      {/* ================= HEADER ================= */}

      <div className="details-header">

        <button
          className="back-btn"
          onClick={() => navigate("/requests")}
        >
          <ArrowLeft size={18} />
        </button>

        <div className="details-title">

          <div className="details-tags">

            <span className="request-code">
              {request.id}
            </span>

            <span className="status-tag pending">
              {request.status}
            </span>

            <span className="ai-tag">
              Pending AI Triage
            </span>

          </div>

          <h1>Unidentified Emergency</h1>

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="details-layout">

        {/* ==========================================
            LEFT COLUMN
        ========================================== */}

        <div className="details-left">

          {/* ================= AI CARD ================= */}

          <section className="details-card ai-card">

            <div className="card-title">

              <Sparkles size={24} />

              <h2>AI Triage Assistant</h2>

            </div>

            <p className="card-description">

              Use the AI to automatically analyze the uploaded
              evidence, classify the emergency, determine the
              severity, and recommend the responding department.

            </p>

            <div className="ai-placeholder">

              <div className="ai-icon">
                🤖
              </div>

              <h3>Ready to Analyze</h3>

              <p>

                The AI model is ready to process the uploaded
                images and description of this unidentified
                report.

              </p>

              <button className="run-ai-btn">
                Run AI Assessment
              </button>

            </div>

          </section>

          {/* ================= REQUEST INFORMATION ================= */}

          <section className="details-card request-card">

            <h2>
              Request Information
            </h2>

            <div className="description-box">

              <span>
                DESCRIPTION FROM REPORTER
              </span>

              <p>

                Reported with media and location via quick
                alert. Awaiting MDRRMO staff review and
                classification.

              </p>

            </div>

            <div className="request-grid">

              <div className="request-item">

                <small>
                  Reported By
                </small>

                <div>

                  <User size={16} />

                  <strong>
                    {request.name}
                  </strong>

                </div>

              </div>

              <div className="request-item">

                <small>
                  Contact
                </small>

                <div>

                  <Phone size={16} />

                  <strong>
                    {request.phone}
                  </strong>

                </div>

              </div>

              <div className="request-item">

                <small>
                  Location
                </small>

                <div>

                  <MapPin size={16} />

                  <strong>
                    {request.location}
                  </strong>

                </div>

              </div>

              <div className="request-item">

                <small>
                  Affected
                </small>

                <div>

                  <Users size={16} />

                  <strong>
                    0 persons
                  </strong>

                </div>

              </div>

            </div>

            <div className="request-time">

              <Clock3 size={16} />

              <span>

                Reported {request.time} • {request.location}

              </span>

            </div>

            <div className="media-section">

              <h3>

                Attached Media Evidence

              </h3>

              <div className="media-placeholder">

                <div className="media-card">

                  <Image size={28} />

                  <span>

                    Evidence

                  </span>

                </div>

              </div>

            </div>

          </section>
        </div>

        {/* ==========================================
            RIGHT COLUMN
        ========================================== */}

        <aside className="details-right">

          {/* ================= TIMELINE ================= */}

          <section className="details-card sidebar-card">

            <h2>Timeline</h2>

            <div className="timeline">

              <div className="timeline-item">

                <div className="timeline-dot active"></div>

                <div>

                  <strong>
                    Report received via mobile app
                  </strong>

                  <p>
                    {request.time}
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div>

                  <strong>
                    Waiting for AI Assessment
                  </strong>

                  <p>
                    System Queue
                  </p>

                </div>

              </div>

              <div className="timeline-item">

                <div className="timeline-dot"></div>

                <div>

                  <strong>
                    Ready for Dispatch
                  </strong>

                  <p>
                    Pending
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* ================= STATUS ================= */}

          <section className="details-card sidebar-card">

            <h2>
              Update Status
            </h2>

            <div className="status-buttons">

              <button className="status pending-btn active">
                Pending
              </button>

              <button className="status called-btn">
                Called
              </button>

              <button className="status dispatch-btn">
                Dispatched
              </button>

              <button className="status enroute-btn">
                En Route
              </button>

              <button className="status arrived-btn">
                Arrived
              </button>

              <button className="status resolved-btn">
                Resolved
              </button>

            </div>

            <p className="current-status">

              Current:
              <strong> {request.status}</strong>

            </p>

          </section>

          {/* ================= IMPACT ================= */}

          <section className="details-card sidebar-card">

            <h2>
              Impact
            </h2>

            <div className="impact-grid">

              <div className="impact-box">

                <h3>0</h3>

                <span>
                  Affected
                </span>

              </div>

              <div className="impact-box">

                <h3>0</h3>

                <span>
                  Injuries
                </span>

              </div>

              <div className="impact-box">

                <h3>0</h3>

                <span>
                  Casualties
                </span>

              </div>

            </div>

          </section>

        </aside>

      </div>

    </div>
  );
}

export default RequestDetails;