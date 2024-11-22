'use client';

import { useState } from 'react';
import Image from 'next/image';
import aboutImage1 from '../../../../public/AboutImg/aboee.avif';
import about from '../../../../public/AboutImg/aca.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutContentz = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="grid grid-cols-1 bg-white md:grid-cols-3 gap-8 items-center px-4 md:px-8 lg:px-16 py-8 md:py-16  text-black">

      <div>
        <div className="mb-4">
          <h3 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="text-xs md:text-sm lg:text-base uppercase tracking-widest text-gray-700">About Company</h3>
        </div>
        <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="text-4xl lg:text-5xl md:text-2xl font-bold leading-tight mb-4">
          We are a
          <span className='text-orange-600'> top Digital agency</span>
          <br />
          in the world.
        </h1>
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          <button

            className={`relative px-3 py-2 text-sm bg-yellow-400 text-black border-2 rounded-full font-roboto font-light overflow-hidden  transform ${isHovered ? 'scale-105 border-transparent text-black' : 'border-black'
              }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ zIndex: 0 }}
          >
            <span
              className={`absolute inset-0 bg-slate-50 rounded-full transition-transform duration-200 ease-out transform ${isHovered ? 'translate-y-0' : 'translate-y-full'
                }`}
              style={{ transformOrigin: 'bottom', zIndex: -1 }}
            ></span>
            Get in Touch
          </button>
        </div>
      </div>


      <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" className=" lg:pl-8 md:pl-16">
        <Image src={aboutImage1} alt="Office image" className="w-full h-auto rounded-lg md:w-96 lg:w-full" />
        <div className="mt-8">
          <p className="text-gray-600 w-full md:w-72 lg:w-96">
            Lorem ipsum dolor sit amet consectetur adipiscing elit viverra purus senectus sapien habitant rutrum himenaeos curabitur posuere congue ac non eu odio tempor placerat id.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="mt-10 md:mt-16 lg:pl-8 xl:pl-28 md:pl-16 sm:justify-center xl:w-full">
        <p className="text-gray-600 w-full md:w-72 lg:w-64 pb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi atque nostrum optio vitae sit enim deleniti voluptatum, sint ipsa culpa aliquid nobis debitis tempore repudiandae officiis modi hic perspiciatis porro!</p>
        <Image src={about} alt="Office image" className="w-full h-auto mg:h-96 mg:w-64 lg:h-80 lg:w-64  rounded-lg" />
      </div>
    </div>
  );
};

export default AboutContentz;
