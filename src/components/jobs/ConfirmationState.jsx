import { FaCheckCircle } from "react-icons/fa";
import "../../styles/form.css";

function ConfirmationState({ onClose }) {
  return (
    <div className="confirmation-state fade-in">
      <FaCheckCircle className="success-icon" />
      <h2>Proposal Submitted Successfully!</h2>
      <p>
        Your proposal has been submitted successfully. <br />
        The employer will review it and contact you if shortlisted.
      </p>
      
      <div className="confirmation-actions">
        <button className="btn btn-primary" onClick={onClose}>
          Submit Another Proposal
        </button>
        <button className="btn btn-outline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ConfirmationState;
