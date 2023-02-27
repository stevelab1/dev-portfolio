import React, { useState } from "react";
import { Card, Row, Col, Button, Offcanvas } from "react-bootstrap";
import SkillsFilter from "../components/SkillsFilter";
import UserCard from "../components/GitHubUserCard";

import "../App.css";

const Home = () => {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "Node.js",
    "React",
    "Next",
    "Astro",
    "Tailwind",
    "Bootstrap",
    "API Integration",
    "AI Workflows",
    "Python",
    "Django",
    "REST Framework",
    "Swift/SwiftUI",
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="Home">
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

        <Col className="skills">
          <Card className="bg-black text-white" style={{ textAlign: "left" }}>
            <Card.Body>
              <Card.Title>
                <code
                  style={{ textDecoration: "none", fontWeight: "bold" }}
                  className="App-link"
                >
                  Stephen Tallett's Portfolio
                </code>{" "}
              </Card.Title>
              <Card.Text>
                <code>
                  Front end web developer with
                  <br />
                  mobile, platform and
                  <br />
                  research experience
                </code>
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <SkillsFilter skills={skills} />
            </Card.Body>

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
                      Front-End Web Developer with a background in iOS App
                      Publishing, Psychology and Research
                    </p>
                    <p>
                      <UserCard username="stevelab1" />
                      <br />
                      🤔 Favourite tech stack:
                      <br />
                      <span style={{ marginLeft: "1rem" }}>
                        - React with Next or Astro for web
                      </span>
                      <br />
                      <br />
                      <span style={{ marginLeft: "1rem" }}>
                        - Swift/SwiftUI for iOS and MacOS
                      </span>
                      <br />
                      <br />
                      🔭 This portfolio was built using React
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
