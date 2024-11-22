"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import mainicon from '../../../../public/W@4x.png';
import Image from 'next/image';

export const Herotext = () => {
    const [animate, setAnimate] = useState(false);
    const [showTextSection, setShowTextSection] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        // Trigger animation class after render
        requestAnimationFrame(() => {
            setAnimate(true);
        });
    }, []);

    // Show text and button section after animation completes
    const handleAnimationEnd = () => {
        setShowTextSection(true);
    };

    return (
        <div className='overflow-x-hidden overflow-y-hidden'>
            {/* Animated Icon Section */}

            <div className=' absolute top-0 right-0 left-auto bottom-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" width="600" height="306" viewBox="0 0 600 306" fill="none">
                    <path opacity="0.2" d="M790 305H465C434.072 305 409 279.928 409 249V203C409 172.072 383.928 147 353 147H57C26.0721 147 1 121.928 1 91V-184" stroke="url(#paint0_linear_325_5164)" stroke-linecap="round"></path>
                    <defs>
                        <linearGradient id="paint0_linear_325_5164" x1="902.121" y1="327.483" x2="125.199" y2="-406.155" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#08072B"></stop>
                            <stop offset="0.805696" stop-color="#08072B" stop-opacity="0.38"></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className=' absolute top-0 right-auto left-0 bottom-auto hidden md:flex'><svg xmlns="http://www.w3.org/2000/svg" width="367" height="285" viewBox="0 0 367 285" fill="none">
                <path opacity="0.2" d="M366.5 -64.5V228C366.5 258.928 341.428 284 310.5 284H-33" stroke="url(#paint0_linear_325_5163)" stroke-linecap="round"></path>
                <defs>
                    <linearGradient id="paint0_linear_325_5163" x1="340" y1="307" x2="363.183" y2="-17.9561" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#08072B"></stop>
                        <stop offset="0.575586" stop-color="#08072B" stop-opacity="0.38"></stop>
                    </linearGradient>
                </defs>
            </svg></div>

            <div
                className={`flex flex-col items-center justify-center mt-10 overflow-x-hidden overflow-y-hidden transition-all duration-300 ${animate ? 'scale-animation' : ''}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <Image className='overflow-x-hidden overflow-y-hidden' src={mainicon.src} width={50} height={50} alt="img" />
                <style jsx>{`
                    @keyframes scaleAndZIndex {
                        0% {
                            transform: translate(0, 20vh) scale(3);
                            z-index: 0;
                        }
                        
                        100% {
                            transform: translate(0, 0) scale(1);
                            z-index: 0;
                        }
                    }

                    .scale-animation {
                        animation: scaleAndZIndex 1.5s ease-in-out forwards;
                    }
                `}</style>
            </div>

            {/* Text Section and Button Section */}
            <div
                className={`transition-opacity duration-500 ${showTextSection ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                {/* Text Section */}
                <div className="flex flex-col items-center justify-center mt-10">
                    <div className="overflow-x-hidden overflow-y-hidden">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-center font-black sm:text-3xl w-full mt-2 lg:text-7xl text-black mx-6 py-8 ml-1"
                        >
                            CONNECTING BRANDS
                            <br />WITH PEOPLE
                        </p>
                    </div>

                    {/* Button Section */}
                    <div className="group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
                        <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                            Our Work
                        </span>
                        <div className="flex gap-2 text-white bg-green-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
                            <span>Our Work</span>
                        </div>
                    </div>
                </div>

                {/* Background Image */}
                <img
                    src="https://assets-global.website-files.com/65941468639544f2f2d67c54/65941468639544f2f2d67cc3_hero-illustration-p-2000.png"
                    alt="Background illustration"
                    className="w-full"
                />
            </div>
        </div>
    );
}; 
