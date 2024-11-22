"use client";
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import bg1 from '../../../../public/BGD/bgg.webp';

const OurHistory = () => {
  const [historyData, setHistoryData] = useState([
    {
      year: 2013,
      heading: "Founded",
      para: "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
      img: bg1
    },
    {
      year: 2015,
      heading: "Founded ",
      para: "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
      img: bg1
    },
    {
      year: 2019,
      heading: "Founded",
      para: "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
      img: bg1
    },
    {
      year: 2023,
      heading: "Founded ",
      para: "Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia",
      img: bg1
    },
  ]);

  const [isInView, setIsInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // Unobserve after first trigger
        }
      },
      { threshold: 0.5 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const animationStyle = isInView
    ? {
        transform: 'translateX(0%)',
        transition: 'transform 1.5s ease-in-out',
        animation: 'slideInFromRight 1.5s ease-in-out forwards',
      }
    : { transform: 'translateX(100%)' };

  const slideInFromRightKeyframes = `
    @keyframes slideInFromRight {
      0% { transform: translateX(100%); }
      70% { transform: translateX(-10%); }
      100% { transform: translateX(0%); }
    }
  `;

  return (
    <div className="bg-zinc-100 min-h-screen py-3 lg:py-10">
      <style>
        {slideInFromRightKeyframes}
      </style>
      <div
        className="text-center my-10 space-y-7 px-4 md:px-0"
        ref={targetRef}
      >
        <h1
          className="lg:text-3xl font-bold text-lg text-blue-600 pt-5"
          // style={animationStyle}
        >
          OUR HISTORY
        </h1>
        <h1 className="lg:text-6xl text-gray-800 font-bold text-2xl py-1 mt-0">
          The story of Weboin
        </h1>
        <p className="text-base mx-5 md:mx-14 lg:mx-auto leading-relaxed max-w-4xl text-gray-500">
          Established in 2013, Weboin has continuously evolved alongside the ever-changing landscape of the internet, adapting cutting-edge technologies to deliver impactful digital marketing solutions. With a rich history of pushing boundaries and embracing emerging trends, Weboin remains committed to empowering businesses with the latest in web technology to drive growth and success in the digital sphere.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-5 py-5 min-h-screen w-full">
        {historyData.map((item, index) => (
          <div
            key={index}
            className="flex space-x-6 py-5 items-center justify-between w-full group"
          >
            <div className="flex-1">
              {index % 2 === 0 ? (
                <div className="text-gray-600 text-sm tracking-wider ml-5 md:ml-36 lg:ml-80 xl:ml-80 group-hover:font-bold group-hover:text-2xl group-hover:text-black transition-colors duration-300">
                  {item.year}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="block w-full h-px bg-black"></span>
                  <h1 className="text-base md:text-3xl lg:text-6xl font-bold hidden md:block lg:block group-hover:text-blue-600 transition-colors duration-300">
                    {item.heading}
                  </h1>
                </div>
              )}
            </div>

            <div className="relative w-44 h-28 md:w-72 md:h-48 lg:w-96 lg:h-60 rounded-2xl overflow-hidden transform transition-transform duration-300 group-hover:scale-110">
              <Image
                src={item.img}
                alt={item.heading}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="flex-1">
              {index % 2 === 0 ? (
                <div className="flex items-center space-x-2">
                  <h1 className="text-base md:text-3xl lg:text-6xl font-bold hidden md:block lg:block group-hover:text-blue-600 transition-colors duration-300">
                    {item.heading}
                  </h1>
                  <span className="w-full h-px block bg-black"></span>
                </div>
              ) : (
                <div className="text-gray-600 text-sm tracking-wider lg:ml-0 xl:ml-10 group-hover:font-bold group-hover:text-black group-hover:text-2xl transition-colors duration-300">
                  {item.year}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurHistory;
