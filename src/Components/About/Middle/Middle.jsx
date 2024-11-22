'use client';
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Middle = () => {

  AOS.init()

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 just">


        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="mb-6 text-3xl font-bold md:text-5xl lg:mb-8 ">
          We are specialized in Digital Marketing
        </h2>

        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100" className="mb-8 max-w-lg text-sm text-gray-500 sm:text-base lg:mb-12  text-left">
          Our team of dedicated professionals is committed to staying ahead of the curve, leveraging the latest technologies and trends to ensure your brand stands out in a crowded digital marketplace.Trust us to elevate your digital presence and unlock your full potential in the digital world.
        </p>




        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <img data-aos="flip-left" data-aos-duration="1000" data-aos-delay="100"
            src="https://www.reliablesoft.net/wp-content/uploads/2023/03/digital-marketing-definition-new.png"
            alt=""
            className="inline-block h-full w-full rounded-2xl object-cover"
          />
          <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="100" className="flex bg-purple-200 flex-col gap-5 rounded-xl border border-solid border-black p-10 sm:p-20">
            <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
            <p className="text-sm text-gray-700 sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium excepturi cupiditate repellat dolores natus dignissimos est eveniet eaque ducimus. Eaque expedita illum voluptates ipsa iste impedit corrupti, deleniti laudantium mollitia!
              <br />
              <br />
              Massa id neque aliquam vestibulum morbi blandit. Nulla
              pellentesque dignissim enim sit amet venenatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Middle
