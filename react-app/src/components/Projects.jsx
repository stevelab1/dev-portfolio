import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import { Card } from "react-bootstrap";

import "../App.css";

import projectData from "../data/projectData.json";
import Project from "./Project.js";
// import ProjectNav from './ProjectNav.js';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // const { projectId } = useParams();

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.title}</h2>
            <a href={project.deployedLink}>View Deployed</a>
            <a href={project.githubLink}>View on GitHub</a>
            <img
              src={project.screenshot}
              alt={`Screenshot of ${project.title}`}
            />
          </li>
        ))}
      </ul>

      {/* <ProjectNav projects={projects} projectId={projectId} /> */}
    </main>
  );
};

export default Projects;
