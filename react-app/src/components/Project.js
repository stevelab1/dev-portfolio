import React from "react";
import { Card, Col} from "react-bootstrap";

const Project = ({ title, screenshot }) => {

  return (
    <Col
      style={{ display: "flex", justifyContent: "center" }}
      className="pb-4 pt-2"
    >
      <Card style={{ maxWidth: "1300px" }} className="bg-dark text-white">
        <Card.Body className="">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
          </Card.Subtitle>
        </Card.Body>
        <Card.Img variant="bottom" src={screenshot} />
      </Card>
    </Col>
  );
};

export default Project;
