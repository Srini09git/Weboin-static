'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Link from "next/link";
import Image from "next/image";
export default function Sticky() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    return (
        <>
            <main ref={container} className="relative h-[200vh] bg-black  ">
                <Section1 scrollYProgress={scrollYProgress} />
                <Section2 scrollYProgress={scrollYProgress} />

            </main>
        </>
    );
}
const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    const Aboutdata = [
        {
            imgSrc: "/provide/marketing.svg",
            country: "Marketing",
            paragraph: "Follow a hashtag total posts, videos",
        },
        {
            imgSrc: "/provide/graphic.svg",
            country: "Graphic design",
            paragraph: "Follow a hashtag total posts, videos",
        },
        {
            imgSrc: "/provide/heaking.svg",
            country: "Heaking",
            paragraph: "Follow a hashtag total posts, videos",
        },
        {
            imgSrc: "/provide/uidesign.svg",
            country: "UI/UX Design",
            paragraph: "Follow a hashtag total posts, videos",
        },
    ];
    return (
        <motion.section
            style={{ scale, rotate }}
            className="md:sticky  font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black"
        >
            <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8  rounded-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* COLUMN-1 */}
                    <div className="col-span-6 flex justify-center">
                        <div className="flex flex-col align-middle justify-center p-10">
                            <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                                We provide that service.
                            </p>
                            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo
                            </h4>
                            <Link href="/" className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links">
                                Learn more <Image src="/provide/arrow.svg" alt="arrow" width={20} height={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-1"></div>

                    {/* COLUMN-2 */}
                    <div className="col-span-6 lg:col-span-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-sky-300 rounded-3xl">
                            {Aboutdata.map((item, i) => (
                                <div key={i} className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl">
                                    <Image src={item.imgSrc} alt={item.imgSrc} width={64} height={64} className="mb-5" />
                                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                                    <h4 className="text-lg font-normal text-bluegray my-2">{item.paragraph}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    const whydata = [
        {
            heading: "Quality",
            subheading: "Follow a hashtag growth total posts, videos and images. More revisions",
        },
        {
            heading: "Communication",
            subheading: "Follow a hashtag growth total posts, videos and images. More revisions",
        },
        {
            heading: "Reliability",
            subheading: "Follow a hashtag growth total posts, videos and images. More revisions",
        }
    ];


    return (
        <motion.section
            style={{ scale, rotate }}
            className="relative h-screen bg-white text-black "
        >
            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* COLUMN-1 */}
                    <div className="lg:-ml-64">
                        <Image src="/why/iPad.png" alt="iPad-image" width={4000} height={900} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why we best?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Dont waste time on manual tasks. Let automation do it for you. Simplify workflows, reduce errors, and save time.</h4>

                        <div className="mt-10">
                            {whydata.map((item, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{item.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{item.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
