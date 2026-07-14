import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);  
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">Homeland<span>Job</span></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Find Jobs</a></li>
            <li><a href="/employers">Employers</a></li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <a href="/login" className="btn btn-outline">Sign In</a>
          <a href="/post-job" className="btn btn-primary">Post a Job</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Find Jobs</a></li>
          <li><a href="/employers">Employers</a></li>
          <li className="mobile-actions">
            <a href="/login" className="btn btn-outline full-width">Sign In</a>
            <a href="/post-job" className="btn btn-primary full-width">Post a Job</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;