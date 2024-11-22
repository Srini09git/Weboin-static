'use client';
import React, { useState, useEffect } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';

const MainBlog = ({ newContent }) => {
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (!newContent) {
      return;
    }

    const publishDate = new Date(newContent.date);

    const checkDateDifference = () => {
      const currentDate = new Date();
      const timeDiff = currentDate - publishDate;
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      if (daysDiff > 1) {
        setIsNew(false);
      }
    };

    checkDateDifference();
    const intervalId = setInterval(checkDateDifference, 3600000);

    return () => clearInterval(intervalId);
  }, [newContent]);

  if (!newContent) {
    return null;
  }

  return (
    <Link href={`/Blog/${newContent.id}`}>
      <div>
        <div className='lg:px-5 lg:py-5 px-3 py-3 bg-slate-50'>
          <div className='flex flex-col-reverse lg:flex-row gap-5 justify-center items-center mb-8'>
            <div className='lg:w-1/2 w-full flex flex-col justify-center px-5'>
              <div className='flex flex-row gap-3'>
                <p className='bg-gray-200 w-fit px-3 py-2 text-center rounded-full text-sm mb-5'>{newContent.field}</p>
                {isNew && (
                  <p className='bg-gray-200 w-fit px-3 py-2 text-center rounded-full text-sm font-medium mb-5'>New</p>
                )}
              </div>
              <h1 className='text-black font-bold text-3xl mb-5'>{newContent.aboutText}</h1>
              <p className='mb-5 text-lg text-gray-500 font-medium'>{newContent.para}</p>
              <div className='flex flex-row gap-3'>
                <span className='text-gray-500 text-sm flex items-center gap-1'>
                  <CalendarMonthIcon />
                  {newContent.date}
                </span>
                <span className='text-gray-500 text-sm flex items-center gap-1'>
                  <AccessTimeIcon />
                  {newContent.time}
                </span>
              </div>
            </div>
            <div className='lg:w-1/2 w-full flex justify-center'>
              <img className='h-full w-full object-cover rounded-xl py-2' src={newContent.imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MainBlog;