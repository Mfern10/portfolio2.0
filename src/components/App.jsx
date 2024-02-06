import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TechStack from "./TechStack";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
