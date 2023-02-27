import React, { useState, useEffect } from "react";

import projectData from "../data/projectData.json";
import Project from "../components/Project.js";
import ProjectNav from "../components/ProjectNav.js";

//routing
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import "../App.css";
import ProjectDetail from "../components/ProjectDetail";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const match = useRouteMatch();

  useEffect(() => {
    setProjects(projectData);

    // Get all the skills from the projects
    const allSkills = projectData.flatMap((project) => project.skills);

    // Filter out duplicate skills and sort alphabetically
    const uniqueSkills = [...new Set(allSkills)].sort();

    setSkills(uniqueSkills);
  }, []);

  const handleSkillClick = (skill) => {
    // Filter the projects based on the clicked skill
    const filteredProjects = projectData.filter((project) =>
      project.skills.includes(skill)
    );
    setProjects(filteredProjects);
  };

  return (
    <main>
      <div className="pills-container">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="pill"
            onClick={() => handleSkillClick(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
      <Switch>
        <Route exact path={match.path}>
          <Row xs={1} lg={2} xxl={3} className="">
            {projects.map((project) => (
              <Col>
                <Link to={`${match.url}/${project.id}`}>
                  <Project
                    key={project.id}
                    title={project.title}
                    deployedLink={project.deployedLink}
                    githubLink={project.githubLink}
                    screenshot={project.screenshot}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Route>
        <Route path={`${match.path}/:projectId`}>
          {projects.map((project) => (
            <Route key={project.id} path={`${match.path}/${project.id}`}>
              <ProjectDetail
                title={project.title}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
                screenshot={project.screenshot}
              />
            </Route>
          ))}
        </Route>
      </Switch>
      <ProjectNav projects={projectData} />
    </main>
  );
};

export default Projects;
