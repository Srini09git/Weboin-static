"use client";
import Image from 'next/image';
import React from 'react';
import patt from '../../../../public/logo/pattern.png';

const SMM = () => {
    return (
        <div className="relative flex items-center justify-center w-full  pt-12 bg-gradient-to-r text-gray-100 bg-gray-500">
            {/* <Image
                src={patt}
                alt="Map Background"
                layout="fill"
                objectFit="cover"
                className="z-0 "
            /> */}
            <div className="relative z-10 text-center max-w-4xl p-5 rounded-lg ">
                <h1 className="text-4xl  font-bold mb-6 ">Need Advice for your Social Media Marketing?</h1>
                <p className="mb-5">
                    Book a consultation with our social media marketing experts at Weboin today! Our team specializes in crafting personalized strategies to elevate your brand’s visibility, engagement, and ROI across all major social media platforms. During your consultation, we’ll dive deep into your brand identity, target audience, and business objectives to develop a tailored roadmap for social media success.
                </p>
                <a className="mt-8 inline-flex items-center justify-center rounded-xl bg-gray-950 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-gray-400/90 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
                    href="#">
                    Contact Us
                </a>
            </div>
        </div>
    );
}

export default SMM;
