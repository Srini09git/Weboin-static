"use client"
import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

const ServiceItem = ({ imageUrl, title, colSpan }) => {
    const colSpanClass = `col-span-${colSpan}`;

    return (
        <Link href="#" rel="preload" className={clsx("group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80", colSpanClass)}>
            
            <Image
                rel="preload"
                src={imageUrl}
                layout="fill"  // Adjust the layout to fill the container
                objectFit="cover"  // Ensure the image covers the entire container

                alt={`Photo of ${title}`}
                className="w-auto absolute inset-0 h-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{title}</span>
        </Link>
    );
};

export default ServiceItem;
