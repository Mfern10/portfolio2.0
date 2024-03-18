import Card from "react-bootstrap/Card";
import ReactLogo from "../assets/img/react-logo.png";
import { Container } from "react-bootstrap";
import JSLogo from "../assets/img/javascript-lgo.png";
import PythonLogo from "../assets/img/python-logo.png";
import FlaskLogo from "../assets/img/flask-logo.png";


function TechStack() {
  return (
    <Container className="tech-stack-container">
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={ReactLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">React</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={JSLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">JavaScript</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={PythonLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">Python</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={ReactLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">HTML</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={ReactLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">CSS</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={FlaskLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">Flask</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={ReactLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">Express.js</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={ReactLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">Node.js</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="TechStackCard"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={ReactLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">MongoDB</Card.Title>
        </Card.Body>
      </Card>
      <Card
        className="tech-stack-card"
        style={{
          width: "10rem",
          backgroundColor: "transparent",
          border: "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={ReactLogo}
          style={{ opacity: "100%", padding: "1rem" }}
        />
        <Card.Body>
          <Card.Title className="card-title">PostgreSQL</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TechStack;
