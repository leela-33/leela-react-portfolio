import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython } from "react-icons/fa";
import { SiJavascript, SiExpress, SiSqlite } from "react-icons/si";

const Skills = () => {
  return (
    <div className="container fade-in">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Core technologies used to build modern, scalable web applications.
      </p>

      <div className="skills-grid animated-skills">
        
        {/* FRONTEND */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li><FaReact className="icon react" /> React.js</li>
            <li><SiJavascript className="icon js" /> JavaScript (ES6+)</li>
            <li><FaHtml5 className="icon html" /> HTML5</li>
            <li><FaCss3Alt className="icon css" /> CSS3 (Flexbox & Grid)</li>
          </ul>
        </div>

        {/* BACKEND */}
        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li><FaNodeJs className="icon node" /> Node.js</li>
            <li><SiExpress className="icon express" /> Express.js</li>
            <li><FaPython className="icon python" /> Python</li>
          </ul>
        </div>

        {/* DATABASE */}
        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li><SiSqlite className="icon db" /> SQLite</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Skills;
