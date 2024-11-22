'use client';
import React from 'react';


const ImageCard = ({src,handlepopup,idx}) => {
  
  return (
    <div className="m-6 flex items-center justify-center"onClick={()=>handlepopup(idx)}>
      <div
        className="flex flex-col items-center justify-center rounded-3xl shadow-lg bg-gray-200 mt-4 lg:w-[80vw] lg:h-[80vh]"
      >
        <div className="w-full h-full sticky top-0">
          <div className='h-screen rounded-3xl relative'>
            <img src={src} alt="img" className="object-fill w-full h-full rounded-3xl sticky top-0 " />
            <div className="absolute bottom-10 left-10 bg-white bg-opacity-50 rounded-full  px-4 py-2 lg:px-5 lg:py-2 text-black text-md lg:text-lg">2022</div>
            <div className="absolute bottom-10 right-10 bg-white bg-opacity-50 rounded-full px-4 py-2 lg:px-5 lg:py-2 text-black text-md lg:text-lg">Click Here</div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default ImageCard;
