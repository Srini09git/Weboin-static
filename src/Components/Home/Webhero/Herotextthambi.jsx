"use client";

import Image from "next/image";
import herobackgroundleft from "../../../../public/HeroBackground/olulaleft.png";
import herobackgroundright from "../../../../public/HeroBackground/olularight.png";
import herocard1 from "../../../../public/HeroCards/Group 18.png";
import herocard2 from "../../../../public/HeroCards/Group 19.png";
import herocard3 from "../../../../public/HeroCards/Group 20.png";

// herocard
import herocard2Main from "../../../../public/HeroCards/CenterMain.png";
import herocard2OOutline from "../../../../public/HeroCards/GlassLayer.png";

export const Herotextthambi = () => {
  return (
    <div className="relative bg-transparent  overflow-y-hidden overflow-x-hidden w-full h-screen">
      {/* Left Background Image */}
      <div className="absolute top-0 left-0 h-screen overflow-y-hidden overflow-x-hidden">
        <img src={herobackgroundleft.src} alt="ola" className="  h-full" />
      </div>

      {/* Right Background Image */}
      <div className="absolute top-0 right-0  h-screen overflow-y-hidden overflow-x-hidden ">
        <img src={herobackgroundright.src} alt="ola" className="  h-full" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center  h-full">
        <div className="overflow-hidden">
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center mt-8 font-black sm:text-3xl lg:text-7xl text-black mx-6 py-8"
          >
            CONNECTING BRANDS
            <br />
            WITH PEOPLE
          </p>
          <p className="text-center sm:text-xl   text-black mx-6 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Maxime ducimus quas eos officiis nemo, beatae modi adipisci
            tempora quos,
          </p>
        </div>

        {/* Button Section */}
        <div className="group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
          <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
            Our Work
          </span>
          <div className="flex gap-2 text-white bg-green-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
            <span>Our Work</span>
          </div>
        </div>
        <div className="relative z-20 w-full pt-6 grid grid-cols-2 justify-items-center">
          {/* Card 1 */}
          <img
            src={herocard1.src}
            alt="card1"
            className="w-72 h-auto hover:rotate-12 transform hover:-translate-y-16 duration-300"
          />

          {/* Card 2 (Centered using absolute positioning) */}
          <div className="absolute  mt-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 p-2 h-auto z-0 overflow-hidden ">
            <div className="relative overflow-hidden  hover:bottom-3   rounded-3xl  hover:shadow-lg  duration-300"> 
              <img src={herocard2Main.src} alt="card2" className="p-2 hero-card "
        />
              <img src={herocard2OOutline.src} alt="outline" className="absolute bottom-0 z-30  hover:bottom-3 duration-300 "  />
            </div>
          </div>

          {/* Card 3 */}
          <img 
            src={herocard3.src}
            alt="card3"
            className="w-72 h-auto hover:-rotate-12 transform hover:-translate-y-16 duration-300"
          />
        </div>
      </div>
    </div>
  );
};
