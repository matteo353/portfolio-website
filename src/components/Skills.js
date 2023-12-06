import React from 'react'
import './Styling/Skills.css'
import { DiPython, DiJavascript1, DiDjango, DiReact, DiCss3, DiHtml5, DiAws, DiGit, DiDatabase } from 'react-icons/di';

function Skills() {

    const skills = [
      { icon: DiPython, name: 'Python' },
      { icon: DiJavascript1, name: 'JavaScript' },
      { icon: DiDatabase, name: 'SQL' },
      { icon: DiGit, name: 'Git' },
      { icon: DiReact, name: 'React' },
      { icon: DiCss3, name: 'CSS3' },
      { icon: DiHtml5, name: 'HTML5' },
      { icon: DiAws, name: 'AWS' },
      { icon: DiDjango, name: '' }
    ];
  
    return (
      <div id='skills' className="skills-section">
        <div className='skills-box'>
          <h1 className="skills-title">SKILLS</h1>
          <div className='skills-list'>
            {skills.map((skill, index) => (
              <span key={index} className="skill-item">
                <skill.icon />
                <span className="skill-name">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
export default Skills