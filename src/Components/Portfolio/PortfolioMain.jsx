"use client";
import React, { useState } from 'react';
import ImageCard from './ImageCard';
import { motion } from 'framer-motion';


const PortfolioMain = () => {

const galleryItems = [
  {
    imgUrl: "https://weboin.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-11-at-15.jpg.webp ",
    heading: "Digital Innovation PartnerMax Gold's Performance Marketing Strategy",
    year:"2022",
    contentParagraphs: [
      "At Weboin, we're proud to partner with Max Gold, driving their success through expert Google Ads and performance marketing strategies. By understanding their brand and audience, we've crafted targeted campaigns that deliver exceptional results. Our approach combines creativity with data-driven insights, consistently exceeding expectations and fueling Max Gold's growth in online visibility and revenue. Let's collaborate to elevate your brand's digital presence together."
    ],
    buttonText: "Learn more"
  },
  {
    imgUrl: "https://weboin.com/wp-content/uploads/2024/05/2-6-1024x1024.jpg.webp",
    heading: "Lyca Productions & 24AM Studios’ Digital Dominance",
    year:"2022",
    contentParagraphs: [
      "For Lyca Productions, our team masterminded a viral digital marketing campaign for the film Kolamaavu Kokila, propelling it to box office glory. Our innovative meme marketing strategy not only captured the zeitgeist but also sparked a cultural phenomenon, resulting in a staggering 75% increase in online engagement. The memes became a staple across social timelines, echoing the film’s success and showcasing our ability to create content that resonates deeply with the masses."
    ],
    buttonText: "Learn more"
  },
  {
    imgUrl: "https://weboin.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-29-at-15.jpg.webp",
    heading: "Lyca Productions & 24AM Studios’ Digital Dominance",
    year:"2022",
    contentParagraphs: [
      "Turning to 24AM Studios, we catapulted REMO into the limelight with a dazzling digital campaign that wove a web of anticipation. Our creative wizardry led to a 50% increase in pre-release ticket sales, as REMO’s trailers and teasers became a viral sensation, amassing millions of views and creating an unprecedented buzz. By blending our digital marketing expertise with captivating creatives, we transformed REMO into a box office sensation, demonstrating our prowess elevating cinematic experiences through strategic storytelling and innovative engagement."
    ],
    buttonText: "Learn more"
  },
  {
    imgUrl: "https://weboin.com/wp-content/uploads/2024/05/raymond_logo-1-1024x1024.jpg.webp ",
    subheading: "Collaborate",
    heading: "Digital Innovation Partner",
    contentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    contentParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
    ],
    buttonText: "Learn more"
  },
  {
    imgUrl: "https://weboin.com/wp-content/uploads/2024/05/Clients-Logo-1-1-1024x1024.jpg.webp",
    subheading: "Marketing",
    heading: "Social Media Marketing",
    contentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    contentParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
    ],
    buttonText: "Learn more"
  },
  {
    imgUrl: "https://weboin.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-29-at-15.jpg.webp",
    subheading: "Management",
    heading: "Social Media Management",
    contentTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    contentParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
    ],
    buttonText: "Learn more"
  }
];

const [popupopen,setpopupopen] = useState(false)
const [cardID,setCardID] = useState('')
const handlepopup = (index) =>{
  setpopupopen(true)
  setCardID(index)
  console.log(index)
  console.log()
}
  return (
<>
<div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <div className='flex flex-col items-center justify-center'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-7xl font-bold font-sans"
        >
          MONTOYA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
          className="text-lg lg:text-2xl mt-4 text-center px-4 lg:px-20 text-gray-400 w-4/5"
        >
          WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION OF DESIGN AND TECHNOLOGY.
        </motion.p>
      </div>
    </div>

    <div>
        {galleryItems.map((item, index) => (
        <div key={index} className="h-dvh sticky top-0">
        
            <ImageCard
              key={index}
              src={item.imgUrl}
              alt={`Gallery Image ${index}`}
              idx = {index}
              handlepopup = {handlepopup}
            />
          
        </div>
      ))}
        
      </div>

            {popupopen && (
  <div className='bg-[#00000090] w-screen h-full fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-50' onClick={() => setpopupopen(false)}>
    <div className='bg-white w-[80vw] h-[80vh] rounded-3xl flex flex-col items-center justify-center overflow-hidden' onClick={(e) => e.stopPropagation()}>
      
      {/* Left side: Image and Heading */}
      <div className='w-full gap-4 lg:gap-7 mt-5 px-4 lg:px-8 flex items-center justify-start'>
        <img 
          src={galleryItems[cardID].imgUrl} 
          alt="" 
          className='w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 object-cover rounded-full'
        />
        <h1 className='text-lg sm:text-xl md:text-4xl lg:text-3xl font-bold max-w-full '>
          {galleryItems[cardID].heading}
        </h1>
      </div>
      
      {/* Right side: Content and Links */}
      <div className='w-full h-full mt-5 md:mt-6 lg:mt-5 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 flex flex-col justify-between overflow-y-auto'>
        <div className='max-h-[70vh] overflow-y-auto'>
          <p className='text-sm sm:text-base md:text-2xl lg:text-lg text-gray-700 max-w-full'>
            {galleryItems[cardID].contentParagraphs}
          </p>
        </div>
        <div>
          {/* <button className='Order-btn mb-4'>Order Now</button> */}
          <button onClick={() => setpopupopen(false)} className='text-sm md:text-2xl lg:text-lg text-white mt-3 bg-red-500 hover:bg-red-300 rounded-full  px-4 py-2 lg:px-5 lg:py-2 hover:text-black focus:bg-darkred'>
            Close
          </button>
        </div>
      </div>
      
    </div>
  </div>
  
)}

</>


  );
};

export default PortfolioMain;




