import React from "react";
import Processbg from "../../../../public/BGD/girdColourbg.jpg";
import Image from "next/image";
import sprite from "../../../../public/image/sprite.png";
import gear from "../../../../public/image/gear.png";
import arrow from "../../../../public/image/arrow.png";
import girl from "../../../../public/image/girl.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState, useEffect, useRef } from "react";

const OurProcessMain = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
        } else {
          setIsExpanded(false);
        }
      },
      {
        threshold: 1, // Trigger when 50% of the image is visible
      }
    );

    const currentImage = imageRef.current;

    if (currentImage) {
      observer.observe(currentImage);
    }

    return () => {
      if (currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, []);

  return (

    <div className=" flex flex-col w-full items-center space-y-8 h-screen  bg-white ">
      <div className=" m-10 mb-0 flex-col flex justify-start md:flex-row h-full w-full md:justify-center  md:items-end">
        <div className="w-[230px] h-[full] md:-mx-2 md:z-20 flex-col">
          <div className="w-full flex flex-col  justify-end items-end">
            <div className="text-[38px] md:pb-0 pb-5 font-bold leading-none w-full -mr-5">
              Grow with weboin
            </div>
            <div className="md:block hidden w-[150px] h-[150px] object-cover">
              <Image src={sprite}></Image>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="60" className="bg-[#0096c7]  md:w-[230px] md:rounded-br-none md:rounded-t-full rounded-r-full w-[185px] h-[155px] md:h-full    flex-col ">
            <div className="text-start md:text-center h-[150px] w-full md:p-4 p-6 ">
              <span className="font-extrabold	text-[32px] md:text-[48px]">71%</span>
              <br />
              <span className="font-bold text-[17px] md:text-[22px] text-center">
                Saved on licensing fees
              </span>
              <br></br>
              <span className="font-normal text-[12px] md:text-[19px]">
                Big savings for a lifetime
              </span>
            </div>
            <div className="w-full h-full flex items-end justify-center ">
              <Image src={arrow} className="object-cover md:block hidden w-[200px]"></Image>
            </div>
          </div>
        </div>
        <div data-aos="fade-down" data-aos-duration="600" data-aos-delay="80" className="bg-[#48cae4] md:w-[230px] md:h-[400px]  md:rounded-br-none md:rounded-t-full h-[160px] w-[220px] rounded-r-full md:-mx-2 md:z-10 flex flex-col ">
          <div className="text-start md:text-center h-full w-full md:p-4 p-6 ">
            <span className="font-extrabold	 text-[32px] md:text-[48px]">71%</span>
            <br />
            <span className="font-bold text-[17px] md:text-[22px] text-center">
              Saved on licensing fees
            </span>
            <br></br>
            <span className="font-normal text-[12px] md:text-[19px]">
              Big savings for a lifetime
            </span>
          </div>
          <div className="w-full h-full flex items-end justify-center">
            <Image src={gear} className="object-cover h-[100px] w-[100px] md:block hidden"></Image>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="700" data-aos-delay="100" className="bg-[#90e0ef] md:w-[230px] md:h-[500px] md:rounded-br-none md:rounded-t-full h-[145px] w-[290px] rounded-r-full  md:-mx-2 md:z-0 flex flex-col">
          <div className="text-start md:text-center h-full w-full md:p-4 p-6 ">
            <span className="font-extrabold	 text-[32px] md:text-[48px]">71%</span>
            <br />
            <span className="font-bold text-[17px] md:text-[22px] text-center">
              Saved on licensing fees
            </span>
            <br></br>
            <span className="font-normal text-[12px] md:text-[19px]">
              Big savings for a lifetime
            </span>
          </div>
          <div className=" flex items-end justify-center ">
            <Image src={girl} className="w-[170px] object-cover md:block hidden" ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcessMain;
