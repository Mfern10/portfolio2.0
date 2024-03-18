import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./sections/Home";
import Scroller from "./components/Scroller";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Banner name="Mitch"/>
      <AboutBanner /> */}
      <Scroller />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
