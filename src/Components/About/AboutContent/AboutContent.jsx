'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import box1 from '../../../../public/AboutImg/box-B.webp';
import box2 from '../../../../public/AboutImg/box-C.webp';
import box3 from '../../../../public/AboutImg/box-A.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutContent = ({ imageHeight = 'h-[300px]', smImageHeight = 'sm:h-[400px]', mdImageHeight = 'md:h-[600px]' }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="bg-white py-16">
            <div className="flex flex-col lg:flex-row justify-between items-center mx-auto w-full max-w-screen-xl">
                {/* Left Image */}
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className={`lg:w-1/2 w-full ${imageHeight} ${smImageHeight} ${mdImageHeight} p-4 overflow-hidden`}>
                    <div className="relative w-full h-full">
                        <Image
                            src={box3}
                            alt="Office"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className={`lg:w-1/2 w-full ${imageHeight} ${smImageHeight} ${mdImageHeight} grid grid-cols-2 grid-rows-2 gap-4 p-4`}>
                    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className="relative w-full h-full bg-white overflow-hidden border rounded-lg bounce-from-top">
                        <div className="relative w-full h-full">
                            <Image
                                src={box1}
                                alt="Office Desk"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white text-center p-4 sm:p-2 border rounded-lg">
                        <p data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                         className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600">We have 100+ satisfied clients</p>
                        <p data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                         className="text-3xl sm:text-2xl md:text-4xl font-bold pt-3">100 K</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-black text-center text-white p-4 sm:p-2 border rounded-lg">
                        <p data-aos="fade-down"
                        data-aos-delay="100"
                        data-aos-duration="1200" className="text-sm sm:text-base md:text-lg text-gray-300">We helped to get companies with $25M+ funding</p>
                        <p data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                        className="text-3xl sm:text-2xl md:text-4xl font-bold pt-3">25 M+</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className="relative w-full h-full bg-white overflow-hidden border rounded-lg bounce-from-top">
                        <div className="relative w-full h-full">
                            <Image
                                src={box2}
                                alt="Portrait"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes bounceFromTop {
                    0% {
                        transform: translateY(-100%);
                        opacity: 0;
                    }
                    40% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    55% {
                        transform: translateY(-15%);
                    }
                    70% {
                        transform: translateY(0);
                    }
                    85% {
                        transform: translateY(-8%);
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                .bounce-from-top {
                    opacity: 0;
                    transform: translateY(-100%);
                }

                .bounce-from-top[data-aos][data-aos][class*="aos-animate"] {
                    animation: bounceFromTop 1.5s ease-out forwards; /* Increase duration to 2 seconds */
                }
            `}</style>
        </div>
    );
};

export default AboutContent;
