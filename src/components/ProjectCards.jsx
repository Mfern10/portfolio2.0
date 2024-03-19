import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function ProjectCards({title, text, link, img}) {
  return (
    <Card className="project-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{fontWeight: 600}}>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary" onClick={() => window.location.href = link}>See more</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
