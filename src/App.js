import './App.css';
import React, { useRef } from "react"
import Landing from "./components/Landing"
import Navbar from './components/Navbar';
import Star from './components/Star'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'


function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main>
      <div className="body-background">
        <Star />
        <Navbar scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToSkills={scrollToSkills} scrollToWork={scrollToWork}/>
        <Landing scrollToAbout={scrollToAbout} />
      </div>
      <div ref={aboutRef}>
       <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={workRef}>
      <Timeline />
      </div>
    </main>
  );
}

export default App;
