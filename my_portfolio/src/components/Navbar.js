import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {" "}
          My Portfolio{" "}
        </Link>{" "}
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/about">
            {" "}
            About{" "}
          </Link>{" "}
          <Link className="nav-item nav-link" to="/work">
            {" "}
            Work{" "}
          </Link>{" "}
          <Link className="nav-item nav-link" to="/education">
            {" "}
            Education{" "}
          </Link>{" "}
          <Link className="nav-item nav-link" to="/projects">
            {" "}
            Projects{" "}
          </Link>{" "}
          <Link className="nav-item nav-link" to="/hackathon">
            {" "}
            Hackathon{" "}
          </Link>{" "}
          <Link className="nav-item nav-link" to="/contact">
            {" "}
            Contact{" "}
          </Link>{" "}
          <Link className="nav-item nav-link" to="/blog">
            {" "}
            Blog{" "}
          </Link>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};

export default Navbar;
