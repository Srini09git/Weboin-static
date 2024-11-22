'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import lo from '../../../../public/logo/WEBOINBANNER.png.webp';

const AboutCA = () => {
  const [inView, setInView] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (inView) {
      timer = setTimeout(() => setShowImage(true), 500);
    } else {
      setShowImage(false);
    }
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center py-24 hover-container bg-white"
      style={{ backgroundImage: 'url(https://static.wixstatic.com/media/c837a6_d1ecef05ccf2439795e947fcee38ebfaf000.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-4xl mb-4">How it Works</h1>
      <h2 className="text-2xl mb-10 text-gray-600 text-center w-80 sm:w-96 md:w-96 lg:w-96">Meet clics all-in-one solution for efficient marketers</h2>
      <div className="relative flex flex-col items-center space-y-4">
        <img
          src="https://img.icons8.com/?size=100&id=oGAfRIFjUW_o&format=png&color=000000"
          alt="logo"
          className='w-10'
        />
        <h1 className="font-bold text-2xl">Clients</h1>
        <div className="relative w-px h-24">
          <svg width="3" height="100" viewBox="0 0 3 100" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <line
              x1="1.5" y1="0"
              x2="1.5" y2="100"
              stroke="black"
              strokeWidth="3"
              className={`line ${inView ? 'line-1' : ''}`}
            />
          </svg>
        </div>
        <Image
          src={lo}
          alt="Special"
          className={`w-60 h-16 object-cover duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}
        />
        <h1 className={`w-80 text-gray-600 text-center sm:w-96 md:w-96 lg:w-96 text-base weboin ${inView ? 'weboin-animation' : ''}`}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quas? Soluta dolorem ex iure quidem error deserunt voluptas fugit exercitationem incidunt totam earum, aliquam aut doloremque commodi nam impedit fuga. </h1>
        <div className="relative w-px h-24">
          <svg width="3" height="100" viewBox="0 0 3 100" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <line
              x1="1.5" y1="0"
              x2="1.5" y2="100"
              stroke="black"
              strokeWidth="3"
              className={`line ${inView ? 'line-2' : ''}`}
            />
          </svg>
        </div>
        <img
          src="https://static.wixstatic.com/media/c837a6_da61542a97d443ca9005e759ce146f72~mv2.png/v1/fill/w_1461,h_866,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/screen%202.png"
          alt="Example"
          className={`w-10/12 py-4 ${inView ? 'zoom-in-animation' : ''}`}
        />
        <div className="relative w-px h-24">
          <svg width="3" height="100" viewBox="0 0 3 100" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <line
              x1="1.5" y1="0"
              x2="1.5" y2="100"
              stroke="black"
              strokeWidth="3"
              className={`line ${inView ? 'line-3' : ''}`}
            />
          </svg>
        </div>
   
        <h1 className={`font-bold text-2xl text ${inView ? 'text-animation' : ''}`}>Save Money</h1>
        <h1 className={`font-bold text-2xl text ${inView ? 'text-animation' : ''}`}>Time Manage</h1>
        <h1 className={`font-bold text-2xl text ${inView ? 'text-animation' : ''}`}>Lifetime Support</h1>
   
      </div>
      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes zoomIn {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.2);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .line {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
        }

        .line-1 {
          animation: draw 0.5s linear forwards 0s;
        }

        .line-2 {
          animation: draw 0.5s linear forwards 0.9s;
        }

        .line-3 {
          animation: draw 0.5s linear forwards 2.3s;
        }

        .zoom-in-animation {
          animation: zoomIn 1s ease-out forwards;
          animation-delay: 1.5s;
        }

        .weboin {
          opacity: 0;
        }

        .weboin-animation {
          animation: fadeIn 0.5s ease-out forwards; 
          animation-delay: 0.7s;
        }

        .text {
          opacity: 0;
        }
        
        .text-animation {
          animation: fadeIn 1s ease-out forwards;
          animation-delay: 2.9s;
        }
      `}</style>
    </div>
  );
};

export default AboutCA;
