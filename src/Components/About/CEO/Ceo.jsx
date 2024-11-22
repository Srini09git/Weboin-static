'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ceo = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <div className="relative bg-cover bg-center h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://as1.ftcdn.net/v2/jpg/03/08/94/88/1000_F_308948872_JEUvfv5acMTa93v3AqJnrDPHEYdmidXs.jpg"
          alt="Background image"
          className="w-full h-full  oject-top "
        />
      </div>
  
      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-30 z-10"></div> */}
  
      <div className="relative px-4 py-24 flex flex-col justify-end items-start z-20 h-full">
        <div className="text-gray-100 max-w-7xl space-y-5">
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-bold"
          >
            Saravanan<br /> Founder & CEO
          </h1>
        
        </div>
  
        {/* Employees button */}
     

        <div className="absolute right-5 lg:bottom-20 bottom-16 z-20 py-0 ">
        <a className="text-black hover:text-sky-200 lg:px-6 lg:py-3 px-4 py-2 lg:rounded-xl rounded-lg font-medium">
          Employees
        </a>
        </div>
      </div>

      {/* Bottom red line */}
      <div className="absolute pb-5 bottom-4 left-0 w-full border-t-4 border-white
       lg:bottom-8 lg:left-0 lg:w-full 2xl:bottom-18 2xl:left-0 2xl:w-screen"></div>
   



    </div>
    
  );
};

export default Ceo;





