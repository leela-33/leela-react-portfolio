import React from "react";

const FreelanceWork = ({ projects }) => {
  return (
    <div className="container">
      <h2 className="section-title">Freelance & Client Work</h2>
      <p className="section-subtitle">
        Real-world projects focused on business value and measurable impact.
      </p>

      <div className="card-grid">
        {projects.map((proj) => (
          <a
            key={proj.id}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="freelance-card"
          >
            <div
              className="freelance-image"
              style={{ backgroundImage: `url(${proj.image})` }}
            ></div>

            <div className="freelance-content">
              <h3 className="card-title">{proj.name}</h3>
              <p className="card-description">{proj.description}</p>
              <p className="card-impact">
                <strong>Impact: </strong>
                {proj.impact}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FreelanceWork;
