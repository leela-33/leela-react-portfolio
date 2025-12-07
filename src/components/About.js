import React from "react";

const About = () => {
  return (
    <div className="container about">
      <div className="about-image">
        <div className="about-avatar">LV</div>
      </div>
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          MERN & Python Developer focused on building scalable full-stack
          applications.
        </p>
        <p>
          I am a passionate full-stack developer with hands-on experience
          building web applications from responsive user interfaces to secure,
          well-structured backend APIs. I enjoy turning real-world problems into
          clean, maintainable code.
        </p>
        <p>
          My journey started with small practice apps to understand fundamentals.
          Now, I focus on full-stack solutions that involve routing, data
          handling, authentication, and clear user experiences.
        </p>
        <p>
          I’ve also worked on freelance projects, collaborating with businesses
          to create websites that not only look good but also support their
          goals.
        </p>
      </div>
    </div>
  );
};

export default About;
