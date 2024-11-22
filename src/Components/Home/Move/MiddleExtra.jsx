"use client";
import React, { useState, useRef, useEffect } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import vision from "../../../../public/image/vision.jpg";
import work from "../../../../public/image/work.jpg";
import wrist from "../../../../public/image/wrist watch.jpg";
import shoe from "../../../../public/image/shoe.jpg";
import Image from "next/image";

const MiddleExtra = () => {
  const details = [
    {
      icon: WorkIcon,
      title: "Job Opportunities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    },
    {
      icon: SearchIcon,
      title: "Search",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    },
    {
      icon: MenuBookIcon,
      title: "Resources",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    },
    {
      icon: SecurityIcon,
      title: "Trust",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis accusantium natus temporibus!",
    },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex lg:flex-row px-14 my-14 md:aspect-[2/1] md:flex text-white">
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-9 md:h-full md:w-full md:place-items-center md:gap-4 p-4 ">
        <div className="relative h-full w-full col-start-1 col-end-2 row-start-1 row-end-6 flex items-end">
          <Image
            src={wrist}
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
          />
        <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>

        <div className="relative flex flex-col p-12 xl:p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-10">
             <div className="text-[16px] sm:text-[16px]">HI</div>
              <div className="bg-white h-[0.5px] w-full"></div>
              <div className="text-[16px] sm:text-[16px]">
               Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
               labore et aliqua.
              </div>
            </div>
  
        </div>

        <div className="relative h-full w-full col-start-2 col-end-3 row-start-1 row-end-5 flex items-end">
          
        <Image
            src={shoe}
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
          />
    <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>

          <div className="relative flex flex-col xl:p-12 p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-10 ">
            <div className="text-[16px] sm:text-[16px]">HI</div>
            <div className="bg-white h-[0.5px] w-full "></div>
            <div className="text-[16px] sm:text-[16px]">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et aliqua.
            </div>
          </div>
        </div>
        <div className="relative h-full w-full col-start-1 col-end-2 row-start-6 row-end-10 flex items-end">
        <Image
            src={work}
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
          />
       <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>

          <div className="flex flex-col xl:p-12 p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-10 ">
            <h1 className="text-[16px] sm:text-[16px] text-gray-200">HI</h1>
            <p className="bg-white h-[0.5px] w-full "></p>
            <p className="text-[16px] sm:text-[16px] text-gray-200">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et aliqu.
            </p>
          </div>
        </div>
        <div className="relative h-full w-full col-start-2 col-end-3 row-start-5 row-end-10 flex items-end">
          
        <Image
            src={vision}
            className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
          />
                    <div className="bg-black absolute h-full w-full bg-opacity-40 rounded-[20px] z- 10 transition-all duration-300 ease-in-out hover:bg-black hover:bg-opacity-80"></div>

          <div className="flex flex-col xl:p-12 p-12 sm:p-8 md:p-5 w-full gap-2 lg:gap-4 z-0 ">
            <div className="text-[16px] sm:text-[16px] hover:text-[18px]">HI</div>
            <div className="bg-white h-[0.5px] w-full "></div>
            <div className="text-[16px] sm:text-[16px]">
              Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et aliqua.
            </div>
          </div>
        </div>
      </div>
      <div className="flex  flex-col w-full p-8">
        <div className="sticky top-0  w-full">
          <div className="w-full text-[18px] text-black">
            <h1 className="text-4xl md:lg:text-6xl font-bold">Our Philosophy</h1>
         
            <p className="pt-10">
  Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque
  consequat diam ac vulputate convallis. Quisque sit amet pretium
  nulla. Proin volutpat nibh pellentesque elementum tincidunt. Ut
  aliquam arcu vel augue lobortis tempor cras ultrices tortor et
  consequat est.
</p>

<p className="pt-4">
  Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque
  consequat diam ac vulputate convallis. Quisque sit amet pretium
  nulla. Proin volutpat nibh pellentesque elementum tincidunt. Ut
  aliquam arcu vel augue lobortis tempor cras ultrices tortor et
  consequat est.
</p>

           
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiddleExtra;
