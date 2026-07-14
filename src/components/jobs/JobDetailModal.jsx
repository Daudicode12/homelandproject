import { useEffect, useState, useRef } from "react";
import { FaTimes, FaStar, FaMapMarkerAlt, FaDollarSign, FaRegClock, FaUsers } from "react-icons/fa";
import ProposalForm from "./ProposalForm";
import ConfirmationState from "./ConfirmationState";
import "../../styles/modal.css";

function JobDetailModal({ job, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const previousFocusRef = useRef(null);

  // Focus management and Escape key handling
  useEffect(() => {
    // We store the previously active element before the modal opens, 
    // so we can restore focus to it when the modal closes, ensuring keyboard accessibility.
    previousFocusRef.current = document.activeElement;
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Restore focus on unmount
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [onClose]);

  // Handle click outside modal content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <div 
      className="modal-overlay fade-in" 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content scale-in">
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
          autoFocus
        >
          <FaTimes />
        </button>

        <article className="modal-body">
          {/* Left Section: Job Details */}
          <section className="modal-job-details">
            <header>
              <h2 id="modal-title" className="modal-job-title">{job.title}</h2>
            </header>
            
            <div className="modal-employer-info">
              <span className="employer-name">{job.employer}</span>
              <span className="employer-rating" aria-label={`Rating: ${job.employerRating} out of 5`}>
                <FaStar className="star-icon" /> {job.employerRating}
              </span>
            </div>

            <div className="modal-badges">
              <span className="badge"><FaMapMarkerAlt /> {job.location}</span>
              <span className="badge"><FaDollarSign /> KES {job.budget.toLocaleString()}</span>
              <span className="badge"><FaRegClock /> {job.deadline}</span>
              <span className="badge"><FaUsers /> {job.proposals} Proposals</span>
            </div>

            <section className="modal-section">
              <h3>Category</h3>
              <p>{job.category}</p>
            </section>

            <section className="modal-section">
              <h3>Required Skills</h3>
              <div className="modal-skills">
                {job.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </section>

            <section className="modal-section">
              <h3>Job Description</h3>
              <p className="job-description">{job.description}</p>
            </section>
            
            <footer className="modal-section">
              <small className="posted-date">
                Posted <time dateTime={job.postedAt}>{job.posted}</time>
              </small>
            </footer>
          </section>

          {/* Right Section: Form or Confirmation */}
          <section className="modal-form-section">
            {isSubmitted ? (
              <ConfirmationState onClose={onClose} />
            ) : (
              <ProposalForm onSuccess={handleSuccess} />
            )}
          </section>
        </article>
      </div>
    </div>
  );
}

export default JobDetailModal;
