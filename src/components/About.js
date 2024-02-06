import React from 'react'
import './Styling/About.css';
import { FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import about_img from '../images/about-img6.jpg'

function About() {
  const resumeUrl = "https://drive.google.com/file/d/1AKj5nyh6qTDXx-azZLsYw4bjkDBkURlr/view?usp=sharing";


  const viewResume = () => {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

    return (
        <div id="about" className="about-section">
          <div className="text-box">
            <div className='about-details'>
            <h1 className="about-title">About Me</h1>
            <p>I am a recent computer science graduate from UMass Amherst with a particular focus in data science. I am based in the Boston area but am willing to relocate for the right position. I excel at data analytics, software development and I especially enjoy working in team environments. Additionally, my academic and professional journey have given me extensive exposure to database management and cloud technologies, particularly AWS. Outside of technology, I love to watch movies, ski, golf, and play basketball. </p>
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