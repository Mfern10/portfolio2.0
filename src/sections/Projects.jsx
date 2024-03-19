import { Container } from "react-bootstrap";
import ProjectCards from "../components/ProjectCards";
import MovieMaestroImg from "../assets/img/moviemaestro.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <Container className="projects-container">
        <ProjectCards
          title="MovieMaestro - Movie Randomizer"
          text="A Full Stack MERN application. Built by a team of 3 Developers. Fixes the issue of doom scrolling by suggesting movies based on search criteria such as streaming platforms, region, genre, rating etc. "
          img={MovieMaestroImg}
          link="https://moviemaestro.netlify.app/"
        />
        <ProjectCards title="Clothing Catalogue - REST API" text="" />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </Container>
      {/* Content of your projects section */}
    </section>
  );
};

export default Projects;
