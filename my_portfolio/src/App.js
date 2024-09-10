import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/work" element={<Work />} />{" "}
          <Route path="/education" element={<Education />} />{" "}
          <Route path="/projects" element={<Projects />} />{" "}
          <Route path="/hackathon" element={<Hackathon />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/blog" element={<Blog />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
