import React from "react";
import "./Hero.css"; // Import your CSS file for styling

const Hero = ({title, content, className }) => {
  return (
    <div className={`hero-container ${className}`}>
     <div className="content-box">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
    </div>
  );
};

export default Hero;
