import { useState, useEffect } from "react";
import Header from "./components/layout/header";
import SearchFilters from "./components/filters/searchFilter";
import JobList from "./components/jobs/jobList";
import LoadingSkeleton from "./components/jobs/loadingSkeleton";
import JobDetailModal from "./components/jobs/JobDetailModal";
import ErrorState from "./components/jobs/ErrorState";
import jobsData from "./data/jobs";
import "./styles/jobs.css"; // Ensure jobs layout styles are imported

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  
  // All filter values live in one object
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    location: "",
    budget: "",
  });

  // Mock fetch function that simulates API call and can fail
  const simulateFetchJobs = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Toggle this value to simulate success/failure
        const shouldFail = false;

        if (shouldFail) {
          reject(new Error("Failed to load jobs."));
        } else {
          resolve(jobsData);
        }
      }, 1500);
    });
  };

  const loadJobs = async () => {
    setLoading(true);
    // Clear any previous error before attempting a new fetch 
    // so the user doesn't see old error messages while waiting.
    setError(null);
    try {
      const data = await simulateFetchJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      // Regardless of success or failure, we must remove the loading state 
      // so the UI can transition to displaying either the data or the error state.
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadJobs();
  }, []);

  // Generic function for updating any filter
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: "",
      category: "",
      location: "",
      budget: "",
    });
  };

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    // Lock the body scroll when the modal is active 
    // to prevent the underlying page from scrolling while the user interacts with the modal.
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    document.body.style.overflow = ""; // Restore background scrolling
  };

  const filteredJobs = jobs.filter((job) => {
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

  // Sort jobs after filtering
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "budget_high") {
      return b.budget - a.budget;
    }
    if (sortBy === "budget_low") {
      return a.budget - b.budget;
    }
    if (sortBy === "newest") {
      // Sort by postedAt in descending order
      return new Date(b.postedAt) - new Date(a.postedAt);
    }
    return 0;
  });

  return (
    <>
      <Header />

      <main className="container">
        <SearchFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        
        {/* Only show badge if not loading, no error, and there are jobs or filters applied */}
        {!loading && !error && (
          <div className="results-badge">
            Showing <strong>{sortedJobs.length}</strong> of <strong>{jobs.length}</strong> jobs
          </div>
        )}

        {loading ? (
          <LoadingSkeleton />
        ) : error ? (
          <ErrorState onRetry={loadJobs} />
        ) : (
          <JobList 
            jobs={sortedJobs} 
            onClearFilters={handleClearFilters}
            onJobClick={handleOpenModal}
          />
        )}
      </main>

      {isModalOpen && selectedJob && (
        <JobDetailModal job={selectedJob} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;