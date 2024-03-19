import React, {useState, useEffect} from "react";
import TechStack from "./TechStack";


const AboutBanner = () => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setTextVisible(true);
      }, 1000); // Adjust the delay according to your preference

      return () => clearTimeout(timeout);
    }, []);
  return (
    <div className="about-banner">
      <h1 className="skills-title">Skills</h1>
      <p className="skills-p">
        I am an experienced Full Stack Web Developer with a Focus on MERN Stack.
        I like to build functional and creative applications with a focus on
        clean and efficient code.
        <br />
        {" "}
      </p>
    </div>
  );
};

export default AboutBanner;
