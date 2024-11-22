"use client";
import Image from 'next/image';
import bg1 from '../../../../public/ServiceImage/branding.jpg';
import AboutCount from './AboutCount';

const HomeAbout = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-center items-center gap-10 lg:gap-32">
      <div className=" w-full p-2 md:p-4 lg:p-6">

        <div className=" mt-5 ml-0 lg:ml-0 xl:ml-0 lg:w-full">
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-0 lg:w-6/12 w-10/12  ' >
            Great work for <span role="img" aria-label="smile" className='text-orange-600 font-bold'>🌍 <br /> great people</span>
          </h1>
        </div>
        <div className="container mx-auto mt-14 flex flex-col lg:flex-row items-start">
          <div className="w-full gap-10 lg:gap-20  lg:w-1/2 lg:pr-12">
            <div className='flex flex-col start justify-between gap-10'>
              <div className='h-full text-[18px] font-Kanit, Sans-serif'>
                <p className="text-lg mb-6  ">
                  We put people first, understanding that a well-crafted product significantly impacts the lives of those who use it. By empowering users, were able to solve unique problems, accelerate progress and unlock potential for our clients.
                </p>
                <p className="text-lg mb-6 ">
                  Our independent spirit drives our creative energy and approach to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.
                </p>
              </div>
              <div className='hidden lg:block'>
                <AboutCount />

              </div>
            </div>

          </div>
          <div className="w-full max-h-full lg:w-1/2 mb-12 lg:mb-0">

            <Image
              src={bg1}
              alt="Team"
              className="rounded-2xl shadow-lg h-full"

            />
          </div>
          <div className='block lg:hidden'>
            <AboutCount />
          </div>
        </div>
      </div>

    </div>

  );
};

export default HomeAbout;

