import {
  X,
  User,
  Phone,
  TriangleAlert,
  MapPin,
  Clock3,
  FileText,
} from "lucide-react";

function ReqDetails({ request, onClose, onAssign }) {

  return (

    <div className="modal-overlay">

      <div className="request-modal">

        <div className="modal-header">

          <h2>Request Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <X size={20}/>
          </button>

        </div>

        <div className="modal-body">

          <div className="detail-row">
            <User size={18}/>
            <div>
              <span className="detail-label">Reporter</span>
              <p>{request.name}</p>
            </div>
          </div>

          <div className="detail-row">
            <Phone size={18}/>
            <div>
              <span className="detail-label">Phone Number</span>
              <p>{request.phone}</p>
            </div>
          </div>

          <div className="detail-row">
            <TriangleAlert size={18}/>
            <div>
              <span className="detail-label">Emergency Type</span>
              <p>{request.type}</p>
            </div>
          </div>

          <div className="detail-row">
            <MapPin size={18}/>
            <div>
              <span className="detail-label">Location</span>
              <p>{request.location}</p>
            </div>
          </div>

          <div className="detail-row">
            <Clock3 size={18}/>
            <div>
              <span className="detail-label">Time Reported</span>
              <p>{request.time}</p>
            </div>
          </div>

          <div className="detail-row">
            <FileText size={18}/>
            <div>
              <span className="detail-label">Status</span>
              <p>{request.status}</p>
            </div>
          </div>

        </div>

        <div className="modal-footer">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Close
          </button>

          <button
            className="assign-btn"
            onClick={onAssign}
          >
            Assign Department
          </button>

        </div>

      </div>

    </div>

  );

}

export default ReqDetails;