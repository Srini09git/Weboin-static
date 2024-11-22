"use client";
import React from "react";
import Spotlight from "./SpotlightProps";

export function SpotlightPreview() {
  return (
      <div className=" max-h-screen w-full rounded-md flex md:items-center md:justify-center bg-white/[0.96] antialiased bg-grid-black/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="gray"
      />

      <div className="px-10 max-w-7xl mx-auto absolute z-10 w-full text-center">
        <h1
          className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-500 to-gray-900 bg-opacity-50"
        >
          Spotlight <br /> is the new trend.
        </h1>
        <p
          className="mt-4 font-normal text-base text-neutral-900 max-w-lg mx-auto"
        >
          Spotlight effect is a great way to draw attention to a specific part of the page. 
          Here, we are drawing the attention towards the text section of the page. 
          I don&apos;t know why but I&apos;m running out of copy.
        </p>
      </div>
    </div>
  );
}
