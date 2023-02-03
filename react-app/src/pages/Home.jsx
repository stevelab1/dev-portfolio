import React, { useState } from "react";
import { Card, Row, Col, Button, ListGroup, Offcanvas } from "react-bootstrap";

import "../App.css";
// import logo from "../covercrop.jpg";

const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main>
      {/* <h1>Home</h1> */}
      <Row xs={1} sm={2} lg={3} className="g-4 p-4">
        <Col className="pt-4" style={{ width: "12rem", textAlign: "left" }}>
          <Card className="bg-black avatar border">
            <Card.Body style={{ fontSize: "6px" }}>
              _________¶_¶¶¶¶¶¶¶¶¶¶¶ _____¶¶¶¶¶¶¶_________¶
              ___¶¶¶¶¶¶_____________¶ ___¶_________________¶
              ____¶________________¶¶ ____¶¶________________¶
              _____¶________________¶¶ _____¶¶_______¶¶¶____¶¶¶
              ______¶_____¶¶___¶¶_¶___¶ ______¶_____¶¶_____¶____¶
              ______¶¶____¶______¶¶¶¶¶¶¶ _______¶____¶¶__¶¶¶_____¶¶
              ______¶¶¶¶____¶¶¶¶_____¶¶ ______¶¶¶_______________¶¶
              _______¶¶¶______________¶¶ ________¶_____¶¶¶¶¶¶¶¶¶¶¶
              _______¶¶_______¶¶¶¶¶ ______¶¶¶¶¶_____¶ ___¶¶¶¶__¶¶¶¶¶¶¶¶
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="bg-black text-white" style={{ textAlign: "left" }}>
            <Card.Body>
              <Card.Title>
                <code 
                style={{ textDecoration: "none", fontWeight: "bold" }}
                className="App-link"
                >stevelab1/dev-portfolio</code>{" "}
              </Card.Title>
              <Card.Text>
                <code>
                  Frontend Developer focusing on
                  <br />
                  fast web applications and
                  <br />
                  interfaces to APIs
                </code>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush bg-dark">
              <ListGroup.Item 
              className="bg-black text-white border-bottom border-top"
              >Cras justo odio</ListGroup.Item>
              <ListGroup.Item 
              className="bg-black text-white border-bottom"
              >Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item 
              className="bg-black text-white border-bottom"
              >Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            <Card.Body>
            <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-success">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><code className="text-white">Offcanvas</code></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <code className="text-white"> Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.</code>
        </Offcanvas.Body>
      </Offcanvas>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
