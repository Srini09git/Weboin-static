'use client';
import { useState } from 'react';

const GetinTouch = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className='bg-violet-200 w-full h-62 sm:h-20 md:h-60 lg:h-60 xl:h-60 md:flex lg:flex xl:flex'>
            <div className='flex flex-col w-5/5 md:w-3.5/5 pl-0 sm:pl-10 md:pl-5  lg:pl-20  xl:pl-40 py-0 md:py-10  lg:py-10  xl:py-10 '>
                <h1 className='text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl text-violet-800 pt-6 lg:pt-5 md:pt-6 pl-1 md:pl-3 font-bold'>Want to talk strategy & Digital Marketing</h1>
                <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-4xl py-4 pl-1.5 md:pl-3 lg:pl-4'>Lets interface</h1>
            </div>
            <div className='content-center  xl:w-1/5 xl:ml-28'>
            <button
      className={`relative px-5 py-4 bg-yellow-400 text-black border-2 rounded-full font-roboto text-sm font-light overflow-hidden transition-transform duration-200 ease-in-out transform ${
        isHovered ? 'scale-105 border-transparent text-indigo-600' : 'border-yellow-500'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: 0 }}
    >
      <span
        className={`absolute inset-0 bg-white rounded-full transition-transform duration-200 ease-out transform ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ transformOrigin: 'bottom', zIndex: -1 }}
      ></span>
      Get in GetinTouch
    </button>
            </div>
        </div>
    )
}

export default GetinTouch
