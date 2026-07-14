import { FaExclamationTriangle } from "react-icons/fa";
import "../../styles/jobs.css"; // Ensure styles cover error state

function ErrorState({ onRetry }) {
  return (
    <div className="error-state fade-in">
      <div className="error-state-icon">
        <FaExclamationTriangle />
      </div>
      <h2>Unable to Load Jobs</h2>
      <p>
        Something went wrong while loading available jobs.<br />
        Please check your connection or try again.
      </p>
      <button className="btn btn-primary" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

export default ErrorState;
