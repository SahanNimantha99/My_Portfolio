import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hackathon from "./components/Hackathon";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <section id="hero">
          {" "}
          <Hero />{" "}
        </section>{" "}
        <section id="about">
          {" "}
          <About />{" "}
        </section>{" "}
        <section id="work">
          {" "}
          <Work />{" "}
        </section>{" "}
        <section id="education">
          {" "}
          <Education />{" "}
        </section>{" "}
        <section id="projects">
          {" "}
          <Projects />{" "}
        </section>{" "}
        <section id="hackathon">
          {" "}
          <Hackathon />{" "}
        </section>{" "}
        <section id="contact">
          {" "}
          <Contact />{" "}
        </section>{" "}
        <section id="blog">
          {" "}
          <Blog />{" "}
        </section>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
