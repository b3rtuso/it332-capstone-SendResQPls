import { useEffect, useRef, useState } from "react";
import { Search, ChevronDown, Check } from "lucide-react";

const statusOptions = [
  "All Status",
  "Pending",
  "Called",
  "Dispatched",
  "En Route",
  "Arrived",
  "Completed",
  "Cancelled",
];

const typeOptions = [
  "All Types",
  "Medical",
  "Fire",
  "Crime",
  "Flood",
  "Accident",
];

function CustomSelect({ options, value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSelect(option) {
    onChange(option);
    setIsOpen(false);
  }

  return (
    <div className="custom-select" ref={selectRef}>
      <button
        type="button"
        className={`custom-select-trigger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen((previous) => !previous)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{value}</span>
        <ChevronDown className="select-chevron" size={16} />
      </button>

      {isOpen && (
        <div className="custom-select-menu" role="listbox" aria-label={label}>
          {options.map((option) => (
            <button
              type="button"
              key={option}
              className={`custom-select-option ${
                value === option ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={value === option}
            >
              <span>{option}</span>

              {value === option && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ReqFilters() {
  const [status, setStatus] = useState("All Status");
  const [type, setType] = useState("All Types");

  return (
    <div className="request-card request-filter-card">
      <div className="req-filters">
        <div className="search-box">
          <Search size={18} className="search-icon" />

          <input
            type="text"
            placeholder="Search by ID, name, or location..."
          />
        </div>

        <div className="filter-group">
          <CustomSelect
            options={statusOptions}
            value={status}
            onChange={setStatus}
            label="Filter by status"
          />

          <CustomSelect
            options={typeOptions}
            value={type}
            onChange={setType}
            label="Filter by emergency type"
          />
        </div>
      </div>
    </div>
  );
}

export default ReqFilters;