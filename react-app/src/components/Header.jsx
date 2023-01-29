import logo from "../covercrop.jpg";
import "../App.css";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" className="App-link">
              <code>Home</code>
            </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/projects" className="App-link">
              <code>Projects</code>
            </Link>{" "}
          </li>
          <li>
            <Link to="/contact" className="App-link">
              <code>Contact</code>
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

{
  /* <a
className="App-link"
href="https://github.com/stevelab1"
target="_blank"
rel="noopener noreferrer"
>
<img src={logo} className="App-logo-small" alt="logo" />
</a> */
}
