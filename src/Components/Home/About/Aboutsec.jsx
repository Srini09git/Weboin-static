

"use client";
import React, { useEffect } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import bg from '../../../../public/BGD/connecting.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg1 from "../../../../public/BGD/Shapesz/SkyRandom.png";
import bg2 from "../../../../public/BGD/Shapesz/LightOrangeRandom.png";
import Image from 'next/image';

// Icon map to associate JSON keys with MUI icons
const iconMap = {
  "ThumbUpIcon": ThumbUpIcon,
  "TrendingUpIcon": TrendingUpIcon,
  "PublicIcon": PublicIcon,
  "StarIcon": StarIcon,
  "sitForwardIcon": AccessibleForwardIcon,
};

const Aboutsec = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // JSON-like configuration object defined inside the component
  const config1 = {
    "backgroundImage": bg.src,
    "opacity": 0.3,
    "content": {
      "title": "10+ Years of Experience in Digital Marketing & Website Development",
      "description": "Discover the power of Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae esaxime repellendus laboriosam!",
      "highlights": [
        { "icon": "ThumbUpIcon", "text": "Engagement Boost", "bgColor": "bg-red-300" },
        { "icon": "TrendingUpIcon", "text": "Influence Amplification", "bgColor": "bg-yellow-300" },
        { "icon": "PublicIcon", "text": "Reach Enhancement", "bgColor": "bg-green-300" },
        { "icon": "StarIcon", "text": "Brand Recognition", "bgColor": "bg-blue-300" },
        { "icon": "sitForwardIcon", "text": "Brand Recognition", "bgColor": "bg-blue-300" }
      ]
    },
    title1: `Next Marketing`,
    para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero fugit inventore, totam et tempora quas! Lorem ipsum, dolor sit amet consectetur adipisicing elit.`
  };

  return (
    <div className="w-full h-screen flex  py-10 items-center justify-center relative bg-white">
      <section className="overflow-hidden sm:py-16 w-full h-full relative">
        {/* Background Image with Opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${config1.backgroundImage})`,
            opacity: config1.opacity, // Adjust the opacity from the config1 object
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-7 h-full flex items-center justify-center w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-5 h-full items-center">
            <div className="lg:pr-8 lg:pt-0 flex flex-col justify-center h-auto w-full mt-[-50px]">
              <div data-aos="fade-right" data-aos-delay="200" className="lg:max-w-lg lg:h-full h-auto">
                <p className="lg:mt-7 mt-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {config1.content.title}
                </p>
                <div>
                  <p className="mt-4">
                    {config1.content.description}
                  </p>
                  <p className="my-4 text-gray-500">
                    <span className="font-medium text-blod">{config1.title1}</span>
                    <br />
                    <span className='mt-10 '>{config1.para}</span>
                  </p>
                </div>
                <dl className="mt-6 text-base leading-7 text-gray-600">
                  <div className="grid grid-cols-2 gap-7 mt-8">
                    {config1.content.highlights.map((highlight, index) => {
                      const IconComponent = iconMap[highlight.icon];
                      return (
                        <div key={index} className="relative flex items-center">
                          <IconComponent className={`w-10 h-10 rounded-full p-2 ${highlight.bgColor}`} />
                          <dt className="ml-3 font-semibold text-sm text-gray-900">{highlight.text}</dt>
                        </div>
                      );
                    })}
                  </div>
                </dl>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="hidden md:block lg:flex justify-center items-center h-full w-full z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Product screenshot"
                className="w-full h-full object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10"
              />
            </div>

            {/* Background Shapes */}
            <div className="absolute top-[] -bottom-[100px] left-[550px] right-[0] -z-10">
              <Image
                
                data-aos-delay="200"
                src={bg1}
                alt="Purple Shape"
                width={250}
                height={250}
                className="pointer-events-none lg:hidden block"
                
              />
            </div>

            <div className="absolute -top-[100px] bottom-[] left-[] -right-[20px] -z-10">
              <Image
                data-aos="fade-left"
                data-aos-delay="200"
                src={bg2}
                alt="Purple Shape"
                width={250}
                height={250}
                className="pointer-events-none lg:hidden block"
                
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutsec;

