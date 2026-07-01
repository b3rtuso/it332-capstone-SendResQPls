import { MapPin, Clock3, Eye } from "lucide-react";
import StatusBadge from "./StatusBadge";

function ReqTableRow({ request, onView }) {
  return (
    <tr>

      <td>
        <span className="request-id">
          {request.id}
        </span>
      </td>

      <td>

        <div className="reporter-info">

          <div className="reporter-name">
            {request.name}
          </div>

          <div className="reporter-phone">
            {request.phone}
          </div>

        </div>

      </td>

      <td>{request.type}</td>

      <td>

        <div className="info-cell">

          <MapPin size={16} />

          {request.location}

        </div>

      </td>

      <td>

        <div className="info-cell">

          <Clock3 size={16} />

          {request.time}

        </div>

      </td>

      <td>

        <StatusBadge status={request.status} />

      </td>

      <td>

        <button
          className="view-btn"
          onClick={onView}
        >

          <Eye size={16} />

          View

        </button>

      </td>

    </tr>
  );
}

export default ReqTableRow;