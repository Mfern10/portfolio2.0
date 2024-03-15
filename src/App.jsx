import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from "./components/Banner"
import AboutBanner from "./components/AboutBanner";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner name="Mitch"/>
      <AboutBanner />
    </div>
    )
}

export default App;