"use client";
import React from 'react';
import Image from 'next/image';
import bg1 from '../../../../public/ServiceImage/branding.jpg';

const HomeSecAbout = () => {
  return (
    <div className='w-auto flex justify-center bg-gray-900 py-10 rounded-3xl'>
      <div className='text-white w-6/12 flex flex-col gap-6'>
        <h1 className='text-lg bg-gray-800 rounded-full w-28 text-center p-1 rounded-bl-none'>Welcome</h1>
        <h1 className='text-6xl font-black'>Let&rsquo;s make your product a success</h1>
        <p className='text-xl text-gray-300'>
          Crator is your partner in digital innovation. We fuse strategic thinking with standout design and development to deliver uniquely tailored solutions.
        </p>
        <div className='flex gap-5'>
          <button className='bg-white text-gray-800 font-bold px-5 py-3 rounded-full'>Let&apos;s get started</button>
          <button className=''>Learn more</button>
        </div>
      </div>
      <div>
        <Image className='w-[31rem] h-[22rem] rounded-3xl' src={bg1} alt='Branding background' />
      </div>
    </div>
  );
};

export default HomeSecAbout;
