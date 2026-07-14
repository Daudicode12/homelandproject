import "../../styles/jobCards.css";
import { FaMapMarkerAlt } from "react-icons/fa";

function JobCard({ job }) {
  return (
    <article className="job-card">

      <h2>{job.title}</h2>

      <p className="company">{job.employer}</p>

      <div className="job-info">
        <span className="job-location">
          <FaMapMarkerAlt className="location-icon" /> {job.location}
        </span>
        <span>KES {job.budget.toLocaleString()}</span>
      </div>

      <div className="skills">
        {job.skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="footer">

        <small>{job.posted}</small>

        <small>{job.proposals} Proposals</small>

      </div>

      <button>Apply</button>

    </article>
  );
}

export default JobCard;