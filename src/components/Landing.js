import React from 'react'
import './Styling/Landing.css'

export default function Landing({scrollToAbout}) {
  
  return (
    
      <div id="landing" className="landing-container">
        <h1 className="landing-title">Matteo Mastandrea</h1>
        <button onClick={scrollToAbout} className="know-me-button">Get to Know Me</button>
      </div>
  )
}
