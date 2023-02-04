import React, { useState } from "react";

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
    // You could add additional code here to submit the form data to a server
  };

  return (
    <form onSubmit={handleSubmit} data-netlify="true" name="contact">
      <p>
        <label>
          Your Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default Contact;
