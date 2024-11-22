"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroMainz = () => {
    const [gridSize, setGridSize] = useState(6 * 6); // Default for mobile/tablet

    useEffect(() => {
        const updateGridSize = () => {
            if (window.innerWidth >= 1024) {
                setGridSize(12 * 12); // Larger grid for desktop
            } else if (window.innerWidth >= 768) {
                setGridSize(8 * 8); // Medium grid for tablets
            } else {
                setGridSize(6 * 6); // Smaller grid for mobile
            }
        };

        updateGridSize();
        window.addEventListener('resize', updateGridSize);
        return () => window.removeEventListener('resize', updateGridSize);
    }, []);

    const [glowingItems, setGlowingItems] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newGlowingItems = Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () =>
                Math.floor(Math.random() * gridSize)
            );
            setGlowingItems(newGlowingItems);
        }, 200); // Adjust interval timing as needed

        return () => clearInterval(interval);
    }, [gridSize]);

    return (
        <main className="w-full relative">
            {/* Grid background */}
            <section
                className="w-full min-h-[88vh] lg:h-screen grid"
                style={{
                    gridTemplateColumns: `repeat(${Math.sqrt(gridSize)}, 1fr)`,
                    gridTemplateRows: `repeat(${Math.sqrt(gridSize)}, 1fr)`,
                    gap: '0px', // Ensures no gaps between grid items
                    margin: '0px',
                    padding: '0px',
                    boxSizing: 'border-box',
                    overflow: 'hidden', // Prevent overflow issues
                }}
            >
                {Array.from(Array(gridSize), (_, i) => (
                    <motion.div
                        key={i}
                        whileHover={{
                            scale: 1.05, // Slight scaling on hover
                            backgroundColor: "#ff0000",
                        }}
                        animate={{
                            scale: 1, // Scale back to original on hover out
                            backgroundColor: glowingItems.includes(i)
                                ? "#ff3aed"
                                : "rgb(229 229 229)", // Equivalent to bg-neutral-200
                        }}
                        transition={{
                            duration: 1, // Duration for the glow effect
                            ease: glowingItems.includes(i) ? "easeOut" : "easeInOut",
                        }}
                        className="bg-neutral-200"
                        style={{
                            aspectRatio: '1 / 1', // Ensures a perfect square
                            width: '100%',
                            height: '100%',
                            margin: '0px',
                            padding: '0px',
                            border: 'none',
                            boxSizing: 'border-box', // Prevents any extra space
                        }}
                    />
                ))}
            </section>
            <div className="absolute inset-0 flex flex-col gap-3 sm:gap-5 items-center justify-center z-10 pointer-events-none font-poppins">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-neutral-900 font-black uppercase tracking-tight text-center"
                >
                    Weboin
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-gray-600 w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl text-center tracking-wide"
                >
                    CONNECTING BRANDS
                    WITH PEOPLE
                </motion.p>
            </div>
        </main>
    );
}

export default HeroMainz;
