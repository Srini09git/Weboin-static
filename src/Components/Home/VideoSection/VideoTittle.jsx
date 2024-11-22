'use client';
import React from 'react';
import { motion } from 'framer-motion';

const VideoTittle = () => {
    const text = "Extraordinary Digital Experiences".split(" ");

    return (
        <div className='bg-white md:pt-10  md:pb-10 sm:pb-4 md:px-20 flex flex-col  items-center text-center '>
            <h1 className="text-black text-6xl md:text-6xl lg:text-6xl font-bold pt-16 pb-10">
                {text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 3,
                            delay: i / 10,
                        }}
                        viewport={{ once: true }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
}

export default VideoTittle;
