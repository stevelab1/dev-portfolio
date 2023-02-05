import React, { useState } from "react";
import { Card, Col, Offcanvas } from "react-bootstrap";
import slugify from "react-slugify";

const ProjectDetail = ({ title, githubLink, deployedLink, screenshot }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleSlug = slugify(title);

  return (
    <Col
      style={{ display: "flex", justifyContent: "center" }}
      className="pb-4 pt-2"
    >
      <Card style={{ maxWidth: "1300px" }} className="bg-dark text-white">
        <Card.Body className="">
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>
            <Card.Link
              target="_blank"
              rel="noopener noreferrer"
              href={deployedLink}
            >
              Live
            </Card.Link>
            <Card.Link
              target="_blank"
              rel="noopener noreferrer"
              href={githubLink}
            >
              GitHub
            </Card.Link>
            <Card.Link style={{ cursor: "pointer" }} onClick={handleShow}>
              Info
            </Card.Link>

            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className="bg-success"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <code className="text-white">{title}</code>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <code className="text-white">
                  <p>
                    <a
                      href={`https://github.com/stevelab1/${titleSlug}/blob/main/LICENSE`}
                    >
                      <img
                        alt={`${title} license badge`}
                        src={`https://img.shields.io/github/license/stevelab1/${titleSlug}`}
                      />
                    </a>
                    <a
                      href={`https://github.com/stevelab1/${titleSlug}/stargazers`}
                    >
                      <img
                        alt={`${title} stars badge`}
                        src={`https://img.shields.io/github/stars/stevelab1/${titleSlug}`}
                      />
                    </a>
                    <img
                      alt={`${title} top language badge`}
                      src={`https://img.shields.io/github/languages/top/stevelab1/${titleSlug}?style=flat&logo=appveyor`}
                    />
                    <img
                      alt={`${title} last commit badge`}
                      src={`https://img.shields.io/github/last-commit/stevelab1/${titleSlug}?style=flat&logo=appveyor`}
                    />
                    <a
                      href={`https://github.com/stevelab1/${titleSlug}/network`}
                      alt={`github network link for ${title} project`}
                    >
                      <img
                        src={`https://img.shields.io/github/forks/stevelab1/${titleSlug}`}
                        alt={`number of forks for ${title} project on github`}
                      />
                    </a>
                    <a
                      href={`https://github.com/stevelab1/${titleSlug}/graphs/contributors`}
                      alt={`github contributors link for ${title} project`}
                    >
                      <img
                        src={`https://img.shields.io/github/contributors/stevelab1/${titleSlug}`}
                        alt={`number of contributors for ${title} project on github`}
                      />
                    </a>
                    <a
                      href={`https://github.com/stevelab1/${titleSlug}/issues`}
                      alt={`github issues link for ${title} project`}
                    >
                      <img
                        src={`https://img.shields.io/github/issues/stevelab1/${titleSlug}`}
                        alt={`number of open issues for ${title} project on github`}
                      />
                    </a>
                    <a href={`https://github.com/stevelab1/${titleSlug}/pulls`}>
                      <img
                        src={`https://img.shields.io/github/issues-pr/stevelab1/${titleSlug}`}
                        alt={`pull requests for ${title}`}
                      />
                    </a>
                    {/* <img
                      src={`https://img.shields.io/github/package-json/v/stevelab1/${titleSlug}`}
                      alt={`package version for ${title}`}
                    /> */}
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

export default ProjectDetail;
