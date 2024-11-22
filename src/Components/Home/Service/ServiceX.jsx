import React, { useState } from "react";

const Card = ({ number, title, description, para, tit, bgImage, imgSrc, zIndex }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`sticky text-white p-4 rounded-lg shadow-lg bg-clip-border w-full sm:w-[80%] h-auto min-h-[400px] max-w-screen mx-auto border-b-2 border-t-2 bottom-0`}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: 'transform 0.3s ease',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                zIndex: zIndex,
                marginTop: zIndex !== 1 ? '-10px' : '0px', // Overlap each card with negative margin
            }}
        >
            <div className="absolute inset-0 bg-gray-300  bg-opacity-90 rounded-lg"></div>

            <div className="grid grid-cols-1 md:grid-cols-10 text-black justify-between relative z-10">
                <div className="flex md:col-span-6 mb-4 md:mb-0">
                    <div>
                        <h2 className="text-2xl md:text-7xl my-2 md:my-4 font-bold">{number}</h2>
                        <h3 className="text-md md:text-5xl font-semibold mb-2 md:mb-3">{title}</h3>
                        <p className="text-xs md:text-2xl pt-2 py-1 md:py-2 pr-3 mb-2">{description}</p>

                        <button
                            className={`relative px-3 py-2 text-xs bg-yellow-400 text-black border-2 rounded-full font-roboto font-light overflow-hidden transition-transform duration-200 ease-in-out transform ${isHovered ? ' border-transparent text-black' : 'border-black'
                                }`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            style={{ zIndex: 0 }}
                        >
                            <span
                                className={`absolute inset-0 bg-slate-50 rounded-full transition-transform duration-200 ease-out transform ${isHovered ? 'translate-y-0' : 'translate-y-full'
                                    }`}
                                style={{ transformOrigin: 'bottom', zIndex: -1 }}
                            ></span>
                            Get in Touch
                        </button>
                    </div>
                </div>

                <div className="bg-gradient-to-l md:col-span-4 from-gray-600 to-gray-500 p-2 text-white md:p-4 rounded-md w-full">
                    <h4 className="font-bold mb-2 md:mb-6 text-sm md:text-2xl">{tit}</h4>
                    <p className="text-xs md:text-md mb-2 md:mb-3">{para}</p>
                    <img
                        src={imgSrc}
                        alt={`${title} image`}
                        className="mt-2 md:mt-3 rounded-md w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export function ServiceX() {
    const services = [
        {
            number: 1,
            title: "Digital Marketing",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint dignissimos voluptatum eum quas totam quasi maxime aspernatur? Eligendi, earum. Ratione asperiores aut, delectus nihil adipisci accusamus iure recusandae qui.",
            tit: "Software Developer",
            para:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sint libero, aperiam suscipit dolor nostrum quisquam aspernatur cum fugiat.",
            bgImage:
                "https://cdn.prod.website-files.com/65ddaf187b5e978c3f66cc5a/66046b9fe9c71803c6d43eef_service-bg-v1.webp",
            imgSrc: "/image/frame1.png",
        },
        {
            number: 2,
            title: "Web Developer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint dignissimos voluptatum eum quas totam quasi maxime aspernatur? Eligendi, earum.",
            tit: "Frontend Developer",
            para:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sint libero, aperiam suscipit dolor nostrum quisquam aspernatur cum fugiat.",
            bgImage:
                "https://cdn.prod.website-files.com/65ddaf187b5e978c3f66cc5a/65e8eb78414552c142ee9c62_pegasus%20solutions-p-1600.webp",
            imgSrc: "/image/frame2.png",
        },
        {
            number: 3,
            title: "UI/UX Developer / Graphic Designer",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sint dignissimos voluptatum eum quas totam quasi maxime aspernatur.",
            tit: "Backend Developer",
            para:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sint libero, aperiam suscipit dolor nostrum quisquam aspernatur.",
            bgImage:
                "https://www.allaboutlean.com/wp-content/uploads/2021/09/Manager-and-Employee-discussion.jpg",
            imgSrc: "/image/frame3.png",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[200vh] bg-white">
            <div className="flex flex-col gap-6">
                {services.map((service, index) => (
                    <Card
                        key={index}
                        number={service.number}
                        title={service.title}
                        description={service.description}
                        para={service.para}
                        tit={service.tit}
                        bgImage={service.bgImage}
                        imgSrc={service.imgSrc}
                        zIndex={services.length - index} // Set zIndex based on position in array
                    />
                ))}
            </div>
        </div>
    );
}
