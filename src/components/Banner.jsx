import React from "react";
import ButtonClick from "./Button";

const Banner = ({ name }) => {
  return (
    <div className="banner">
      <h1>Hi, I'm {name}.</h1>
      <p>I am a Software Developer</p>
      <ButtonClick  title="Resume"/>
    </div>
  );
};

export default Banner;





