'use client';
import { useState } from 'react';
import Image from 'next/image';
import macMockup from "../../../../public/image/macMockup.png";
import gif from "../../../../public/image/gif2.gif";
import bgmain from "../../../../public/BGD/contentbg.jpg";
import sprite from "../../../../public/image/sprite.png";

const ContentMain = () => {
    const [hover, setHover] = useState(true);

    return (
        <div className="text-gray-300 w-full h-full overflow-hidden grid place-items-center">
            <div className='relative grid grid-cols-1 lg:grid-cols-2 w-full h-full'
                style={{
                    backgroundImage: `url(${bgmain.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 1,
                    opacity: '100%',
                }}
            >
                <div className='w-full h-[50vh] lg:h-screen flex items-center justify-center text-black px-5 lg:-mt-24'>
                    <div className="relative w-full h-full flex items-center justify-start text-center">
                        <div className='relative w-full lg:w-[30vw] z-10 p-5'>
                            <h2 className='hidden lg:block lg:ml-96 lg:translate-y-8 '>Hover this</h2>
                            <div className="hidden lg:block lg:w-[90px] lg:h-[90px] lg:object-cover lg:translate-y-10 lg:ml-96 relative">
                                <Image src={sprite} />
                            </div>
                            <h1 className='text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold mx-auto mt-10 md:mt-16 lg:mt-20 xl:mt-24 text-center translate-y-3'>
                                AI-based Digital Marketing Company in Chennai
                            </h1>
                            <p className='mt-5 md:mt-6 lg:mt-[calc(8px - 10px)] xl:mt-[calc(10px - 10px)] text-center translate-y-6'>
                                At our AI-driven digital marketing company, we use advanced artificial intelligence to create personalized marketing strategies that maximize interaction and ROI. Our real-time data analysis and algorithmic research optimize campaigns for the best results.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[50vh] lg:h-screen flex items-center justify-center text-black px-5'>
                    <div className="relative w-full h-full flex items-center justify-end text-center">
                        <div className='relative w-full lg:w-[30vw] z-10 p-5'>
                            <h1 className='text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold mx-auto mt-10 md:mt-16  lg:mt-20 xl:mt-24 text-center'>
                                AI-based Digital Marketing Company in Chennai
                            </h1>
                            <p className='mt-5 md:mt-6 lg:mt-8 xl:mt-10  text-center'>
                                At our AI-driven digital marketing company, we use advanced artificial intelligence to create personalized marketing strategies that maximize interaction and ROI. Our real-time data analysis and algorithmic research optimize campaigns for the best results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

                <div className='absolute h-full w-full z-50 flex items-center justify-center'>
                    <Image
                        src={gif}
                        alt="GIF animation"
                        className={`
                        lg:block hidden
                        absolute
                        h-full
                        w-full
                        transition-opacity duration-300
                        ${hover ? 'opacity-0' : 'opacity-100'}
                    `}
                    />
                    <Image
                        src={macMockup}
                        alt="Mac Mockup"
                        className={`absolute lg:block hidden z-50 transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}
                        onMouseEnter={() => setHover(false)}
                        onMouseLeave={() => setHover(true)}
                    />
                </div>
            </div>
            );
};

export default ContentMain;

