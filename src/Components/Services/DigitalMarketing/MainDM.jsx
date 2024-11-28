"use client"
import React, {useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const textParallaxData = [
  
  {
    imgUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Collaborate",
    heading: "Digital Innovation Partner",
    contentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    contentParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
    ],
    buttonText: "Learn more"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Marketing",
    heading: "Social Media Marketing",
    contentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    contentParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
    ],
    buttonText: "Learn more"
  },
  {
    imgUrl: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    subheading: "Management",
    heading: "Social Media Management",
    contentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    contentParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
    ],
    buttonText: "Learn more"
  }
];

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - 24px)`,
        top: 12,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, paragraphs, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4 text-xl text-neutral-600 md:text-2xl">
          {paragraph}
        </p>
      ))}
      {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        {buttonText} <FiArrowUpRight className="inline" />
      </button> */}
      <button
      className={`relative px-5 py-4 bg-yellow-400 text-black border-2 rounded-full font-roboto text-sm font-light overflow-hidden transition-transform duration-200 ease-in-out transform ${
        isHovered ? 'scale-105 border-transparent text-indigo-600' : 'border-yellow-500'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: 0 }}
    >
      <span
        className={`absolute inset-0 bg-white rounded-full transition-transform duration-200 ease-out transform ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ transformOrigin: 'bottom', zIndex: -1 }}
      ></span>
       {buttonText} <FiArrowUpRight className="inline"/>
    </button>
    </div>
  </div>
);
};

const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      {textParallaxData.map((content, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={content.imgUrl}
          subheading={content.subheading}
          heading={content.heading}
        >
          <ExampleContent
            title={content.contentTitle}
            paragraphs={content.contentParagraphs}
            buttonText={content.buttonText}
          />
        </TextParallaxContent>
      ))}
    </div>
  );
};

export default TextParallaxContentExample;