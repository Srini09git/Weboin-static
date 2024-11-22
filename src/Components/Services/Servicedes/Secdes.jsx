'use client';
import React from 'react';

const Secdes = ({data}) => {
  return (
    <div className="m-6">
      {data.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center p-8 rounded-lg shadow-lg bg-gray-200 mt-4 sticky top-0 ${section.reverse ? 'md:flex-row-reverse' : ''
            }`}
        >
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600 mb-4">{section.description}</p>
          </div>
          <div className="flex-1">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Secdes;
