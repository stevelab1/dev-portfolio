import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const ProjectNav = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  const location = useLocation();
  const { projectId } = useParams();

  useEffect(() => {
    const index = projects.findIndex(
      (project) => project.id === (projectId || projects[0].id)
    );
    setActiveProject(index);
  }, [location, projects, projectId]);

  const handleClick = (index) => {
    setActiveProject(index);
  };

  return (
    <nav className="sticky-nav">
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={activeProject === index ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            <Link to={`/projects/${project.id}`}>
              <span className="project-title-desktop">{project.title}</span>
              <span className="project-id-mobile">{project.id}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProjectNav;
