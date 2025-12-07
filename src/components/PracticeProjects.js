import React from "react";

const PracticeProjects = ({ apps }) => {
  return (
    <div className="container">
      <h2 className="section-title">Practice Projects</h2>
      <p className="section-subtitle">
        These mini apps show hands-on practice of core concepts, state management,
        UI building, API usage, and problem-solving.
      </p>

      <ul className="practice-list">
        {apps.map((app, index) => (
          <li key={index} className="practice-item">
            <span>{app.name}</span>

            <a
              href={app.url}
              className="practice-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeProjects;
