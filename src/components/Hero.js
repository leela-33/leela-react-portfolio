import React from "react";
import myPhoto from "../images/myPhoto.png";




const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">Full-Stack Developer · MERN </p>
          <h1 className="hero-title">
            Leela Venkateswara Rao 
            <br />
            <span>Building Scalable Web Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Modern and responsive web applications are developed using the MERN stack , with a focus on clean design, smooth user interactions, and reliable performance.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-placeholder">
          <div className="hero-avatar">
            <img src={myPhoto} alt="Leela V R Gunja" className="hero-photo" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
