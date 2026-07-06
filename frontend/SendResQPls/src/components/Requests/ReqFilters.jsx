import { Search } from "lucide-react";

function ReqFilters() {
  return (
    <div className="request-card">

      <div className="req-filters">

        {/* Search */}
        <div className="search-box">

          <Search size={18} className="search-icon" />

          <input
            type="text"
            placeholder="Search by ID, name, or location..."
          />

        </div>

        {/* Filters */}
        <div className="filter-group">

          <select>

            <option>All Status</option>
            <option>Pending</option>
            <option>Assigned</option>
            <option>En Route</option>
            <option>Completed</option>
            <option>Cancelled</option>

          </select>

          <select>

            <option>All Types</option>
            <option>Medical</option>
            <option>Fire</option>
            <option>Crime</option>
            <option>Flood</option>
            <option>Accident</option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default ReqFilters;