import React from "react";

export default function IncidentReport() {
  return (
    <section className="incident-report-section">
      <div className="analytics-card incident-report-card">
        <div className="incident-report-toolbar">
          <h2>Automated Incident Report</h2>

          <div className="incident-report-controls">
            <select aria-label="Period">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>

            <button className="ai-btn">Auto-Generate with AI</button>
          </div>
        </div>

        <div className="incident-report-body">
          <label className="form-label">AI Generated Summary *</label>
          <textarea
            className="textarea-large"
            placeholder="Provide a detailed summary of the incident..."
          />

          <div className="grid-two" style={{ marginTop: 16 }}>
            <div>
              <label className="form-label">Actions Taken</label>
              <textarea
                className="textarea-medium"
                placeholder="Describe the actions taken during the response..."
              />
            </div>

            <div>
              <label className="form-label">Outcome</label>
              <textarea
                className="textarea-medium"
                placeholder="Describe the outcome and resolution..."
              />
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <label className="form-label">Damages / Losses</label>
            <textarea
              className="textarea-large"
              placeholder="List any damages, losses, or property damage..."
            />
          </div>

          <div className="incident-report-actions" style={{ marginTop: 18 }}>
            <button className="btn-outline">Save Draft</button>
            <button className="btn-primary">Submit Report</button>
          </div>
        </div>

        <div className="upload-section" style={{ marginTop: 18 }}>
          <h3>Upload Images/Files</h3>

          <div className="upload-box">
            <div className="upload-instructions">
              <div style={{ fontSize: 36, color: "#9CA3AF" }}>⬆️</div>
              <p style={{ margin: "8px 0 6px", color: "#6B7280" }}>
                Drop files here or click to upload
              </p>
              <small style={{ color: "#9CA3AF" }}>PNG, JPG, PDF up to 10MB</small>
            </div>
          </div>

          <div className="incident-report-actions" style={{ marginTop: 12 }}>
            <button className="btn-primary save-final-btn">Save Final Report</button>
            <button className="btn-outline download-btn">Download Report text file</button>
          </div>
        </div>
      </div>

      <div className="recent-reports-card">
        <h3>Recent Incident Reports</h3>

        <div className="report-list">
          <div className="report-item">
            <div className="report-meta">
              <div className="report-icon">📄</div>
              <div>
                <div className="report-title">Monthly Incident Summary - March 2026</div>
                <div className="report-sub">Summary Report · 3/5/2026</div>
              </div>
            </div>
            <button className="report-download">Download</button>
          </div>

          <div className="report-item">
            <div className="report-meta">
              <div className="report-icon">📄</div>
              <div>
                <div className="report-title">Flood Incidents Analysis - Q1 2026</div>
                <div className="report-sub">Statistical Analysis · 3/1/2026</div>
              </div>
            </div>
            <button className="report-download">Download</button>
          </div>

          <div className="report-item">
            <div className="report-meta">
              <div className="report-icon">📄</div>
              <div>
                <div className="report-title">Response Time Report - February 2026</div>
                <div className="report-sub">Response Time Analysis · 2/28/2026</div>
              </div>
            </div>
            <button className="report-download">Download</button>
          </div>
        </div>
      </div>
    </section>
  );
}
