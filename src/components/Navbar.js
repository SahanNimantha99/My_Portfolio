import React from "react";

import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top custom-navbar">
      <div className="container">
        <button
          className="navbar-brand btn btn-link"
          onClick={() => scrollToSection("hero")}
        >
          Sahan Nimantha
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <button
              className="nav-item nav-link btn btn-link"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
            <button
              className="nav-item nav-link btn btn-link"
              onClick={() => scrollToSection("work")}
            >
              Work
            </button>
            <button
              className="nav-item nav-link btn btn-link"
              onClick={() => scrollToSection("education")}
            >
              Education
            </button>
            <button
              className="nav-item nav-link btn btn-link"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="nav-item nav-link btn btn-link"
              onClick={() => scrollToSection("hackathon")}
            >
              Hackathon
            </button>
            <button
              className="nav-item nav-link btn btn-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
            <button
              className="nav-item nav-link btn btn-link"
              onClick={() => scrollToSection("blog")}
            >
              Blog
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
