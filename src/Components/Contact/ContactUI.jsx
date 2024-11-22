"use client";
import Image from "next/image";
import { useState } from 'react';
import aboutBgImg2 from "../../../public/BGD/contact img.webp";
import { useRouter } from 'next/navigation';

const ContactUI = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleGetStartedClick = () => {
    // Navigate to the Contacts page and scroll to the Contactinfo section
    router.push('/Contacts#contact-info');
  };

  const contactDeatailsData = [
    {
      para: "Speak To Us",
      number: "9876543210",
      gmail: "contact@weboin.com"
    },
    {
      para: "Speak To Us",
      number: "9876543210",
      gmail: "contact@weboin.com"
    }
  ];

  return (
    <div className="w-full h-auto items-center flex">
      <div className="sm:w-6/12 w-full absolute z-20 text-center sm:text-start flex flex-col gap-6 sm:gap-10 justify-center sm:mx-20 items-center sm:items-start">
        <h1 className="text-4xl sm:text-3xl md:text-6xl lg:text-6xl font-bold text-white sm:py-2">
          Weve got a great feeling about this
        </h1>

        <button
          onClick={handleGetStartedClick}
          className={`relative px-6 py-4 bg-purple-400 text-white hover:text-white font-medium border-2 rounded-full text-sm overflow-hidden transition-transform duration-200 ease-in-out transform ${
            isHovered ? 'scale-105 border-transparent' : 'border-purple-500'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ zIndex: 0 }}
        >
          <span
            className={`absolute inset-0 bg-black rounded-full transition-transform duration-200 ease-out transform ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{ transformOrigin: 'bottom', zIndex: -1 }}
          ></span>
         Lets Get Started
        </button>

        <div className="sm:mt-16 mt-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 font-bold text-sm sm:text-lg text-gray-600">
          {contactDeatailsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <p className="font-semibold text-2xl pb-5 text-sky-500 ">{item.para}</p>
              <p>{item.number}</p>
              <p className="sm:pb-9">{item.gmail}</p>
            </div>
          ))}
        </div>
      </div>

      <Image
        className="w-full h-screen relative scale-x-[-1] inset-0"
        src={aboutBgImg2}
        alt="About Image"
        objectFit="cover"
      />
    </div>
  );
};

export default ContactUI;
