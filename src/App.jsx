import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./sections/Home";
import Scroller from "./components/Scroller";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <NavBar
        linkedInLink="https://www.linkedin.com/in/mitchell-fernandez/"
        gitHubLink="https://github.com/Mfern10"
      />
      <Scroller />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
