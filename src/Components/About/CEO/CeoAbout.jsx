'use client';
import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CeoAbout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);
    return (
        <div className="flex flex-col items-center justify-center py-20 w- bg-white ">
            <div className="text-center mb-4">
                <p data-aos="fade-up"
                    data-aos-delay="200" className="text-lg md:text-xl lg:text-2xl font-light text-gray-800 ">
                    A freelance creative designer with a love for minimal design, clean
                    typography and well-written code, located in{' '}
                    <span className="font-semibold underline">London</span>
                </p>
            </div>
            <div className="flex items-center justify-center space-x-6">
                <div className="border-4 border-yellow-500  h-24 "></div>
                <span data-aos="fade-up"
                    data-aos-delay="200" className="text-7xl md:text-8xl lg:text-9xl font-bold text-black">25</span>
                <div className="border-4 border-yellow-500  h-24 "></div>
            </div>
            <div className="mt-2 text-center">
                <p data-aos="fade-up"
                    data-aos-delay="200" className="text-lg md:text-xl lg:text-2xl font-light text-gray-800">
                    Years of big experience
                </p>
            </div>
        </div>
    )
}

export default CeoAbout
