"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup"; // Importing CountUp

const MainCountup = () => {
  const items = [
    { number: 1000, title: "Evaluationlore", static: "+", hoverColor: "#cb3404", duration: 0.1 },
    { number: 60, title: "Transparent Pricing", static: "k", hoverColor: "#c8d1d1", duration: 0.1 },
    { number: 120, title: "Quick Payment", static: "K", hoverColor: "#a1c9b8", duration: 0.1 },
    { number: 65, title: "Evaluation", static: "%", hoverColor: "#decf3e", duration: 0.1 },
  ];

  // Animation definitions
  const animationX = {
    hidden: {
      opacity: 0,
      transform: "translate(-10%, 0px) rotate(-10deg)"
    },
    visible: {
      opacity: 1,
      transform: "translate(0px, 0px) rotate(0deg)",
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const animationY = {
    hidden: {
      opacity: 0,
      transform: "translate(10%, 0px) rotate(10deg)"
    },
    visible: {
      opacity: 1,
      transform: "translate(0px, 0px) rotate(0deg)",
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <>
      <section className="flex items-center  my-10 py-10">
        <div className="flex items-center md:justify-center lg:justify-start w-full  lg:w-2/5 max-w-screen-lg">
          {/* Left Line */}
          <div className="border-t-2 border-black flex-grow mr-2 w-full sm:mr-0"></div>

          {/* Text Container */}
          <div className="relative flex items-center justify-center mx-5">
            <h1 className="relative text-2xl md:text-6xl font-semibold text-black tracking-wide whitespace-nowrap">
              Our Success
            </h1>

            {/* Faded Center Text */}
            <h1 className="absolute text-5xl sm:text-7xl md:text-8xl font-light text-gray-500 opacity-10 tracking-wide select-none">

            </h1>
          </div>

          {/* Right Line */}
          <div className="border-t-2 border-black flex-grow ml-2 w-full lg:hidden sm:ml-0"></div>
        </div>
      </section>

      <div
        className="flex justify-center text-center overflow-hidden"
        style={{ minHeight: "150vh" }} // Set minimum height for the main div
      >
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
            {items.map((item, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

              // Select animation based on the index
              const animationVariant = index % 2 === 0 ? animationX : animationY;

              return (
                <motion.div
                  key={item.number}
                  ref={ref}
                  className={`flex flex-col justify-between h-80 md:h-[350px]  p-6 text-white rounded-3xl shadow-lg relative 
                  ${[1, 3, 4].includes(index) ? "md:mt-4" : ""}`} // Adds margin-top to alternate cards
                  style={{
                    // Adjusted height for the cards
                    backgroundColor: "#17181b", // Default card background color
                    transition: "background-color 0.3s ease-in-out", // Smooth transition for background color
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = item.hoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#17181b"; // Revert to default color
                  }}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"} // Animate based on inView
                  variants={animationVariant} // Apply animation based on index
                  transition={{ duration: item.duration }} // Use item-specific duration
                >
                  {/* CountUp Component */}
                  <div className="lg:text-6xl md:text-6xl text-5xl pt-4 pl-4 flex font-bold">
                    {inView && (
                      <CountUp
                        start={0}
                        end={item.number}
                        duration={2} // Duration of the count-up animation
                      />
                    )}
                    <span>{item.static}</span></div>
                  <div className="lg:text-5xl  text-4xl font-black flex pb-4 pr-4 justify-end">{item.title}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCountup;
