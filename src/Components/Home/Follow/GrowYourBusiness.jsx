"use client";
import contact from '../../../../public/image/contact.jpg';
import React, { Component } from 'react';
import TextTransition, { presets } from "react-text-transition";

const texts = ["epic", "fun", "delightfull", "beautiful"]
const GrowYourBusiness = () => {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const interValid = setInterval(
            () => setIndex((index) => index + 1), 3000
        );
    }, []);
    return (
        <section className="py-20 rounded-md">
            <div className="px-5 sm:px-8 md:px-0 lg:px-0 max-w-full mx-auto items-center justify-center group "> {/* Adjusted padding */}
                <a href="">
                    <div className="md:w-3/5  flex group pl-5">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl md:pl-5 xl:text-7xl xl:pl-5 pt-2 font-display font-bold leading-tight group-hover:text-green-300">
                            Lets make </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-28 h-20 text-green-300  stroke-green-300 group-hover:pl-6 content-start mt-o sm:mt-1 md:mt-0 lg:mt-4">
                            <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className="md:w-3/5 flex group pl-5">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl md:pl-4 xl:text-7xl xl:pl-5 font-display font-bold leading-tight group-hover:text-green-300">something</h1>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl md:pl-5 xl:text-7xl xl:pl-5 font-display font-bold leading-tight group-hover:text-green-300'>
                            <TextTransition springConfig={presets.stiff} className='pl-5'>
                                {texts[index % texts.length]}</TextTransition>
                        </h1>
                    </div>
                </a>
            </div>
        </section>
    );
}
export default GrowYourBusiness;
