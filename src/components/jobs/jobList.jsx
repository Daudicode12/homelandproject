import JobCard from "./jobCard";

function JobList({ jobs }) {
  return (
    <section className="jobs-grid">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </section>
  );
}

export default JobList;