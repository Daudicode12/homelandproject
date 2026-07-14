import JobCard from "./jobCard";
import EmptyState from "./emptyState";

function JobList({ jobs, onClearFilters, onJobClick }) {
  if (jobs.length === 0) {
    return <EmptyState onClear={onClearFilters} />;
  }

  return (
    <section className="jobs-grid">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={() => onJobClick(job)} />
      ))}
    </section>
  );
}

export default JobList;