import { useState } from "react";
import "../../styles/form.css";

function ProposalForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    coverLetter: "",
    budget: "",
    timeline: "",
    portfolio: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate single field on change
  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "coverLetter":
        if (!value.trim()) {
          error = "Cover Letter is required.";
        } else if (value.trim().length < 100) {
          error = "Please enter at least 100 characters.";
        }
        break;
      case "budget":
        if (!value) {
          error = "Budget is required.";
        } else if (Number(value) < 1) {
          error = "Budget must be greater than zero.";
        }
        break;
      case "timeline":
        if (!value) {
          error = "Timeline is required.";
        } else if (Number(value) < 1) {
          error = "Timeline must be at least 1 day.";
        }
        break;
      case "portfolio":
        if (value.trim()) {
          const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
          if (!urlPattern.test(value.trim())) {
            error = "Please enter a valid URL.";
          }
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // We immediately validate the field as the user types,
    // so they get instant feedback without waiting until they submit the entire form.
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const validateAll = () => {
    const newErrors = {
      coverLetter: validateField("coverLetter", formData.coverLetter),
      budget: validateField("budget", formData.budget),
      timeline: validateField("timeline", formData.timeline),
      portfolio: validateField("portfolio", formData.portfolio),
    };

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some((err) => err);
  };

  const handleSubmit = (e) => {
    // Prevent the default browser form submission which would cause a full page reload.
    // We want to handle the submission locally through React state.
    e.preventDefault();

    if (validateAll()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        onSuccess();
      }, 1200);
    }
  };

  return (
    <form className="proposal-form" onSubmit={handleSubmit} noValidate>
      <h3>Submit a Proposal</h3>
      
      <div className="form-group">
        <label htmlFor="coverLetter">Cover Letter *</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Why are you a great fit for this job?"
          rows="5"
          className={errors.coverLetter ? "error-input" : ""}
          aria-invalid={!!errors.coverLetter}
          aria-describedby={errors.coverLetter ? "coverLetter-error" : undefined}
        ></textarea>
        <div className="char-count-wrapper">
          {errors.coverLetter ? (
            <span id="coverLetter-error" className="error-text fade-in-error">
              {errors.coverLetter}
            </span>
          ) : (
            <span></span>
          )}
          <span className="char-count">
            {formData.coverLetter.length} / 100 min
          </span>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="budget">Your Proposed Budget (KES) *</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            min="1"
            placeholder="e.g. 50000"
            className={errors.budget ? "error-input" : ""}
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          />
          {errors.budget && (
            <span id="budget-error" className="error-text fade-in-error">
              {errors.budget}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="timeline">Estimated Completion (Days) *</label>
          <input
            type="number"
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            min="1"
            placeholder="e.g. 14"
            className={errors.timeline ? "error-input" : ""}
            aria-invalid={!!errors.timeline}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
          />
          {errors.timeline && (
            <span id="timeline-error" className="error-text fade-in-error">
              {errors.timeline}
            </span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="portfolio">Portfolio URL</label>
        <input
          type="url"
          id="portfolio"
          name="portfolio"
          value={formData.portfolio}
          onChange={handleChange}
          placeholder="https://yourportfolio.com"
          className={errors.portfolio ? "error-input" : ""}
          aria-invalid={!!errors.portfolio}
          aria-describedby={errors.portfolio ? "portfolio-error" : undefined}
        />
        {errors.portfolio && (
          <span id="portfolio-error" className="error-text fade-in-error">
            {errors.portfolio}
          </span>
        )}
      </div>

      <button 
        type="submit" 
        className="btn btn-primary submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Proposal"}
      </button>
    </form>
  );
}

export default ProposalForm;
