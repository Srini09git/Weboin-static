import React from "react";
import { BackgroundBeams } from "../NewHomez/BackgroundBeams";

export function MainHome() {
  return (
    (<BackgroundBeams>
      <h2
        className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?<br/>{" "}
        <div
          className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            
         
          <div
            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className=" block">Exploding beams.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeams>)
  );
}
