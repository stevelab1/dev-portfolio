import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";

import "../App.css";

import projectData from "../data/projectData.json";
import Project from "../components/Project.js";
// import ProjectNav from './ProjectNav.js';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // const { projectId } = useParams();

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <main>
      {/* <h1>Projects</h1> */}
      <Row xs={1} lg={2} xxl={3} className="g-4 p-4">
        {projects.map((project) => (
          <Col>
            <Project
              key={project.id}
              title={project.title}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
              screenshot={project.screenshot}
            />
          </Col>
        ))}
      </Row>
      {/* <ProjectNav projects={projects} projectId={projectId} /> */}
    </main>
  );
};

export default Projects;
