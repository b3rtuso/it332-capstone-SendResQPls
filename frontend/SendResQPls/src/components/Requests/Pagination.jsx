import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination() {
  return (
    <div className="pagination">

      <div className="pagination-info">
        Showing <strong>1</strong> to <strong>7</strong> of{" "}
        <strong>25</strong> requests
      </div>

      <div className="pagination-controls">

        <button className="page-btn">

          <ChevronLeft size={16} />

          Previous

        </button>

        <button className="page-number active">
          1
        </button>

        <button className="page-number">
          2
        </button>

        <button className="page-number">
          3
        </button>

        <button className="page-btn">

          Next

          <ChevronRight size={16} />

        </button>

      </div>

    </div>
  );
}

export default Pagination;