import React from "react";
import { Form, Button } from "react-bootstrap";
import { ValidationError, useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzepwgn");
  if (state.succeeded) {
    return <p className="text-white p-4">Thanks for your message!</p>;
  }
  return (
    <>
      <br />
      <div className="text-white p-4">
        <p>Find me on: </p>
        <p>
          <a
            href="https://github.com/stevelab1"
            target="_blank"
            rel="noopener noreferrer"
            alt="link to stevelab1 github profile"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/stephen-t-823341193"
            target="_blank"
            rel="noopener noreferrer"
            alt="link to LinkedIn"
          >
            LinkedIn
          </a>
        </p>
        <p> ... or contact me via email using the form below:</p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <p>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" name="name" />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </p>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <p>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </p>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <p>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </p>
            </Form.Group>
            <p>
              <Button
                variant="outline-light"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </Button>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
