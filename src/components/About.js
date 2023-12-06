import React from 'react'
import './Styling/About.css';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import about_img from '../images/about-img3.png'

function About() {
  const resumeUrl = "https://drive.google.com/file/d/1ySKFYyeiMikuqCKIgd59ibW0UkMeLDb3/view?usp=sharing";


  const viewResume = () => {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

    return (
        <div id="about" className="about-section">
          <div className="text-box">
            <div className='about-details'>
            <h1 className="about-title">About Me</h1>
            <p>Hello! I'm a recent Computer Science graduate from UMass Amherst, where I honed my skills with a particular focus on data science. I enjoy making aesthetic user interfaces, building web applications, and all things data. My academic journey and past professional experiences have armed me with the tools to develop user-centric software solutions and to translate intricate data-driven concepts into effective business strategies. Eager to apply my data science and programming expertise in a dynamic professional setting, I am looking forward to collaborating on projects that push the boundaries of what's possible in tech and business.</p>
              <div className="social-icons">
              <button className='resume-button' onClick={viewResume} ><span>View Resume</span></button>
              <a href="https://linkedin.com/in/matteo3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/matteo353" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="mailto:mmastandrea@umass.edu"><FaPaperPlane /></a>
          
              </div>
              </div>
            <div className="about-image">
              <img className="image" src={about_img} alt=''/>
            </div>
          </div>
        </div>
        
      );
}

export default About