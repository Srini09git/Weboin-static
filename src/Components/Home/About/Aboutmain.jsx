"use client"
import React from 'react';
import Image from 'next/image';
import bg1 from '../../../../public/ServiceImage/branding.jpg';

const Aboutmain = () => {
  return (
    <div className="container mx-auto px-0 py-8 flex flex-col lg:flex-row items-center bg-black">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-start">
        <Image
          src={bg1}
          alt="Happening Cities"
          className="w-full h-auto"
          style={{
            borderTopLeftRadius: '3rem',  // Custom border radius for top-left corner
            borderTopRightRadius: '5rem', // Custom border radius for top-right corner
            borderBottomRightRadius: '3rem' // Custom border radius for bottom-right corner
          }}
        />
      </div>
      <div className="w-full lg:w-1/2 px-7">
        <h3 className="text-lg text-gray-400 mb-2">BENEFITS</h3>
        <h2 className="text-3xl font-bold mb-8 text-gray-400">Happening cities</h2>
        <div className="space-y-6">
          <div className="flex items-start flex-col">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 rounded-2xl bg-blue-300 mb-2">
              Advertising
            </div>
            <div>
              <h4 className="text-xl font-semibold py-2 text-gray-400">Cost-effective advertising</h4>
              <p className="text-gray-600 py-0">With a free listing, you can advertise your rental with no upfront costs</p>
            </div>
          </div>
          <div className="flex items-start flex-col">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-green-700 rounded-2xl bg-green-200 mb-2">
              Exposure
            </div>
            <div>
              <h4 className="text-xl font-semibold py-2 text-gray-400">Reach millions with Chisfis</h4>
              <p className="text-gray-600 py-0">Millions of people are searching for unique places to stay around the world</p>
            </div>
          </div>
          <div className="flex items-start flex-col">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-red-700 rounded-2xl bg-red-200 mb-2">
              Secure
            </div>
            <div>
              <h4 className="text-xl font-semibold py-2 text-gray-400">Secure and simple</h4>
              <p className="text-gray-600 py-0">A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutmain;
