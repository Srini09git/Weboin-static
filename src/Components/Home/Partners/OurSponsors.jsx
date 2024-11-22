"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
 
 
const OurSponsors = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []); // Added dependency array to ensure AOS only initializes once.
 
    return (
        <div className="bg-sky-500">
            <div className="mx-auto py-20 overflow-x-hidden overflow-y-hidden md:overflow-x-hidden md:overflow-y-hidden">
                <div className="flex flex-col justify-center">
                    <section className="flex items-center mb-10 py-10 overflow-x-hidden overflow-y-hidden">
                        <div className="flex items-center md:justify-center lg:justify-start w-full  lg:w-2/5 max-w-screen-lg">
                        {/* Left Line */}
                        <div className="border-t-2 border-black flex-grow mr-2 w-full sm:mr-0"></div>
 
                        {/* Text Container */}
                        <div className="relative flex items-center justify-center mx-5">
                            <h1 className="relative text-2xl md:text-6xl font-semibold text-black tracking-wide whitespace-nowrap">
                            Our Sponcers
                            </h1>
                        </div>
 
                        {/* Right Line */}
                        <div className="border-t-2 border-black flex-grow ml-2 w-full lg:hidden sm:ml-0"></div>
                        </div>
                    </section>
 
                    <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="text-left font-bold sm:text-3xl w-full mt-2 lg:text-7xl text-white mx-6 px-10 py-8"
                    >
                        We design, build and ship  world-class digital products for forward-thinking brands.
                        We design, build and ship  world-class digital products for forward-thinking brands.
                    </p>
                </div>
            </div>
        </div>
    );
};
 
export default OurSponsors;
 
 
