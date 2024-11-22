'use client';
import React from 'react';


export default function ServiceReusable() {

  const iconData = [
    {
      imgUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png",
      buttonText: "Learn more"
    },
    {
      imgUrl: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png",
      buttonText: "Learn more"
    },
    {
      imgUrl: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-128.png",
      buttonText: "Learn more"
    },
    {
      imgUrl: "https://cdn4.iconfinder.com/data/icons/socialcones/508/Gmail-128.png",
      buttonText: "Learn more"
    }
  ];




  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-16 bg-cover bg-center"
      style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/wavy-line-pattern-dark-background_1409-1670.jpg?t=st=1722623537~exp=1722627137~hmac=bd3ef9d8c3792084076f2497327df344969e7b7aa65d598d64a4f29aead97bac&w=1060")' }}
    >
      <div className="flex flex-col items-center lg:items-start ml-4 lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left bg-opacity-75 p-4 rounded-lg">
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-600">
          {/* Your subtitle here */}
        </h2>
        <p className="text-3xl lg:text-6xl font-bold mt-2 text-gray-100">
          Our Success Blueprint!
        </p>
        <p className="text-xl lg:text-3xl font-bold text-gray-600 mt-2">
          {/* Another subtitle or description here */}
        </p>
        <p className="text-gray-200 mt-2">
          To create a thriving digital marketing company, start by conducting thorough market research to identify a specialized niche. Develop a solid business plan, define clear goals, and craft a compelling brand identity. Offering a range of services, establish a strong online presence and network to acquire clients. Focus on data-driven strategies, maintain client relationships, and continuously adapt to industry changes.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:w-2/2 lg:ml-20">
        {
          iconData.map((icon, index) => (
            <img key={index}
              src={icon.imgUrl}
              alt="Image 1"
              className="max-h-9 max-w-9 rounded shadow-lg"
            />
          ))
        }
      </div>
    </div>
  );
}
