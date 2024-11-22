"use client";
import Image from 'next/image';
import abtx from '../../../../public/AboutImg/abouti.jpg';
import arrow from '../../../../public/BGD/Arrowz/Arrow1.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutcontentX = () => {
  return (
    <div className="bg-gray-200 text-white pt-8  px-4 pb-8 sm:pt-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-lg sm:text-4xl text-center md:4xl lg:4xl font-semibold leading-6 text-gray-900 uppercase mb-8 sm:mb-28">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="relative space-y-4 sm:space-y-6 px-4 sm:px-6">
            <p className="text-gray-600 text-sm sm:text-base w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera. Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera...
              Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera.  Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera...

            </p>
            <div className="relative w-full h-80 md:h-96 group">
              <Image src={abtx} alt="Project 1" layout="fill" objectFit="cover" className="rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-60 " />
              {/* <div className="absolute inset-0 flex items-center top-52 ml-10 justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="bg-black bg-opacity-90 p-4 rounded-lg font-semibold text-white">
                  Project 1 Description
                </div>
              </div> */}
            </div>
          </div>
          <div className="relative space-y-4 sm:space-y-6 flex flex-col items-center">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="relative w-full h-80 md:h-96 group">
              <Image src={abtx} alt="Project 2" layout="fill" objectFit="cover" className="rounded-lg transition-opacity duration-300 ease-in-out group-hover:opacity-60" />
              {/* <div className="absolute inset-0 flex items-center top-52 ml-10 justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="bg-black bg-opacity-90 p-4 rounded-lg font-semibold text-white">
                  Project 2 Description
                </div>
              </div> */}
            </div>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="text-gray-600 text-sm sm:text-base w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera. Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera...
              Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera.  Lorem ipsum dolor sit amet consectetur adipisicing elit eros nullam inceptos placera...

            </p>
            <div className="text-xl sm:text-2xl md:text-5xl font-bold text-center text-black">Want to See More Projects</div>
            <Image data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100" src={arrow} alt="Project 1" className='h-40 w-64 mt-4' style={{ transform: 'rotate(180deg)' }}  />
          </div>
        </div>


      </div>
    </div>
  );
};

export default AboutcontentX;