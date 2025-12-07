import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rlsdk5s", // Service ID 
        "template_nep5l59", // Template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "K2fNXNQfQL01e7b3j" // Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          setError(false);
          setFormState({ name: "", email: "", message: "" });
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className="container fade-in">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">
        Let's connect — reach out regarding projects, collaboration, or opportunities.
      </p>

      <div className="contact-layout">
        
        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              required
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project or message..."
            />
          </label>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {submitted && (
            <p className="contact-success">Message sent! I'll reply soon.</p>
          )}
          {error && (
            <p className="contact-error">
              Something went wrong. Try again later.
            </p>
          )}
        </form>

        {/* SOCIAL LINKS */}
        <div className="contact-links fade-in">
          <h3>Connect with Me</h3>
          <p>You can reach me on my social profiles:</p>

          <ul>
            <li>
              <a href="https://github.com/leela-33" target="_blank" rel="noreferrer">
                <FaGithub className="contact-icon" /> GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/leela-venkateswara-rao-gunja-838b662b8/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="contact-icon" /> LinkedIn
              </a>
            </li>

            <li>
              <a href="mailto:leelagunja7@gmail.com">
                <FaEnvelope className="contact-icon" /> leelagunja7@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Contact;
