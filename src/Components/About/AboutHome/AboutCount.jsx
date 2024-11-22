"use client";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';


const counts = [
    {
        title: 100,
        description: "In-house & independent",
    },
    {
        title: 13,
        description: "Years crafting digital experiences",
    },
    {
        title: 80,
        description: "Awards from AWA, FWA, and Awwwards",
    },
];


function AboutCount() {
    const [counterState, setCounterState] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="mt-auto lg:text-start text-left w-screen lg:w-full">
                {counts.map(({ title, description }) => (
                   
                    <div  key={title} className="flex flex-col">
                        <div className="mb-4 lg:mb-0 p-2 border-b-2 border-gray-300">
                            <span className="text-3xl lg:text-5xl font-bold">
                                {counterState ? <CountUp start={0} end={title} duration={3.75} /> : title}
                                </span>
                            <p className='mt-2 text-lg text-gray-600'>{description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </ScrollTrigger>

    );
}

export default AboutCount;