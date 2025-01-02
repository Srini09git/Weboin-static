import Image from 'next/image';
import { useRef } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

const blogData = [
    {
        imageSrc: './ServiceImage/branding.jpg',
        author: 'John Anderson',
        title: 'We built an AI chess bot with ChatGPT',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor.'
    },
    {
        imageSrc: './ServiceImage/cms.jpg',
        author: 'Kyle Parsons',
        title: 'How to grow your personal brand as a web designer',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor.'
    },
    {
        imageSrc: './ServiceImage/cms.jpg',
        author: 'Andrea Bates',
        title: 'Calm down, monoliths are totally fine',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor.'
    },
    {
        imageSrc: './ServiceImage/cms.jpg',
        author: 'A',
        title: 'A quick guide to web development for dummies',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor.'
    },
    {
        imageSrc: './ServiceImage/cms.jpg',
        author: 'B',
        title: 'How to grow your personal brand as a web designer',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor.'
    },
    {
        imageSrc: './ServiceImage/cms.jpg',
        author: 'C',
        title: 'Calm down, monoliths are totally fine',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor.'
    },
    {
        imageSrc: './ServiceImage/cms.jpg',
        author: 'D',
        title: 'A quick guide to web development for dummies',
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sequi, dolor.'
    }
];

export default function HomeBlog() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 overflow-y-hidden">
            <div className='flex justify-between'>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">The Team Blog</h2>
                <div className=''>
                    <button onClick={scrollLeft} className="right-0 mr-1 bg-gray-500 shadow-md px-2 py-3 rounded-md z-10"><MdArrowBackIosNew /></button>
                    <button onClick={scrollRight} className=" right-0  bg-gray-500 shadow-md px-2 py-3 rounded-md z-10"><MdArrowForwardIos /></button>
                </div>
            </div>
            <div className="relative mt-8 overflow-y-hidden">

                <div ref={scrollRef} className="flex space-x-6 overflow-x-hidden  scrollbar-hide overflow-y-hidden">
                    {blogData.map((blog, index) => (
                        <BlogCard
                            key={index}
                            imageSrc={blog.imageSrc}
                            author={blog.author}
                            title={blog.title}
                            description={blog.description}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

function BlogCard({ imageSrc, author, title, description }) {
    return (
        <div className="w-80 flex-shrink-0 overflow-y-hidden">
            <div className="rounded-lg overflow-y-hidden">
                <img
                    src={imageSrc}
                    alt="Blog Image"
                    width={320}
                    height={180}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="mt-4">
                <span className="inline-block bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {author.toUpperCase()}
                </span>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900">
                    {title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
}
