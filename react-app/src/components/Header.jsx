import React from "react";

import logo from "../covercrop.jpg";
import "../App.css";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Frontend web developer with xyz.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>stevelab1</code>
        </a>
      </header>
    </div>
  );
};

export default Header;
