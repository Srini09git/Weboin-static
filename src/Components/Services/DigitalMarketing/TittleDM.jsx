
"use client"
import React, { useMemo } from 'react';
import { Parallax } from 'react-parallax';

const TittleDM = () => {
  const bgImage = useMemo(() => 'https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg', []);

  return (
    <div className="smooth-scroll">
      <Parallax
        strength={150}  // Lowered the strength value for better performance
        bgImageAlt="bg"
        bgImage={bgImage}
        className="object-cover lg:pb-0 pb-20 xl:h-screen mb-20 "
      >
        <div className="text-start flex flex-col justify-end mb-3 lg:mb-20 py-2 px-4 md:px-10 md:py-12">
          <h1 className="md:text-6xl font-bold text-2xl py-5 pb-8 mt-0 pt-14 md:pt-28 text-gray-100">
            Digital Marketing
          </h1>
          <p className="text-base leading-relaxed max-w-xl text-gray-100">
            Established in 2013, Weboin has continuously evolved alongside the
            ever-changing landscape of the internet, adapting cutting-edge
            technologies to deliver impactful digital marketing solutions. With a
            rich history of pushing boundaries and embracing emerging trends,
            Weboin remains committed to empowering businesses with the latest in
            web technology to drive growth and success in the digital sphere.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default TittleDM;
