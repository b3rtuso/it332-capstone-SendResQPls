import { X, Building2 } from "lucide-react";

function AssignDept({ onClose, onDispatch }) {
  return (
    <div className="modal-overlay">

      <div className="request-modal">

        {/* Header */}
        <div className="modal-header">

          <h2>Assign Department</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}
        <div className="modal-body">

          <div className="assign-group">

            <label>Select Department</label>

            <div className="select-wrapper">

              <Building2 size={18} />

              <select>

                <option>Police Department</option>

                <option>Fire Department</option>

                <option>Emergency Medical Services</option>

                <option>Disaster Risk Reduction Office</option>

              </select>

            </div>

          </div>

          <div className="assign-group">

            <label>Dispatcher Notes</label>

            <textarea
              rows="5"
              placeholder="Enter dispatch instructions..."
            ></textarea>

          </div>

        </div>

        {/* Footer */}
        <div className="modal-footer">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="assign-btn"
            onClick={onDispatch}
          >
            Dispatch Request
          </button>

        </div>

      </div>

    </div>
  );
}

export default AssignDept;