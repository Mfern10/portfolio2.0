import React from "react";
import DownButtonImg from "../assets/img/downbutton.png";

const Banner = ({ name }) => {
  return (
    <div className="banner">
      <h1>Hi, I'm {name}.</h1>
      <p>I am a Software Developer</p>
      {/* <div className="downbutton-div">
        <img src={DownButtonImg} />
      </div> */}
    </div>
  );
};

export default Banner;
