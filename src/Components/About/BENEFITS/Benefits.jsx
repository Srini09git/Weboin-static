'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import bg1 from '../../../../public/AboutImg/ima.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
// Define hover colors and their brighter versions
const hoverColors = [
  '#bfdbfe', // blue
  '#fecaca', // red
  '#f5deb3', // yellow
  '#d1fae5', // green
  '#e9d5ff', // purple
  '#fbcfe8', // pink
];
 
const brighterColors = [
  '#9fc7fc', // brighter blue
  '#fcc2c2', // brighter red
  '#fccd74', // brighter yellow
  '#7cfca8', // brighter green
  '#d4adff', // brighter purple
  '#ff96b6', // brighter pink
];
 
const benefits = [
  {
    title: "Increased Efficiency",
    description: "Streamline your workflow and reduce manual tasks with our integrated tools.",
  },
  {
    title: "Better Collaboration",
    description: "Enhance team collaboration with real-time updates and shared resources.",
  },
  {
    title: "Scalable Solutions",
    description: "Easily scale your operations as your business grows with our flexible platform.",
  },
  {
    title: "Increased Efficiency",
    description: "Streamline your workflow and reduce manual tasks with our integrated tools.",
  },
  {
    title: "Better Collaboration",
    description: "Enhance team collaboration with real-time updates and shared resources.",
  },
  {
    title: "Scalable Solutions",
    description: "Easily scale your operations as your business grows with our flexible platform.",
  },
];
 
const BenefitCard = ({ index, benefit }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
 
  const hoverColor = hoverColors[index % hoverColors.length];
  const brighterColor = brighterColors[index % brighterColors.length];
 
  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const isInViewport =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth);
 
        setIsVisible(isInViewport);
      }
    };
 
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
 
    // Set initial screen size
    handleResize();
 
    if (window.innerWidth < 768) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on mount
    }
 
    window.addEventListener('resize', handleResize);
 
    return () => {
      if (window.innerWidth < 768) {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  const currentColor = isMobile && isVisible ? hoverColor : 'white';
  const numberBgColor = isMobile ? hoverColor : brighterColor;
 
  return (
    <div
      ref={cardRef}
      className={`p-6 bg-white rounded-lg transition-transform duration-300 ease-in-out ${
        isMobile ? '' : 'hover:scale-105'
      }`}
      style={{
        backgroundColor: currentColor,
        transition: 'background-color 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => {
        if (!isMobile) {
          e.currentTarget.style.backgroundColor = hoverColor;
          e.currentTarget.querySelector('.number-bg').style.backgroundColor = hoverColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!isMobile) {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.querySelector('.number-bg').style.backgroundColor = brighterColor;
        }
      }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div
          className="number-bg font-semibold text-lg flex-shrink-0 text-white rounded-full h-10 w-10 flex items-center justify-center"
          style={{ backgroundColor: numberBgColor }}
        >
          {index + 1}
        </div>
        <h3 className="text-black text-lg font-semibold">{benefit.title}</h3>
      </div>
      <p className="text-gray-600">{benefit.description}</p>
    </div>
  );
};
 
const Benefits = () => {
  useEffect(() => {
    AOS.init({
        duration: 1200,
    });
}, []);

  return (
    <div className="w-auto h-auto max-w-full">
      <section className="w-full bg-white mx-auto p-10 py-24">
        <div className="flex items-start flex-col mb-4">
          <div  data-aos="fade-right"
                data-aos-delay="80" 
                data-aos-duration='1200'
                className="hover:bg-green-400 inline-block px-4 py-2 text-sm font-semibold text-green-700 rounded-2xl bg-green-200 mb-2">
            <h1>HOW IT WORKS</h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h2  data-aos="fade-up"
                  data-aos-delay="150" 
                  className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold mb-4">
              Gain more<span className='text-orange-600'> insight into <br/>how people</span> use your
            </h2>
            <p  data-aos="fade-up"
                data-aos-delay="150" 
                className="pt-5 text-base md:text-base lg:text-xl xl:text-xl 2xl:text-3xl pr-10 2xl:pr-10 text-gray-600">
              With our integrated CRM, project management, collaboration, and invoicing capabilities,
              you can manage your business in one secure platform.
            </p>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src={bg1}
              alt="Video thumbnail"
              className="rounded-3xl"
              layout="responsive"
              width={640}
              height={360}
            />
          </div>
        </div>
      </section>
 
      <section className="w-full bg-white mx-auto p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold 2xl:text-6xl">Benefits of Using Our Platform</h2>
          <p className="text-gray-600 2xl:text-2xl mt-4">
            Our platform provides numerous benefits to help you manage your business effectively and efficiently.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 2xl:text-2xl">
          
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} index={index} benefit={benefit} />
          ))}
          
        </div>
      </section>
    </div>
  );
};
 
export default Benefits;
 