import React from "react";
import { Container } from "react-bootstrap";
import TechStack from "./TechStack";


const SkillsBanner = () => {
  return (
    <Container className="skills-banner">
      <TechStack />
      <h1 className="skills-title">Skills</h1>
      <p className="skills-p">
        I am an experienced Full Stack Web Developer with a Focus on MERN Stack.
        I like to build functional and creative applications with a focus on
        clean and efficient code.
        <br />
      </p>
    </Container>
  );
};

export default SkillsBanner;
