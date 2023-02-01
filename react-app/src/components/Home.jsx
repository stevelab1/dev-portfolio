import React from 'react';

import "../App.css";
import logo from "../covercrop.jpg";


const Home = () => {
  return (
    <div className="App-home">
      <p>
        <code>
          Frontend Developer focusing on
          <br />
          fast web applications and
          <br />
          interfaces to APIs
        </code>

        {/* <code>
          Developer focusing on fast
          <br />
          web and mobile apps +
          <br />
          API integration
        </code> */}

         {/* <code>
          Fast web and mobile apps
          <br />
          API integration
        </code> */}

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

export default Home;
