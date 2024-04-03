import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function ProjectCards({title, text, link, img}) {
  return (
    <Container>
      <Card className="project-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{ fontWeight: 600 }}>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button
            variant="dark"
            onClick={() => (window.location.href = link)}
          >
            See more
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProjectCards;
