import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import EastIcon from '@mui/icons-material/East';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  { title: "Web Development", link: "/Section/Digitalmarket/2", image: "https://img.freepik.com/free-vector/mass-media-design-concept_98292-7567.jpg?t=st=1722841299~exp=1722844899~hmac=66d99f8c0c561e07e7dd258fc4eba1a07074e39380aab9282bdc040ed47ce689&w=740" },
  { title: "Digital Marketing", link: "/Section/Digitalmarket/1", image: "https://img.freepik.com/free-vector/modern-productivity-concept-with-flat-design_23-2147966172.jpg?t=st=1722841485~exp=1722845085~hmac=103b0a86fa78ae1a2fee79c69d1fab996013b4e36c0fa592bac480fc8d41e3f0&w=740" },
  { title: "E-commerce Website Development", link: "/Section/Digitalmarket/3", image: "https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?t=st=1722841563~exp=1722845163~hmac=dd16888c511f6db2d21c24ed0843c6507789899c1ee8b8e4b8ba50d2bf387474&w=740" },
  { title: "Mobile App Promotion", link: "/Section/Digitalmarket/7", image: "https://img.freepik.com/free-vector/two-young-man-use-strategy-competing-business-goals-cartoon-character-graphic-designer-vector-illustration_1150-56249.jpg?t=st=1722843599~exp=1722847199~hmac=0c527594a3a1ba47ccfaafed2759d25bf25648a00aa1f86ad046215e5f42eaa7&w=996" },
  { title: "Mobile App Development", link: "/Section/Digitalmarket/6", image: "https://img.freepik.com/free-vector/work-office-computer-man-woman-business-character-marketing-online-employee-technology-business-man-cartoon-co-working-flat-design-freelance_1150-41790.jpg?t=st=1722841675~exp=1722845275~hmac=9aa8314801850ac1740509f8e2a0e3d9dab57417361504471a7abaae431bf02b&w=996" },
  { title: "Lead Generation Service", link: "/Section/Digitalmarket/5", image: "https://img.freepik.com/free-vector/employee-working-office-interior-workplace-flat-vector-illustration_1150-37453.jpg?t=st=1722841721~exp=1722845321~hmac=7beb4f0225af58f0d8b5a2aa58dfd81a91c2c53ecdd52191633cd4b85e7cf23a&w=740" },
  { title: "Social Media Marketing", link: "/Section/Digitalmarket/4", image: "https://img.freepik.com/free-vector/social-networks-geometric-shape_23-2147543432.jpg?t=st=1722841779~exp=1722845379~hmac=9083f7483aa157c8ab69ac5598dbfbac041dbaad5c1573f12d9df5d8c03a3b04&w=740" },
  { title: "Content Management Systems", link: "/Section/Digitalmarket/8", image: "https://img.freepik.com/free-vector/social-networks-geometric-shape_23-2147543432.jpg?t=st=1722841779~exp=1722845379~hmac=9083f7483aa157c8ab69ac5598dbfbac041dbaad5c1573f12d9df5d8c03a3b04&w=740" },
  { title: "SEO", link: "/Section/Digitalmarket/9", image: "https://img.freepik.com/free-vector/social-networks-geometric-shape_23-2147543432.jpg?t=st=1722841779~exp=1722845379~hmac=9083f7483aa157c8ab69ac5598dbfbac041dbaad5c1573f12d9df5d8c03a3b04&w=740" }
];

const Tile = ({ title, link, image }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <a href={link} className="relative flex flex-col justify-between bg-black bg-opacity-70 text-white p-4 m-2 cursor-pointer h-96 transition-transform duration-300 overflow-hidden "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
    >
      <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${hover ? 'opacity-100 ' : 'opacity-30'}`}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
        <div className={`z-20 w-full text-end font-bold ${hover ? "block" : "hidden"} `}>
          <EastIcon className='-rotate-45 font-black text-5xl' fontSize='large' style={{ color: 'black' }} />
        </div>
      </div>
      <div className={`absolute inset-0 w-full h-full bg-gradient-to-t from-white from-30% to-transparent to-60% transition-opacity duration-300 ${hover ? 'opacity-1000' : 'opacity-0'}`}></div>
      <h2 className={`relative flex font-bold transition-transform duration-300 ${hover ? 'text-3xl translate-y-60 text-black p-2 ' : 'text-3xl text-white'}`}>
        {title}
      </h2>
    </a>
  );
};

const Newservice = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div data-aos="fade-up" data-aos-delay="100">
        <h2 className="font-black text-3xl text-center py-5 text-gray-800">Our Services</h2>
        <p className="max-w-md mx-auto mb-4 mt-1 text-gray-500 text-center">
          We are thankful to each and every company sponsored our plugin which helped us to continue working on it.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((item, index) => (
          <Tile key={index} title={item.title} link={item.link} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default Newservice;