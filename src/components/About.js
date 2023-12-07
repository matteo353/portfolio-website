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
            <p>Hello! I am a recent Computer Science graduate from UMass Amherst with a particular focus on data science. I excel at data analytics, building web applications, and especially enjoy designing user interfaces. Additionally, my academic and professional journey has given me extensive exposure to database management and cloud technologies, particularly AWS. Outside of tech, I love to watch movies, ski, golf, and play basketball. </p>
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