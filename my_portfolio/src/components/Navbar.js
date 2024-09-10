import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <button
          className="navbar-brand btn btn-link"
          onClick={() => scrollToSection("hero")}
        >
          My Portfolio{" "}
        </button>{" "}
        <div className="navbar-nav">
          <button
            className="nav-item nav-link btn btn-link"
            onClick={() => scrollToSection("about")}
          >
            {" "}
            About{" "}
          </button>{" "}
          <button
            className="nav-item nav-link btn btn-link"
            onClick={() => scrollToSection("work")}
          >
            {" "}
            Work{" "}
          </button>{" "}
          <button
            className="nav-item nav-link btn btn-link"
            onClick={() => scrollToSection("education")}
          >
            {" "}
            Education{" "}
          </button>{" "}
          <button
            className="nav-item nav-link btn btn-link"
            onClick={() => scrollToSection("projects")}
          >
            {" "}
            Projects{" "}
          </button>{" "}
          <button
            className="nav-item nav-link btn btn-link"
            onClick={() => scrollToSection("hackathon")}
          >
            {" "}
            Hackathon{" "}
          </button>{" "}
          <button
            className="nav-item nav-link btn btn-link"
            onClick={() => scrollToSection("contact")}
          >
            {" "}
            Contact{" "}
          </button>{" "}
          <button
            className="nav-item nav-link btn btn-link"
            onClick={() => scrollToSection("blog")}
          >
            {" "}
            Blog{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
