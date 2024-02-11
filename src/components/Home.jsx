import React from "react";
import "./Home.css";
import Hero from "./Hero";
import ButtonUsage from "./Button";

const Home = () => {
  return (
    <>
    <Hero title="Hello, My name is Mitch." content="I am a Software Developer" className="home-hero"/>
    <ButtonUsage />
    </>
  );
};

export default Home;
