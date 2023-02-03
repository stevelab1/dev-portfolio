import React from "react";
import Card from "react-bootstrap/Card";

const Project = ({ title, githubLink, deployedLink, screenshot }) => {
  return (
    <Card className="bg-dark text-white border">
      <Card.Img variant="top" src={screenshot} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>
          <Card.Link href={deployedLink}>Deployed Version</Card.Link>
          <Card.Link href={githubLink}>GitHub Repository</Card.Link>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Project;
