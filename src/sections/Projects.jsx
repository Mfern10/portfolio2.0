import { Container } from "react-bootstrap";
import ProjectCards from "../components/ProjectCards";
import MovieMaestroImg from "../assets/img/moviemaestro.png";
import ClothingCatalogueImg from "../assets/img/clothingcatalogue-api.png";
import HangmanImg from "../assets/img/hangman-terminal.png";
import PortfolioV1Img from "../assets/img/portfolioV1.png";
import PortfolioV2Img from "../assets/img/portfolioV2.png";

const Projects = () => {
  return (
    <>
      <Container className="whole-projects-container" id="projects">
        <Container className="projects-text-container">
          <h1 className="projects-h1">Projects</h1>
          <p className="projects-p">
            I have been fortunate to work on multiple products through my
            studies showing a broad range of knowledge in web development. Take
            a look at some of my key projects.
          </p>
        </Container>
        <Container className="projects-container">
          <ProjectCards
            title="Portfolio Website - Version 2"
            text="Created using React, A simple yet effective single page application personal portfolio that includes information such as: Resume, Skills, Projects and Contact details."
            img={PortfolioV2Img}
            link="https://mitchellfernandez.netlify.app/"
          />
          <ProjectCards
            title="MovieMaestro - Movie Randomizer"
            text="A Full Stack MERN application. Built by a team of 3 Developers. Fixes the issue of doom scrolling by suggesting movies based on search criteria such as streaming platforms, region, genre, rating etc. "
            img={MovieMaestroImg}
            link="https://moviemaestro.netlify.app/"
          />
          <ProjectCards
            title="Clothing Catalogue - REST API"
            text="A RESTful API written with Python and Python's Flask Framework. Utilises PostgreSQL for Data Management. The API was built to be used as an API for an Ecommerce clothing store, but this API would work well for any form of online store that handles users and stock."
            img={ClothingCatalogueImg}
            link="https://github.com/Mfern10/ClothingCatalogue-API"
          />
          <ProjectCards
            title="Hangman Game - Terminal Application"
            text="A fun Terminal Game created using Python and BASH scripting. The game shows strong understanding of back-end and terminal knowledge."
            img={HangmanImg}
            link="https://github.com/Mfern10/Terminal_app_hangman/tree/main"
          />
          <ProjectCards
            title="Portfolio Website - Version 1"
            text="Static Portfolio Website written in HTML and CSS. My first project at Coder Academy showing myself as a Developer. Taught me the fundamental concepts of Web Development."
            img={PortfolioV1Img}
            link="https://mitchellfernandez.vercel.app/index.html"
          />
        </Container>
      </Container>
    </>
  );
};

export default Projects;
