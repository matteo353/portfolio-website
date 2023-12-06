import React from 'react'
import './Styling/Project.css';

function Project({ name, description, demoLink, codeLink, imageUrl }) {
    return (
      <div className="project-container">
        <div className="project-details">
          <h3 className="project-title">{name}</h3>
          <p className="project-description">{description}</p>
          <button className="project-button" onClick={() => window.open(codeLink, "_blank")}>View Code</button>
        </div>
        <div className="project-image">
          <img src={imageUrl} alt={`${name} project`} />
        </div>
      </div>
    );
  }
  
  export default Project