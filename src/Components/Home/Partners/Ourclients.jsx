"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import nadhamap from '../../../../public/image/nadhanmap.png';
import Achennai from '../../../../public/WhiteIcon/Achennai.png';
import Cello from '../../../../public/WhiteIcon/Cello.png';
import ImageKing from '../../../../public/WhiteIcon/ImageKing.png';
import Joy from '../../../../public/WhiteIcon/Joy.png';
import Nestoria from '../../../../public/WhiteIcon/Nestoria.png';
import TheRaymondshop from '../../../../public/WhiteIcon/TheRaymondshop.png';
import VcLiving from '../../../../public/WhiteIcon/VcLiving.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const clients = [
    { src: Achennai, alt: "AChennai", width: 100, height: 100 },
    { src: Cello, alt: "Cello", width: 100, height: 100 },
    { src: ImageKing, alt: "ImageKing", width: 100, height: 100 },
    { src: Joy, alt: "Joy", width: 100, height: 100 },
    { src: Nestoria, alt: "Nestoria", width: 100, height: 100 },
    { src: TheRaymondshop, alt: "TheRaymondshop", width: 100, height: 100 },
    { src: VcLiving, alt: "VcLiving", width: 100, height: 100 },
    { src: Achennai, alt: "AChennai", width: 100, height: 100 },
    { src: Cello, alt: "Cello", width: 100, height: 100 },
    { src: ImageKing, alt: "ImageKing", width: 100, height: 100 },
    { src: Joy, alt: "Joy", width: 100, height: 100 },
    { src: Nestoria, alt: "Nestoria", width: 100, height: 100 },
];

const ClientImages = ({ clients }) => {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, []);

    return (
        <div className="mt-10">
            {/* First row with 2 empty columns, 6 logos, and 2 empty columns */}
            <div className="grid grid-cols-10 gap-8 items-center justify-items-center">
                <div className="col-span-2"></div>
                {clients.slice(0, 6).map((client, index) => (
                    <div key={index} className="col-span-1 transition-transform transform hover:scale-110 hover:filter hover:brightness-200">
                        <Image
                            src={client.src}
                            alt={client.alt}
                            width={client.width}
                            height={client.height}
                        />
                    </div>
                ))}
                <div className="col-span-2"></div>
            </div>

            {/* Second row with 2 empty columns, 6 logos, and 2 empty columns */}
            <div className="grid grid-cols-10 gap-8 items-center justify-items-center mt-8">
                <div className="col-span-2"></div>
                {clients.slice(6, 12).map((client, index) => (
                    <div key={index} className="col-span-1 transition-transform transform hover:scale-110 hover:filter hover:brightness-200">
                        <Image
                            src={client.src}
                            alt={client.alt}
                            width={client.width}
                            height={client.height}
                        />
                    </div>
                ))}
                <div className="col-span-2"></div>
            </div>
        </div>
    );
};

const OurClients = () => {
    return (
        <div className="mx-auto py-10 px-5 bg-black">
            <div className="flex flex-col ">
                <div data-aos="fade-up" data-aos-delay="100" className="">
                    <h2 className="text-xl mb-4 text-gray-100 ml-7">Our Clients</h2>
                    <p className="max-w-md mx-auto mt-2 text-2xl ml-7 text-gray-300">
                        WE ARE HAPPY TO WORK WITH GLOBAL LARGEST BRANDS
                    </p>

                </div>

                <Image
                    src={nadhamap}
                    className="col-span-1 mx-auto py-10 lg:px-20"
                    alt="iphone-photo"
                    width={1500} // Replace with actual width
                    height={1000} // Replace with actual height
                    layout="intrinsic"
                />

                {/* Reusable Client Images Component */}
                <ClientImages clients={clients} />
            </div>
        </div>
    );
};

export default OurClients;
