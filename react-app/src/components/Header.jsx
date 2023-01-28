import logo from "../covercrop.jpg";
import "../App.css";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/stevelab1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo-small" alt="logo" />
        </a>
        <p>
          <code>
            Frontend Developer specializing in
            <br />
            fast web applications and
            <br />
            integrating APIs
          </code>
        </p>
        <a
          className="App-link"
          href="https://github.com/stevelab1"
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
