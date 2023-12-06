import React, { useState, useEffect } from 'react';
import './Styling/Star.css'


const getRandomPosition = () => {

    const top = Math.random() * 40; // Percentage of the viewport height
    let left = 20 + Math.random() * 60; // Percentage of the viewport width

    const isMobile = window.innerWidth <= 768; 
    if (isMobile) {
    
      left = Math.random() * 25;

    }

    return { top, left };
  };



  
  const Star = () => {
    const [position, setPosition] = useState(getRandomPosition());
  
    useEffect(() => {
      // Update the position state to a new random position after a random time
      const timeout = setTimeout(() => {
        setPosition(getRandomPosition());
      }, 4000); // Delay in milliseconds
  
      return () => clearTimeout(timeout);
    }, [position]);
  
    // Styles for the position of the star
    const starStyle = {
      top: `${position.top}vh`,
      left: `${position.left}vw`
    };
  
    return <div className="star" style={starStyle}></div>;
  };
  
  export default Star;