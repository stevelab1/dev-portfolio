import React, { useState } from "react";
import { Card, Row, Col, Button, ListGroup, Offcanvas } from "react-bootstrap";

import "../App.css";
// import logo from "../covercrop.jpg";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main>
      {/* <h1>Home</h1> */}
      <Row xs={1} sm={2} lg={3} className="g-4 p-4">
        <Col className="pt-4" style={{ width: "12rem", textAlign: "left" }}>
          <Card className="bg-black avatar border">
            <Card.Body style={{ fontSize: "6px" }}>
              _________¶_¶¶¶¶¶¶¶¶¶¶¶ _____¶¶¶¶¶¶¶_________¶
              ___¶¶¶¶¶¶_____________¶ ___¶_________________¶
              ____¶________________¶¶ ____¶¶________________¶
              _____¶________________¶¶ _____¶¶_______¶¶¶____¶¶¶
              ______¶_____¶¶___¶¶_¶___¶ ______¶_____¶¶_____¶____¶
              ______¶¶____¶______¶¶¶¶¶¶¶ _______¶____¶¶__¶¶¶_____¶¶
              ______¶¶¶¶____¶¶¶¶_____¶¶ ______¶¶¶_______________¶¶
              _______¶¶¶______________¶¶ ________¶_____¶¶¶¶¶¶¶¶¶¶¶
              _______¶¶_______¶¶¶¶¶ ______¶¶¶¶¶_____¶ ___¶¶¶¶__¶¶¶¶¶¶¶¶
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="bg-black text-white" style={{ textAlign: "left" }}>
            <Card.Body>
              <Card.Title>
                <code
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  className="App-link"
                >
                  Steve T Lab's Dev Portfolio
                </code>{" "}
              </Card.Title>
              <Card.Text>
                <code>
                  Frontend Developer focusing on
                  <br />
                  fast web applications and
                  <br />
                  interfaces to APIs
                </code>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush bg-dark">
              <ListGroup.Item className="bg-black text-white border-bottom border-top">
                HTML, CSS, Javascript
              </ListGroup.Item>
              <ListGroup.Item className="bg-black text-white border-bottom">
                React, Next, Astro
              </ListGroup.Item>
              <ListGroup.Item className="bg-black text-white border-bottom">
                Tailwind, Bootstrap
              </ListGroup.Item>
              <ListGroup.Item className="bg-black text-white border-bottom">
                API Integrations, AI Workflows
              </ListGroup.Item>
              <ListGroup.Item className="bg-black text-white border-bottom">
                Python, Django REST Framework
              </ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link
                href="https://github.com/stevelab1"
                target="_blank"
                rel="noopener noreferrer"
                alt="link to stevelab1 github profile"
              >
                stevelab1
              </Card.Link>
              <Card.Link
                href="https://github.com/stevelab1/dev-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                alt="link to dev-portfolio github repo"
              >
                /dev-portfolio
              </Card.Link>
              <Card.Link
                href="https://drive.google.com/file/d/1bAdukk8IEQFtxEf2B9W-8SoTe-kixhlz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                alt="link to CV"
              >
                /CV
              </Card.Link>
            </Card.Body>
            <Card.Body>
              <Button variant="outline-light" onClick={handleShow}>
                More info
              </Button>

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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
