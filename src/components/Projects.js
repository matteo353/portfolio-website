import React from 'react'
import Project from './Project'
import './Styling/Projects.css'
import { projects } from './Data';


function Projects() {
      return (
        <div className="projects-section">
            <h1 className='projects-title'>PROJECTS</h1>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      );
    }
    
export default Projects