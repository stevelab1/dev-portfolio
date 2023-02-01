import React from "react";

import logo from "../covercrop.jpg";
import "../App.css";

const Projects = () => {
  return (
    <div className="App-home">
      <p>
        <code>
          <span className="transparent">Frontend Developer specializing in</span>
          <br />
          PROJECTS
          <br />
          <span className="transparent">interfaces to APIs</span>
        </code>
      </p>
      <a
        className='App-link'
        href="https://github.com/stevelab1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          <code className='App-link'>stevelab1</code>
        </p>
        {/* <br /> */}
        <p>
          <img
            style={{ borderRadius: "50%" }}
            src={logo}
            className="App-logo-small"
            alt="logo"
          />
        </p>
      </a>
    </div>
  );
};

export default Projects;
