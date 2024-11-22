'use client';
import React from 'react';

const AnimatedTextGradient = () => {
    const containerStyle = {
        padding: '1.25rem',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textStyle = {
        color: 'white',
        fontWeight: '900',
        fontSize: '9rem',
        textAlign: 'center',
        background: 'linear-gradient(-45deg, #aaee52, #3ce7de, #bf48e7, #e63682)',
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'gradient 5s linear infinite',
    };

    const linkContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.375rem 1rem',
        borderRadius: '9999px',
        fontFamily: 'monospace',
        backgroundColor: '#4c1d95', // violet-950
        color: 'white',
        backdropFilter: 'blur(8px)',
        border: '1px solid #7c3aed', // violet-600
        width: 'min-content',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontSize: '0.875rem',
        transition: 'transform 0.2s',
        cursor: 'pointer',
    };

    const svgStyle = {
        width: '18px',
        height: '18px',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
    };

    const keyframesStyle = `
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      25% { background-position: 25% 25%; }
      50% { background-position: 50% 50%; }
      75% { background-position: 75% 75%; }
      100% { background-position: 0% 50%; }
    }
  `;

    return (
        <div>
            <style>
                {keyframesStyle}
            </style>
            <main style={containerStyle}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={textStyle}>
                        a long
                        <br />
                        journey
                    </h1>
                    <div>
                        <a
                            href="https://www.instagram.com/untitleddev25/"
                            style={linkContainerStyle}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={svgStyle}
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <span>@untitled_dev</span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AnimatedTextGradient;
