import React, { useState } from 'react';

const ProjectNav = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(0);

  const handleClick = (index) => {
    setActiveProject(index);
  };

  return (
    <nav className="sticky-nav">
      <ul>
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={activeProject === index ? 'active' : ''}
            onClick={() => handleClick(index)}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProjectNav;
