import React , {useState } from 'react'
import './Styling/Navbar.css'

function Navbar({scrollToAbout, scrollToProjects, scrollToSkills, scrollToWork}) {
  const resumeUrl = "https://drive.google.com/file/d/1AKj5nyh6qTDXx-azZLsYw4bjkDBkURlr/view?usp=sharing";
  const [isActive, setIsActive] = useState(false);


  const viewResume = () => {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const hamburgerMenuClick = () => {
    setIsActive(current => !current); // Toggles the isActive state
  };




  return (
    <div>
    <div className='nav'>
        <nav className="navbar">
        <ul className="nav-list">
        <li className="nav-item" onClick={scrollToAbout}>ABOUT ME</li>
        <li className="nav-item" onClick={scrollToProjects}>PROJECTS</li>
        <li className="nav-item" onClick={scrollToSkills}>SKILLS</li>
        <li className="nav-item" onClick={scrollToWork}>WORK HISTORY</li>
        <li className="nav-item" onClick={viewResume}>RESUME</li>
      </ul>
    </nav>
    <button
      className={`hamburger ${isActive ? 'is-active' : ''}`}
      onClick={hamburgerMenuClick}
     >
      <div className='bar'></div>
    </button>
    </div>
    <nav className={`mobile-nav ${isActive ? 'is-active' : ''}`}>
    <ul className="mobile-nav-list" onClick={hamburgerMenuClick}>
        <li onClick={scrollToAbout }>ABOUT ME</li>
        <li onClick={scrollToProjects}>PROJECTS</li>
        <li onClick={scrollToSkills}>SKILLS</li>
        <li onClick={scrollToWork}>WORK HISTORY</li>
        <li onClick={viewResume}>RESUME</li>
      </ul>

    </nav>


    </div>
    
  )
}

export default Navbar