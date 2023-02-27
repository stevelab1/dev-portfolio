import React, { useState, useEffect } from "react";
import projectData from "../data/projectData.json";
import Project from "../components/Project.js";
import ProjectNav from "../components/ProjectNav.js";
import { Link, useRouteMatch, Switch, Route, useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import qs from "qs";

import "../App.css";
import ProjectDetail from "../components/ProjectDetail";
import SkillsFilter from "../components/SkillsFilter";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const location = useLocation();

  const match = useRouteMatch();

  useEffect(() => {
    setProjects(projectData);

    // Get all the skills from the projects
    const allSkills = projectData.flatMap((project) => project.skills);

    // Filter out duplicate skills and sort alphabetically
    const uniqueSkills = [...new Set(allSkills)].sort();

    setSkills(uniqueSkills);
  }, []);

  useEffect(() => {
    // Get the skills from the query string
    const query = qs.parse(location.search, { ignoreQueryPrefix: true }).skills;
    if (query) {
      const filteredProjects = projectData.filter((project) =>
        project.skills.includes(query)
      );
      setProjects(filteredProjects);
    }
  }, [location]);

  return (
    <main id="projects">
      <SkillsFilter skills={skills} />
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
