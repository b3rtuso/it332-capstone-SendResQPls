import React from "react";
import {
  Sparkles,
  UploadCloud,
  FileText,
  Download,
} from "lucide-react";

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

            <button className="ai-btn">
              <Sparkles size={18} />
              Auto-Generate with AI
            </button>
          </div>
        </div>

        <div className="incident-report-body">
          <label className="form-label">
            AI Generated Summary <span>*</span>
          </label>

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

          <div
            className="incident-report-actions"
            style={{ marginTop: 18 }}
          >
            <button className="btn-outline">
              Save Draft
            </button>

            <button className="btn-primary">
              Submit Report
            </button>
          </div>
        </div>

        {/* Upload */}

        <div className="upload-section" style={{ marginTop: 20 }}>
          <h3>Upload Images / Files</h3>

          <div className="upload-box">
            <div className="upload-instructions">
              <UploadCloud
                size={52}
                strokeWidth={1.8}
                className="upload-icon"
              />

              <p className="upload-title">
                Drop files here or click to upload
              </p>

              <small className="upload-subtitle">
                PNG, JPG, PDF up to 10MB
              </small>
            </div>
          </div>

          <div
            className="incident-report-actions"
            style={{ marginTop: 14 }}
          >
            <button className="btn-primary save-final-btn">
              Save Final Report
            </button>

            <button className="btn-outline download-btn">
              <Download size={16} />
              Download Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}

      <div className="recent-reports-card">
        <h3>Recent Incident Reports</h3>

        <div className="report-list">

          <div className="report-item">
            <div className="report-meta">

              <div className="report-icon">
                <FileText size={22} />
              </div>

              <div>
                <div className="report-title">
                  Monthly Incident Summary - March 2026
                </div>

                <div className="report-sub">
                  Summary Report • 03/05/2026
                </div>
              </div>
            </div>

            <button className="report-download">
              <Download size={16} />
            </button>
          </div>

          <div className="report-item">
            <div className="report-meta">

              <div className="report-icon">
                <FileText size={22} />
              </div>

              <div>
                <div className="report-title">
                  Flood Incidents Analysis - Q1 2026
                </div>

                <div className="report-sub">
                  Statistical Analysis • 03/01/2026
                </div>
              </div>
            </div>

            <button className="report-download">
              <Download size={16} />
            </button>
          </div>

          <div className="report-item">
            <div className="report-meta">

              <div className="report-icon">
                <FileText size={22} />
              </div>

              <div>
                <div className="report-title">
                  Response Time Report - February 2026
                </div>

                <div className="report-sub">
                  Response Time Analysis • 02/28/2026
                </div>
              </div>
            </div>

            <button className="report-download">
              <Download size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}