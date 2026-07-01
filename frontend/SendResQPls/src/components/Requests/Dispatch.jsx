import { CircleCheckBig } from "lucide-react";

function Dispatch({ onClose }) {
  return (
    <div className="modal-overlay">

      <div className="dispatch-modal">

        <div className="dispatch-icon">

          <CircleCheckBig size={70} />

        </div>

        <h2>Request Dispatched Successfully!</h2>

        <p className="dispatch-message">
          The emergency request has been assigned and dispatched to the
          appropriate department.
        </p>

        <div className="dispatch-details">

          <div className="dispatch-row">

            <span>Request ID</span>

            <strong>REQ-2026-001</strong>

          </div>

          <div className="dispatch-row">

            <span>Department</span>

            <strong>Emergency Medical Services</strong>

          </div>

          <div className="dispatch-row">

            <span>Dispatcher</span>

            <strong>Admin User</strong>

          </div>

          <div className="dispatch-row">

            <span>Status</span>

            <strong className="success-status">
              Successfully Dispatched
            </strong>

          </div>

        </div>

        <button
          className="dispatch-close-btn"
          onClick={onClose}
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default Dispatch;