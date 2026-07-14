import { useState } from "react";
import Header from "./components/layout/header";
import SearchFilters from "./components/filters/searchFilter";
import JobList from "./components/jobs/jobList";
import jobsData from "./data/jobs";

function App() {
  // All filter values live in one object
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    location: "",
    budget: "",
  });

  // Generic function for updating any filter
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredJobs = jobsData.filter((job) => {
  const matchesSearch =
    job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
    job.employer.toLowerCase().includes(filters.search.toLowerCase());

  const matchesCategory =
    filters.category === "" ||
    job.category === filters.category;

  const matchesLocation =
    filters.location === "" ||
    job.location === filters.location;

  const matchesBudget =
    filters.budget === "" ||
    job.budget <= Number(filters.budget);

  return (
    matchesSearch &&
    matchesCategory &&
    matchesLocation &&
    matchesBudget
  );
});

  return (
    <>
      <Header />

      <main className="container">
        <h1>Find Your Dream Job</h1>

        <SearchFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
          <p className="results">
            Showing {filteredJobs.length} of {jobsData.length} jobs
          </p>

          <JobList jobs={filteredJobs} />
      </main>
    </>
  );
}

export default App;