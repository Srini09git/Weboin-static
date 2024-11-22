"use client";
import { useEffect, useState } from "react";
import React from "react";
import { motion, animate, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const Infitescroll = () => {
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls?.stop;
  }, [xTranslation, width]);

  const images = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    

  ];
  return (
    <div className="pb-16 bg-sky-500">
      <div className="relative flex items-center justify-center w-full max-w-md p-2 mx-auto overflow-hidden border-4 border-transparent border-black rounded-full whitespace-nowrap sm:max-w-lg md:max-w-xl lg:max-w-6xl">
        <div className="inline-flex items-center gap-10 mx-auto mt-2 lg:justify-center md:justify-around">
          <main className="py-5">
            <motion.div
              className="absolute left-0 flex gap-24 top-2 "
              style={{ x: xTranslation }}
              ref={ref}
            >
              {[...images, ...images].map((item, i) => (
                <div className="flex items-center justify-center w-[90px] h-[90px]  " key={i}>
                  <img src={item} />
                </div>
              ))}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Infitescroll;
