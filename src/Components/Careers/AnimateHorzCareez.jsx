"use client";

import React, { useState, useEffect } from 'react';
import care from '../../../public/image/career.jpg'; // Image path remains the same

export const AnimateHorzCareez = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate translateX based on scroll position
  const translateX = scrollPosition; // Adjust this calculation if needed

  const backgroundImageStyle = {
    backgroundImage: `url(${care.src})`,
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute', // Absolute to ensure it covers the whole container
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the RGBA value to control the transparency
    zIndex: 1, // Place the overlay above the background image
  };

  const contentStyle = {
    position: 'absolute', // Absolute positioning to place the content within the container
    bottom: '300px', // Adjust as needed
    left: '50%',
    transform: 'translateX(-50%)', // Center horizontally
    width: '100%',
    color: '#fff', // Ensure text is visible on top of the overlay
    whiteSpace: 'nowrap', // Prevent text from wrapping
    overflow: 'hidden', // Hide overflow text if the container size is smaller
    textAlign: 'center', // Center text within its container
    zIndex: 2, // Ensure text is on top of the overlay
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'> {/* Full viewport height */}
      <div style={backgroundImageStyle}></div> {/* Background image */}
      <div style={overlayStyle}></div> {/* Overlay */}
      <div style={contentStyle}>
        <h1 
          className="text-8xl font-bold"
          style={{ 
            transform: `translateX(-${translateX}px)`, 
            transition: 'transform 0.2s ease-out',
            whiteSpace: 'nowrap', // Prevent text from wrapping
          }}
        >
          career
        </h1>
      </div>
    </div>
  );
};
