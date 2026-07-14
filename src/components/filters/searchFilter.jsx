import { FaSearch, FaFilter, FaMapMarkerAlt, FaDollarSign, FaSort } from "react-icons/fa";
import "../../styles/filter.css";

function SearchFilters({ filters, onFilterChange, sortBy, onSortChange }) {
  return (
    <section className="hero-section">
      <div className="hero-header">
        <h1 className="hero-title">Find Your Next Opportunity</h1>
        <p className="hero-subtitle">Browse freelance jobs from top employers.</p>
      </div>

      <div className="filters-container">
        {/* Search Input */}
        <div className="filter-group search-group">
          <FaSearch className="filter-icon" />
          <input
            type="text"
            className="filter-input search-input"
            placeholder="Search by job title or employer..."
            value={filters.search}
            onChange={(e) => onFilterChange("search", e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="filter-group">
          <FaFilter className="filter-icon" />
          <select
            className="filter-select"
            value={filters.category}
            onChange={(e) => onFilterChange("category", e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Backend">Backend</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
        </div>

        {/* Location */}
        <div className="filter-group">
          <FaMapMarkerAlt className="filter-icon" />
          <select
            className="filter-select"
            value={filters.location}
            onChange={(e) => onFilterChange("location", e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        {/* Budget */}
        <div className="filter-group">
          <FaDollarSign className="filter-icon" />
          <select
            className="filter-select"
            value={filters.budget}
            onChange={(e) => onFilterChange("budget", e.target.value)}
          >
            <option value="">Any Budget</option>
            <option value="30000">Up to KES 30,000</option>
            <option value="50000">Up to KES 50,000</option>
            <option value="70000">Up to KES 70,000</option>
            <option value="100000">Up to KES 100,000</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="filter-group">
          <FaSort className="filter-icon" />
          <select
            className="filter-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort By"
          >
            <option value="newest">Newest</option>
            <option value="budget_high">Budget High → Low</option>
            <option value="budget_low">Budget Low → High</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilters;