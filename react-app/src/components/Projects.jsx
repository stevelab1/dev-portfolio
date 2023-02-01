import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import "../App.css";

// import projectData from './projectData.json';
// import Project from './Project.js';
// import ProjectNav from './ProjectNav.js';

const Projects = () => {

const [projects, setProjects] = useState([]);
const { projectId } = useParams();
  
useEffect(() => {
  setProjects(projectData);
}, []);

  return (
    <main>
    <h1>Projects</h1>
    <CardDeck className="blue-card-deck">
        {projects.map((project) => (
            <Project 
                key={project.id}
                title={project.title}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
                screenshot={project.screenshot} 
            />
        ))}
    </CardDeck>
    <ProjectNav projects={projects} projectId={projectId} />
</main>
  );
};

export default Projects;
