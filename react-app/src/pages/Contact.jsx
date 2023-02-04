import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Add additional code here to submit the form data to a server
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        className="text-white p-4"
        onSubmit={handleSubmit}
        data-netlify="true"
        name="contact"
      >
        <Form.Group>
          <Form.Label>Your Name:</Form.Label>
          <p>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Email:</Form.Label>
          <p>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </p>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <p>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </p>
        </Form.Group>
        <p>
          <Button variant="primary" type="submit">
            Send
          </Button>
        </p>
      </Form>
    </div>
  );
};

export default Contact;
