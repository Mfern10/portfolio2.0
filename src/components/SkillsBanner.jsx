import React from "react";
import { Container } from "react-bootstrap";
import TechStack from "./TechStack";

const SkillsBanner = () => {
  return (
    <>
      <Container className="skills-container">
        <TechStack />
        <Container className="skills-banner">
          <h1 className="skills-title">Skills</h1>
          <p className="skills-p">
            I am an experienced Full Stack Web Developer with a focus on MERN
            Stack. I like to build functional and creative applications with a
            strong ability to write clean and efficient code.
            <br />
          </p>
        </Container>
      </Container>
    </>
  );
};

export default SkillsBanner;
