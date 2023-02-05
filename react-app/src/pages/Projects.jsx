import React, { useState, useEffect } from "react";

import projectData from "../data/projectData.json";
import Project from "../components/Project.js";
import ProjectNav from "../components/ProjectNav.js";

//routing
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import "../App.css";
import ProjectDetail from "../components/ProjectDetail";


const Projects = () => {
  const [projects, setProjects] = useState([]);

  const match = useRouteMatch();

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <main>
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
      <ProjectNav projects={projects} />
    </main>
  );
};

export default Projects;
