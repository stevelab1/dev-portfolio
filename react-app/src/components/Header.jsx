import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../App.css";
// import logo from "../covercrop.jpg";

function Header() {
  return (
    <Navbar bg="black" expand="lg" variant="dark" sticky="top" 
    // style={{ backgroundColor: "#black" }}
    >
      <Container fluid>
        <Navbar.Brand>
          <a
            href="https://github.com/stevelab1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <span className="App-link">stevelab1@dev-portfolio</span> */}
            
            {/* <img
              style={{ borderRadius: "50%" }}
              src={logo}
              className="App-logo-small"
              alt="logo"
            /> */}
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="App-link">
              $ Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/projects" className="App-link">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" className="App-link">
                Contact   <span className="cursor">_</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
