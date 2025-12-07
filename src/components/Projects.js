import React from "react";

import ecommerceImg from "../images/E-Come.png";
import dentalImg from "../images/Dental.png";
import iplImg from "../images/IPLDashBord.png";

const Projects = ({ projects }) => {
  return (
    <div className="container">
      <h2 className="section-title">Key Projects</h2>
      <p className="section-subtitle">
        Selected work showcasing full-stack development, routing, and real-world problem solving.
      </p>

      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.id} className="card project-card">
  
  {/* IMAGE SECTION */}
  <div
    className="project-image"
    style={{ backgroundImage: `url(${project.image})` }}
  ></div>

  {/* TEXT SECTION */}
  <div className="project-content">
    <h3 className="card-title">{project.name}</h3>
    <p className="card-tech">{project.tech}</p>
    <p className="card-description">{project.description}</p>

    <div className="card-actions">
      <a href={project.liveUrl} className="btn btn-primary">
        Live Demo
      </a>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          className="btn btn-ghost"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      )}
    </div>
  </div>
</article>

        ))}
      </div>
    </div>
  );
};

export default Projects;
