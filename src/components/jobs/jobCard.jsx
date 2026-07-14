import "../../styles/jobCards.css";
import { FaMapMarkerAlt, FaDollarSign, FaRegClock, FaUsers } from "react-icons/fa";

function JobCard({ job, onClick }) {
  return (
    // fade-in animation applied when cards appear
    // The onClick handler is attached to the entire article element so that 
    // the user enjoys a larger, more accessible tap target without needing to aim for a small button.
    <article className="job-card fade-in pointer-cursor" onClick={onClick}>
      {/* Content wrapper to allow pushing footer to bottom for equal heights */}
      <div className="job-card-content">
        <header className="job-header">
          {/* Larger job title and slightly smaller, muted employer */}
          <h2 className="job-title">{job.title}</h2>
          <p className="job-employer">{job.employer}</p>
        </header>

        {/* Display location and budget with icons */}
        <address className="job-metadata">
          <span className="metadata-item">
            <FaMapMarkerAlt className="metadata-icon" />
            {job.location}
          </span>
          <span className="metadata-item">
            <FaDollarSign className="metadata-icon" />
            KES {job.budget.toLocaleString()}
          </span>
        </address>

        {/* Skills tags displayed as smaller, rounded, colored pill badges */}
        <div className="job-skills">
          {job.skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Footer separated by a divider, with stats left and apply button right */}
      <footer className="job-footer">
        <div className="job-stats">
          <time className="stat-item" dateTime={job.postedAt}>
            <FaRegClock className="stat-icon" />
            {job.posted}
          </time>
          <span className="stat-item">
            <FaUsers className="stat-icon" />
            {job.proposals} Proposals
          </span>
        </div>
        <button className="btn btn-primary apply-btn">Apply Now</button>
      </footer>
    </article>
  );
}

export default JobCard;