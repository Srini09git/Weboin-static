'use client';
import React from 'react'

const TestimonialsMain = () => {

  const details = [
    {
      name: "KENIE EDGAR",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem itaque saepe Accusantium.",
    },
  ];

  return (
    <div>
      {details.map((detail, index) => (
        <div key={index} className='flex flex-row gap-5'>
          <div className=" mx-auto rounded-lg bg-white border border-gray-300 p-5">
            <div className="flex flex-row items-center gap-3">
              <img src={detail.img} alt="Emily Smith" className="h-12 w-12 rounded-full" />
              <h1 className="font-semibold text-gray-800">{detail.name}</h1>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 w-[55vh] text-wrap">{detail.content}</p>
            </div>
          </div>
          <div className=" mx-auto rounded-lg bg-white border border-gray-300 p-5">
            <div className="flex flex-row items-center gap-3">
              <img src={detail.img} alt="Emily Smith" className="h-12 w-12 rounded-full" />
              <h1 className="font-semibold text-gray-800">{detail.name}</h1>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 w-[55vh] text-wrap">{detail.content}</p>
            </div>
          </div>
          <div className=" mx-auto rounded-lg bg-white border border-gray-300 p-5">
            <div className="flex flex-row items-center gap-3">
              <img src={detail.img} alt="Emily Smith" className="h-12 w-12 rounded-full" />
              <h1 className="font-semibold text-gray-800">{detail.name}</h1>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 w-[55vh] text-wrap">{detail.content}</p>
            </div>
          </div>
          <div className=" mx-auto rounded-lg bg-white border border-gray-300 p-5">
            <div className="flex flex-row items-center gap-3">
              <img src={detail.img} alt="Emily Smith" className="h-12 w-12 rounded-full" />
              <h1 className="font-semibold text-gray-800">{detail.name}</h1>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 w-[55vh] text-wrap">{detail.content}</p>
            </div>
          </div>
          <div className=" mx-auto rounded-lg bg-white border border-gray-300 p-5">
            <div className="flex flex-row items-center gap-3">
              <img src={detail.img} alt="Emily Smith" className="h-12 w-12 rounded-full" />
              <h1 className="font-semibold text-gray-800">{detail.name}</h1>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 w-[55vh] text-wrap">{detail.content}</p>
            </div>
          </div>
          <div className=" mx-auto rounded-lg bg-white border border-gray-300 p-5">
            <div className="flex flex-row items-center gap-3">
              <img src={detail.img} alt="Emily Smith" className="h-12 w-12 rounded-full" />
              <h1 className="font-semibold text-gray-800">{detail.name}</h1>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 w-[55vh] text-wrap">{detail.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TestimonialsMain
