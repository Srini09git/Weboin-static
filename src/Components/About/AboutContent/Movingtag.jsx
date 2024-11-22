import { Dangerous } from '@mui/icons-material';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MovingTag = () => {
    const text = [
        "Portfolio",
        "Projects",
        "Portfolio",
        "Projects",
        "Portfolio",
        "Projects",
        "Portfolio",
        "Projects",
        "Portfolio",
        "Projects",
        "Portfolio",
        "Projects",
    ];

    return (
        <div className="py-10 bg-sky-500">
            <Marquee loop={0}>
                <div className='flex justify-between gap-2'>
                    {text.map((item, index) => (
                        <Car key={index} text={item} />
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default MovingTag;

const Car = ({ text }) => {
    // Set the link based on the text
    const link = text === "Portfolio" ? "/Portfolio" : "/projects";

    return (
        <div className='flex items-center justify-center gap-4'>
            <div className='h-[50px] w-[50px]'></div>
            <div>
                <a href={link} className="text-white font-bold text-2xl md:text-4xl hover:text-black ">
                    {text}
                </a>
            </div>
            <div className='h-[50px] w-[50px]'></div>
            <div className='h-[50px] w-[50px]'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 511.99998 639.999975"
                    version="1.1"
                    x="0px"
                    y="0px"
                    className="w-full h-full"
                >
                    <g transform="translate(-91.214475,-152.15558)">
                        <path
                            style={{
                                opacity: 0.3,
                                fill: "#000000",
                                fillOpacity: 1,
                                fillRule: "nonzero",
                                stroke: "none",
                                strokeWidth: 0.73258585,
                                strokeLinecap: "square",
                                strokeLinejoin: "miter",
                                strokeMiterlimit: 4,
                                strokeDasharray: "none",
                                strokeDashoffset: 0,
                                strokeOpacity: 1,
                            }}
                            d="m 347.21447,152.15557 c -11.53877,94.18535 -15.35404,153.99237 -37.90039,192.59961 -36.85584,47.9866 -100.73942,52.5569 -218.099617,63.40039 115.457837,13.96998 177.883957,16.99762 214.847667,60.95703 27.61638,38.91551 32.28891,99.11321 41.15234,195.04297 15.05396,-124.41663 17.41252,-187.24556 71.96484,-222.99805 38.7879,-18.73484 96.66682,-22.82442 184.03516,-33.00195 C 494.88125,394.88352 432.02582,391.82942 394.60509,358.73565 362.96315,321.01375 359.58822,258.37717 347.21447,152.15557 Z"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
};