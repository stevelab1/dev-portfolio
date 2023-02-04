import React, { useState } from "react";
import { Card, Col, Button, Offcanvas } from "react-bootstrap";

const Project = ({ title, githubLink, deployedLink, screenshot }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col
      style={{ display: "flex", justifyContent: "center" }}
      className="pb-4 pt-2"
    >
      <Card style={{ maxWidth: "1300px" }} className="bg-dark text-white">
        <Card.Body className="">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            <Card.Link href={deployedLink}>Live</Card.Link>
            <Card.Link href={githubLink}>GitHub</Card.Link>
            <Card.Link onClick={handleShow}>Info</Card.Link>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className="bg-success"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <code className="text-white">Stephen/stevelab1</code>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <code className="text-white">
                  <p>
                    ... background in App Publishing, Psychology and Research
                  </p>
                  {/* ... add images, lists, etc. */}
                  <br />
                  <p>
                    {/* ... include graphics below */}
                    {/* <img
                        src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=stevelab1&theme=react&line_height=40"
                        alt="github languages used"
                      /> */}
                    🤔 Favourite tech stack:
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      - React with Next or Astro for web
                    </span>
                    <br />
                    <span style={{ marginLeft: "1rem" }}>
                      - Swift/SwiftUI for iOS and MacOS
                    </span>
                    <br />
                    <br />
                    <br />
                    🔭 Currently working on a Search project
                    <br />
                    <br />
                    🌱 Currently learning Astro.js
                    <br />
                    <br /> 👯 I’m looking into React Native and Tauri
                  </p>
                </code>
              </Offcanvas.Body>
            </Offcanvas>
          </Card.Subtitle>
        </Card.Body>
        <Card.Img variant="bottom" src={screenshot} />
      </Card>
    </Col>
  );
};

export default Project;
