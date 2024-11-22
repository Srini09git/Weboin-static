"use client";
import React, { useState } from "react";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

const FAQ = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index
         )  
        
    };

    const faqs = [
        {
            title: "What is your policy on distribution?",
            content:
                "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
        },
        {
            title: "What is your policy on distribution?",
            content:
                "Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa.",
        },
        {
            title: "What is your policy on distribution?",
            content:
                "Pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
        },
        {
            title: "What is your policy on distribution?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
    ];

    return (
        <section>
            <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
                <div className="flex flex-col items-start lg:flex-row lg:space-x-20">
                    <div className="lg:flex-[1_1_500px] w-full flex-none">
                        <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16">
                            <h2 className="font-bold text-3xl md:text-5xl">General FAQs</h2>
                            <div className="mt-4 max-w-lg">
                                <p className="text-gray-500 text-sm sm:text-base">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                                    aliquam, purus sit amet luctus venenatis, lectus magna
                                    fringilla urna
                                </p>
                            </div>
                        </div>
                        <div className="mb-6 h-full w-full overflow-auto bg-gray-100 p-8 rounded-md">
                            <div className="flex flex-row gap-4">
                            <LiveHelpIcon className="h-10 mt-2 w-16 "/>
                                <div className="flex flex-col gap-1.5">
                                    <h5 className="text-xl font-bold">Still have questions?</h5>
                                    <div className="max-w-sm">
                                        <p className="text-gray-500 text-sm sm:text-base">
                                            Can’t find the answer you’re looking for? Please chat to
                                            our support.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 mt-8 h-[0.5px] w-full bg-gray-300"></div>
                            {/* <a
                                href="#"
                                className="inline-block items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
                            >
                                Get In Touch
                            </a> */}
      <a href="/Contacts">
      <button
      className={`relative px-3 py-2 text-sm bg-yellow-400 text-black border-2 rounded-full font-roboto font-light overflow-hidden transition-transform duration-200 ease-in-out transform ${
        isHovered ? 'scale-105 border-transparent text-black' : 'border-black'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ zIndex: 0 }}
    >
      <span
        className={`absolute inset-0 bg-slate-50 rounded-full transition-transform duration-200 ease-out transform ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ transformOrigin: 'bottom', zIndex: -1 }}
      ></span>
      Get in Touch
    </button>
</a>

                        </div>
                    </div>
                    <div className="lg:flex-[1_1_500px] w-full flex-none">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`mb-6 w-full overflow-hidden p-8 rounded-md transition-colors duration-300 ${openFAQ === index ? "bg-gray-400" : "bg-gray-100"}`}
                            >
                                <div
                                    className="flex cursor-pointer items-start justify-between"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <p className={`text-xl font-bold transition-colors duration-300 ${openFAQ === index ? "text-white" : "text-black"}`}>{faq.title}</p>
                                    <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                                        <div
                                           className={`absolute h-5 w-0.5 transition-transform duration-300 ${openFAQ === index ? "rotate-90 bg-red-500" : "bg-black"}`}
                                        ></div>

                                        <div className="h-0.5 w-5 bg-black"></div>
                                    </div>
                                </div>
                                {openFAQ === index && (
                                    <div className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                                        <p className={`text-sm sm:text-base pt-3 transition-colors duration-300 ${openFAQ === index ? "text-slate-100" : "text-black"}`}>{faq.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FAQ;
