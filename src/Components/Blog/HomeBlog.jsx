'use client';
import React, { useState, useEffect } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MainBlog from './MainBlog';
import Link from 'next/link';

const HomeBlog = ({ blogPostsExceptLast }) => {
  const [newLabels, setNewLabels] = useState({});

  useEffect(() => {
    const newLabelsState = {};

    blogPostsExceptLast.forEach((post) => {
      const publishDate = new Date(post.date);
      const currentDate = new Date();
      const timeDiff = currentDate - publishDate;
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      newLabelsState[post.id] = daysDiff <= 1;
    });

    setNewLabels(newLabelsState);

    const intervalId = setInterval(() => {
      const updatedLabelsState = { ...newLabelsState };

      blogPostsExceptLast.forEach((post) => {
        const publishDate = new Date(post.date);
        const currentDate = new Date();
        const timeDiff = currentDate - publishDate;
        const daysDiff = timeDiff / (1000 * 3600 * 24);

        updatedLabelsState[post.id] = daysDiff <= 1;
      });

      setNewLabels(updatedLabelsState);
    }, 3600000);

    return () => clearInterval(intervalId);
  }, [blogPostsExceptLast]);

  const reversedBlogPosts = [...blogPostsExceptLast].reverse();

  return (
    <>
      <MainBlog />
      {reversedBlogPosts.map((item, index) => (
        <Link href={`/Blog/${item.id}`} key={index}>
          <div className='lg:px-5 lg:py-5 bg-slate-50'>
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row justify-center items-center px-5 py-5">
              <div className="md:w-1/2 w-full relative">
                <img
                  className="h-full w-full object-cover rounded-xl"
                  src={item.imageUrl}
                  alt="Blog Post"
                />
              </div>
              <div className="md:w-1/2 w-full px-6">
                <div className='flex flex-row gap-3'>
                  <p className='bg-gray-200 w-fit px-3 py-2 text-center rounded-full text-sm mb-3 lg:mt-0 mt-5'>
                    {item.field}
                  </p>
                  {newLabels[item.id] && (
                    <p className='bg-gray-200 w-fit px-3 py-2 text-center font-medium rounded-full text-sm mb-3 lg:mt-0 mt-5'>
                      New
                    </p>
                  )}
                </div>

                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  {item.aboutText}
                </h2>
                <p className="mt-3 text-gray-700">
                  {item.para}
                </p>
                <div className='flex flex-row gap-3 mt-5'>
                  <span className='text-gray-500 text-sm flex items-center gap-1'>
                    <CalendarMonthIcon />
                    {item.date}
                  </span>
                  <span className='text-gray-500 text-sm flex items-center gap-1'>
                    <AccessTimeIcon />
                    {item.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default HomeBlog;