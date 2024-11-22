"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import videpweb from "../../../../public/Video/Weboindmvideo.mp4";

function VideoSection() {
    const videoRef = useRef(null);
    const [bgColor, setBgColor] = useState('linear-gradient(to bottom, #ffffff, #ffffff)'); // Initialize with white color for video background
    const [containerBgColor, setContainerBgColor] = useState('linear-gradient(to bottom, #ffffff, #ffffff)'); // Initialize with white gradient
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });

    useEffect(() => {
        // Automatically play the video when the component is mounted
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.40;
        }
    }, []);

    useEffect(() => {
        // Determine background color based on scroll position
        if (inView) {
            // When in view, keep background gradient from white to purple
            controls.start({
                scale: 1,
                transition: { duration: 0.8 },
            });
            setBgColor('linear-gradient(to bottom, #ffffff, #ffffff)'); // White color for video background
            setContainerBgColor('linear-gradient(to bottom, #ffffff, #C084FC)'); // Gradient from white to purple
        } else {
            // When out of view, scale down and change background gradient to purple
            controls.start({
                scale: 0.7,
                transition: { duration: 0.8 },
            });
            setBgColor('linear-gradient(to bottom, #ffffff, #ffffff)'); // Ensure video background remains purple
            setContainerBgColor('linear-gradient(to bottom, #ffffff, #C084FC)'); // Solid purple gradient
        }
    }, [inView, controls]);

    return (
        <div
            className={`relative flex flex-col items-center justify-center lg:min-h-fit mt-0`} // Remove dynamic bg-color class here
            style={{ 
                width: '100%', 
                margin: 0, 
                background: containerBgColor, // Apply gradient background
                paddingTop: '4rem', // Adjust padding to fit your design
                paddingBottom: '4rem', // Adjust padding to fit your design
            }}
        >
            <div ref={ref} className="relative w-full h-full mx-0 px-0">
                <motion.div
                    className="relative overflow-hidden rounded-lg shadow-md w-full h-full"
                    animate={controls}
                    style={{
                        overflow: 'hidden',
                        position: 'relative',
                        backgroundColor: bgColor, // Directly use state for video background color
                    }}
                >
                    <video ref={videoRef} autoPlay loop muted className="w-full h-screen object-cover">
                        <source src={videpweb} type="video/mp4" />
                    </video>
                </motion.div>

                <div className="absolute inset-0 z-10 flex flex-col md:flex-row justify-between items-center p-2 sm:p-2 md:p-4 lg:p-8 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2 md:gap-4">
                        {/* Your content here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoSection;
