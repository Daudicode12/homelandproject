import "../../styles/filter.css";

function SearchFilters({ filters, onFilterChange }) {
  return (
    <section className="filters-container">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={filters.search}
        onChange={(e) =>
          onFilterChange("search", e.target.value)
        }
      />

      {/* Category */}
      <select
        value={filters.category}
        onChange={(e) =>
          onFilterChange("category", e.target.value)
        }
      >
        <option value="">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Backend">Backend</option>
        <option value="Mobile Development">Mobile Development</option>
        <option value="UI/UX Design">UI/UX Design</option>
      </select>

      {/* Location */}
      <select
        value={filters.location}
        onChange={(e) =>
          onFilterChange("location", e.target.value)
        }
      >
        <option value="">All Locations</option>
        <option value="Nairobi">Nairobi</option>
        <option value="Mombasa">Mombasa</option>
        <option value="Kisumu">Kisumu</option>
        <option value="Remote">Remote</option>
      </select>

      {/* Budget */}
      <select
        value={filters.budget}
        onChange={(e) =>
          onFilterChange("budget", e.target.value)
        }
      >
        <option value="">Any Budget</option>
        <option value="30000">Up to KES 30,000</option>
        <option value="50000">Up to KES 50,000</option>
        <option value="70000">Up to KES 70,000</option>
        <option value="100000">Up to KES 100,000</option>
      </select>

    </section>
  );
}

export default SearchFilters;