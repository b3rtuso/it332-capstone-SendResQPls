import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  User,
  Phone,
  MapPin,
  Clock3,
  Users,
  Image as ImageIcon,
  Bot,
  CircleDot,
  CheckCircle2,
  LogOut,
  ChevronDown,
  PhoneCall,
} from "lucide-react";

import "./RequestDetails.css";
import requests from "../../data/requests";

function RequestDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const request = requests.find((req) => req.id === id);

  const [status, setStatus] = useState(request?.status || "Pending");
  const [department, setDepartment] = useState("");
  const [callResult, setCallResult] = useState("");
  const [callNotes, setCallNotes] = useState("");
  const [callSaved, setCallSaved] = useState(false);

  const statuses = [
    "Pending",
    "Called",
    "Dispatched",
    "En Route",
    "Arrived",
    "Resolved",
  ];

  const getStatusClass = (value) =>
    value.toLowerCase().replace(/\s+/g, "-");

  const formatCurrentDateTime = () => {
    return new Date().toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const [callTime] = useState(formatCurrentDateTime());

  const handleSaveCallLog = () => {
    if (!department || !callResult) {
      alert("Please select a department and call result first.");
      return;
    }

    setCallSaved(true);

    setTimeout(() => {
      setCallSaved(false);
      setCallNotes("");
      setCallResult("");
    }, 2500);
  };

  if (!request) {
    return (
      <div className="request-details-page">
        <div className="not-found-card">
          <h2>Request not found.</h2>

          <button
            className="back-btn not-found-back"
            onClick={() => navigate("/requests")}
          >
            <ArrowLeft size={18} />
            Back to Requests
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="request-details-page">
      <header className="details-header">
        <button
          className="back-btn"
          onClick={() => navigate("/requests")}
          aria-label="Back to requests"
        >
          <ArrowLeft size={18} />
        </button>

        <div className="details-title">
          <div className="details-tags">
            <span className="request-code">{request.id}</span>

            <span className={`status-tag ${getStatusClass(status)}`}>
              {status}
            </span>

            <span className="ai-tag">Pending AI Triage</span>
          </div>

          <h1>Unidentified Emergency</h1>
        </div>
      </header>

      <div className="details-layout">
        <main className="details-left">
          <section className="details-card ai-card">
            <div className="ai-card-heading">
              <div className="card-title">
                <Sparkles size={25} />
                <h2>AI Triage Assistant</h2>
              </div>

              <p className="card-description">
                Use the AI to automatically analyze the evidence, classify the
                emergency, and determine severity and recommended departments.
              </p>
            </div>

            <div className="ai-placeholder">
              <div className="ai-icon">
                <Bot size={31} />
              </div>

              <h3>Ready to Analyze</h3>

              <p>
                The AI model is ready to process the images and description of
                this unidentified report.
              </p>

              <button className="run-ai-btn">
                <Sparkles size={16} />
                Run AI Assessment
              </button>
            </div>
          </section>

          <section className="details-card request-card">
            <h2>Request Information</h2>

            <div className="description-box">
              <span>DESCRIPTION FROM REPORTER</span>

              <p>
                Reported with media and location via quick alert. Awaiting
                MDRRMO staff review and classification.
              </p>
            </div>

            <div className="request-grid">
              <div className="request-item">
                <small>Reported By</small>

                <div>
                  <User size={16} />
                  <strong>{request.name || "Anonymous Reporter"}</strong>
                </div>
              </div>

              <div className="request-item">
                <small>Contact</small>

                <div>
                  <Phone size={16} />
                  <strong>{request.phone || "Not provided"}</strong>
                </div>
              </div>

              <div className="request-item">
                <small>Location</small>

                <div>
                  <MapPin size={16} />
                  <strong>{request.location}</strong>
                </div>
              </div>

              <div className="request-item">
                <small>Affected</small>

                <div>
                  <Users size={16} />
                  <strong>0 persons</strong>
                </div>
              </div>
            </div>

            <div className="request-time">
              <Clock3 size={16} />
              <span>
                Reported {request.time} · {request.location}
              </span>
            </div>

            <div className="media-section">
              <h3>Attached Media Evidence</h3>

              <div className="media-placeholder">
                <div className="media-card">
                  <ImageIcon size={27} />
                  <span>Evidence</span>
                </div>
              </div>
            </div>
          </section>

          <section className="details-card call-department-card">
            <div className="call-section-title">
              <PhoneCall size={18} />
              <h2>Call Department</h2>
            </div>

            <label className="form-label" htmlFor="department">
              Select Department
            </label>

            <div className="select-wrap">
              <select
                id="department"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              >
                <option value="">Choose a department...</option>
                <option value="MDRRMO">MDRRMO</option>
                <option value="Bureau of Fire Protection">
                  Bureau of Fire Protection
                </option>
                <option value="Philippine National Police">
                  Philippine National Police
                </option>
                <option value="Rural Health Unit">Rural Health Unit</option>
              </select>
              <ChevronDown size={17} />
            </div>
          </section>

          <section className="details-card call-log-card">
            <h2>Log Call Result</h2>

            <div className="call-log-grid">
              <div>
                <label className="form-label">Time of Call</label>

                <div className="readonly-input">{callTime}</div>
              </div>

              <div>
                <label className="form-label" htmlFor="call-result">
                  Call Result
                </label>

                <div className="select-wrap">
                  <select
                    id="call-result"
                    value={callResult}
                    onChange={(event) => setCallResult(event.target.value)}
                  >
                    <option value="">Select result...</option>
                    <option value="Answered">Answered</option>
                    <option value="No Answer">No Answer</option>
                    <option value="Busy">Busy</option>
                    <option value="Responding">Responding</option>
                    <option value="Unable to Respond">
                      Unable to Respond
                    </option>
                  </select>
                  <ChevronDown size={17} />
                </div>
              </div>
            </div>

            <label className="form-label" htmlFor="call-notes">
              Notes
            </label>

            <textarea
              id="call-notes"
              value={callNotes}
              onChange={(event) => setCallNotes(event.target.value)}
              placeholder="Enter call notes..."
            />

            <button className="save-call-btn" onClick={handleSaveCallLog}>
              {callSaved ? (
                <>
                  <CheckCircle2 size={16} />
                  Call Log Saved
                </>
              ) : (
                "Save Call Log"
              )}
            </button>
          </section>
        </main>

        <aside className="details-right">
          <section className="details-card sidebar-card timeline-card">
            <h2>Timeline</h2>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker active">
                  <CircleDot size={15} />
                </div>

                <div>
                  <strong>Report received via mobile app (Quick Alert).</strong>
                  <p>{request.time} · System</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <CheckCircle2 size={14} />
                </div>

                <div>
                  <strong>Status updated to pending</strong>
                  <p>{request.time} · Admin User</p>
                </div>
              </div>
            </div>
          </section>

          <section className="details-card sidebar-card status-card">
            <h2>Update Status</h2>

            <div className="status-buttons">
              {statuses.map((item) => (
                <button
                  key={item}
                  className={`status ${getStatusClass(item)} ${
                    status === item ? "active" : ""
                  }`}
                  onClick={() => setStatus(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <p className="current-status">
              Current: <strong>{status}</strong>
            </p>
          </section>

          <section className="details-card sidebar-card impact-card">
            <h2>Impact</h2>

            <div className="impact-grid">
              <div className="impact-box affected">
                <h3>0</h3>
                <span>Affected</span>
              </div>

              <div className="impact-box injuries">
                <h3>0</h3>
                <span>Injuries</span>
              </div>

              <div className="impact-box casualties">
                <h3>0</h3>
                <span>Casualties</span>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default RequestDetails;