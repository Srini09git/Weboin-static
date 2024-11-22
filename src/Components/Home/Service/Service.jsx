"use client"
import React, { useEffect, useState } from 'react';
import ServiceItem from '../Service/ServiceItem';

const services = [

    {
        imageUrl: "/ServiceImage/DigitalMarketing.jpg",
        title: "Digital Marketing",
        colSpan: 2
    },
    {
        imageUrl: "/ServiceImage/Business Website Development.jpg",
        title: "Business Website Development",
        colSpan: 1
    },
    {
        imageUrl: "/ServiceImage/SEO.jpg",
        title: "SEO Management",
        colSpan: 1
    },
    {
        imageUrl: "/ServiceImage/E-commerce Website Development.jpg",
        title: "E-commerce Website Development",
        colSpan: 2
    },
    {
        imageUrl: "/ServiceImage/cms.jpg",
        title: "Content Management Systems (CMS)",
        colSpan: 1
    },


    {
        imageUrl: "/ServiceImage/mobileapp.jpg",
        title: "Mobile App Development",
        colSpan: 2
    },
    {
        imageUrl: "/ServiceImage/branding.jpg",
        title: "Strategic Branding",
        colSpan: 2
    },
    {
        imageUrl: "/ServiceImage/leadgeneration.jpg",
        title: "Lead Generation Services",
        colSpan: 1
    },
    {
        imageUrl: "/ServiceImage/pay.jpg",
        title: "Pay Per Click",
        colSpan: 1
    },
    {
        imageUrl: "/ServiceImage/socialmedia.jpg",
        title: "Social Media Management",
        colSpan: 2
    },



    // Add other service items as needed
];

const Service = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Set your mobile breakpoint here
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const adjustedServices = services.map(service => ({
        ...service,
        colSpan: isMobile ? 2 : service.colSpan
    }));

    return (
        <div className="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12 h-full">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Our Services</h2>

                        <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                            <b>We provide the best service for you</b> <br /> <span> From cost-effective digital marketing strategies to convenient shopping experiences with an E-commerce website.</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    {adjustedServices.map((service, index) => (
                        <ServiceItem
                            key={index}
                            imageUrl={service.imageUrl}
                            title={service.title}
                            colSpan={service.colSpan}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
