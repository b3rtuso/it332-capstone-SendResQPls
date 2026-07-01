function StatusBadge({ status }) {
  const getStatusClass = () => {
    switch (status) {
      case "Pending":
        return "status pending";

      case "Assigned":
        return "status assigned";

      case "En Route":
        return "status enroute";

      case "Completed":
        return "status completed";

      case "Cancelled":
        return "status cancelled";

      default:
        return "status";
    }
  };

  return (
    <span className={getStatusClass()}>
      <span className="status-dot"></span>
      {status}
    </span>
  );
}

export default StatusBadge;