import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        // style={{  }}
        className="text-white p-4"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <Form.Group>
          <Form.Label>Your Name:</Form.Label>
          <p>
            {" "}
            <Form.Control type="text" name="name" />{" "}
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Email:</Form.Label>
          <p>
            <Form.Control type="email" name="email" />
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <p>
            {" "}
            <Form.Control as="textarea" name="message" />
          </p>
        </Form.Group>
        <p>
          {" "}
          <Button variant="primary" type="submit">
            Send
          </Button>
        </p>
      </Form>
    </div>
  );
};

export default Contact;
