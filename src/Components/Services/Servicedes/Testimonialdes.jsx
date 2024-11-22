"use client";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollTrigger from 'react-scroll-trigger';

const Testimonialdes = ({testimonials}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [transitionClass, setTransitionClass] = useState("opacity-100");
  const [TestmonialEntry, setTestmonialEntry] = useState(false);


  useEffect(() => {
    let interval;
    if(TestmonialEntry) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [TestmonialEntry]);

  useEffect(() => {
    setTimeout(() => {
      setTestmonialEntry(true);
    }, 100);
  }, []);
  
  const handleBack = () => {
    setTransitionClass("opacity-0");
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTransitionClass("opacity-100");
    }, 200); // Match the duration of your transition
  };

  const handleNext = () => {
    setTransitionClass("opacity-0");
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setTransitionClass("opacity-100");
    }, 200); // Match the duration of your transition
  };

  return (
    <ScrollTrigger onEnter={() => setTestmonialEntry(true)} onExit={() => setTestmonialEntry(false)}>
    <div className="relative" onClick={() => setTestmonialEntry(!TestmonialEntry)}>
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
          What our customers are
          <br />
          saying
        </h1>
        <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800">
          What our customers are saying
        </h1>
        <div className={`flex flex-col md:flex-row mt-14 transition-opacity duration-300 ${transitionClass}`}>
          {testimonials[activeTestimonial] && (
            <>
              <div className="relative md:w-1/2 w-full xl:h-96 h-80">
                <img
                  src={testimonials[activeTestimonial].imageSrc}
                  alt="image of profile"
                  className="w-full h-full object-cover shadow-lg rounded"
                />
                <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                    alt="commas"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                    {testimonials[activeTestimonial].quote}
                  </h1>
                  <p className="text-base font-medium leading-6 mt-4 text-gray-600">
                    {testimonials[activeTestimonial].text}
                  </p>
                </div>
                <div className="md:mt-0 mt-8">
                  <p className="text-base font-medium leading-4 text-gray-800">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-base leading-4 mt-2 mb-4 text-gray-600">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="flex items-center justify-end mt-8">
          <div className="max-w-fit hover:bg-gray-200 rounded-full flex items-center justify-end gap-4 lg:gap-8 px-3 py-1 lg:px-5 lg:py-2">
          <ArrowBackIcon onClick={handleBack} className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer active:scale-90"/>
          <ArrowForwardIcon onClick={handleNext} className="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer active:scale-90"/>
          </div>
        </div>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default Testimonialdes;
