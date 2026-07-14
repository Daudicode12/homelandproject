import { FaSearch } from "react-icons/fa";

function EmptyState({ onClear }) {
  return (
    <div className="empty-state fade-in">
      <div className="empty-state-icon">
        <FaSearch />
      </div>
      <h2>No Jobs Found</h2>
      <p>
        We couldn't find any jobs matching your search.<br />
        Try changing your search term or filters.
      </p>
      <button className="btn btn-primary" onClick={onClear}>
        Clear Filters
      </button>
    </div>
  );
}

export default EmptyState;
