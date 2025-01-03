"use client"
import { useState } from "react";
import Image from "next/image";
import images from '../../../../public/ServiceImage/Business Website Development.jpg'
import images2 from '../../../../public/ServiceImage/DigitalMarketing.jpg'

import { RiDoubleQuotesL } from "react-icons/ri";
const testimonials = [
  {
    id: 1,
    image:images, // Replace with your image path
    quote:
      "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
    name: "Yacob Sudarmaji",
    role: "Product Manager, XYZ Tech",
  },
  {
    id: 2,
    image: images2, // Replace with your image path
    quote:
      "Their team was instrumental in delivering exactly what we needed for our growth.",
    name: "Anita Rao",
    role: "CEO, Alpha Corp",
  },
  {
    id: 3,
    image: images, // Replace with your image path
    quote:
      "Professional, timely, and highly skilled — they exceeded our expectations!",
    name: "Michael Tan",
    role: "CTO, Beta Innovations",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-evenly items-center m-auto flex-col lg:flex-row">
        <h2 className="text-4xl font-semibold text-gray-800  mb-12 text-center px-5 md:text-6xl lg:w-1/2 lg:text-left lg:text-7xl ">
          Our <span className="text-blue-500 font-serif">happy</span> clients say about us
        </h2>
        <p className="  text-gray-500 text-center mb-12 px-5 lg:w-1/2 lg:text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, nihil tempora autem aliquam repellendus saepe doloribus repudiandae vitae sint magni beatae debitis quisquam eveniet? Facere odit aut quod sit praesentium.</p>
        </div>



        <div className=" p-8 rounded-lg mx-auto ">
          <div className="flex flex-col md:flex-row md:gap-10  md:justify-center md:items-center ">
            {/* Image */}
           
            <div className="flex-shrink-0 hidden md:block self-end md:w-1/2 md:h-auto md:rounded-lg overflow-hidden">
  <Image
    className="w-full h-full object-cover"
    src={testimonials[currentIndex].image}
    alt={testimonials[currentIndex].name}
    width={1000}
    height={1000}
  />
</div>


            {/* Text Content */}
            <div className="text-gray-600 m-auto flex-col items-center justify-center">
            <RiDoubleQuotesL className="hidden md:inline-block text-8xl opacity-10"/>
              <p className="text-xl font-light italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className=" flex justify-between items-center">
                <div>
              <p className="mt-4 font-semibold text-gray-800">
                — {testimonials[currentIndex].name}
              </p>
              
              <p className="text-gray-500 ">
                {testimonials[currentIndex].role}</p>
                </div>
                    <div className="flex-shrink-0 w-10  h-10 rounded-full md:hidden overflow-hidden">
                    <Image
                    className="w-full h-full object-cover"
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={1000}
                    height={1000}/>
                    </div>
                    </div>
            </div>
          </div>
        </div>




        {/* Dots for navigation */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-1  ${
                index === currentIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
