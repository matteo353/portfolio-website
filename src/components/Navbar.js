import React from 'react'
import './Styling/Navbar.css'

function Navbar({scrollToAbout, scrollToProjects, scrollToSkills, scrollToWork}) {
  const resumeUrl = "https://drive.google.com/file/d/1ySKFYyeiMikuqCKIgd59ibW0UkMeLDb3/view?usp=sharing";


  const viewResume = () => {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <div>
        <nav className="navbar">
        <ul className="nav-list">
        <li className="nav-item" onClick={scrollToAbout}>ABOUT ME</li>
        <li className="nav-item" onClick={scrollToProjects}>PROJECTS</li>
        <li className="nav-item" onClick={scrollToSkills}>SKILLS</li>
        <li className="nav-item" onClick={scrollToWork}>WORK HISTORY</li>
        <li className="nav-item" onClick={viewResume}>RESUME</li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar