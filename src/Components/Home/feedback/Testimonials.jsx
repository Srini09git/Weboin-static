"use client";
import React from "react";
import TestimonialsMain from "./TestimonialsMain";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const tweets = [
  {
    imageSrc: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "Salvador Rose",
    handle: "TCS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "John doe",
    handle: "Infosys",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "@",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Mike tyson",
    handle: "Cisco",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Sia",
    handle: "Wipro",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Cheung",
    handle: "Capgemini",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kendra",
    handle: "CTS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "King",
    handle: "Zoho",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Yoda",
    handle: "Accenture",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Sia",
    handle: "HCL",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Cheung",
    handle: "L&T",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kendra",
    handle: "IBM",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "King",
    handle: "Amazon",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Yoda",
    handle: "Google",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Sia",
    handle: "Microsoft",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Cheung",
    handle: "Flipkart",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kendra",
    handle: "HP",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "King",
    handle: "DHL",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Yoda",
    handle: "TATA Group",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Cheung",
    handle: "TCS",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "",
  },
  {
    imageSrc: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kendra",
    handle: "Capgemini",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    link: "#",
  },
];

const Testimonials = () => {
  return (
      <div>
        <div className="container mx-auto  mt-10 p-4  lg:px-40 ">
          {/* head */}
          <div className=" flex  flex-col   ">
            <h1 className="font-bold text-3xl md:text-5xl">
              Featured creators
            </h1>
            <div className=" flex justify-between items-center ">
              <h3 className="  text-gray-600  text-sm sm:text-lg ">
                Meet our top template creators
              </h3>
              <h3 className="  font-bold font-sans text-sm sm:text-lg   ">
                Browse 9,761 creators
              </h3>
            </div>
          </div>
          {/* section */}
          <div className=" grid  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mt-3 ">
            {[1,2,3,4,5,6,7,8].map((data,index) => {
              return (
                <div  key={index} className="  bg-gray-200  p-4 rounded space-y-10 ">
                  <img
                    src="https://randomuser.me/api/portraits/women/8.jpg"
                    alt="image"
                    className=" rounded-full w-20 "
                  />
                  <div>
                    <h1 className=" text-lg">Clay</h1>
                    <div>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Necessitatibus neque placeat.
                      </p>
                      <p className=" text-gray-500  text-sm">78 Templates</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
  );
};

export default Testimonials;
