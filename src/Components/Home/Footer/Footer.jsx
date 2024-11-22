"use client"
import Link from 'next/link';
import Image from 'next/image';
import Footerbg from '../../../../public/BGD/backgroundClouds.jpg'
import Footermainbg from '../../../../public/BGD/footerbgshape.png'

const Footer = () => {
  return (
    <div className='w-full mt-20 pt-16 relative'>

      <section className="relative text-white justify-center w-full bg-black">
        {/*  <div className="container mx-auto flex justify-center p-5">
          <div className="py-10 rounded-2xl md:max-w-5xl md:z-10 md:shadow-lg lg:max-w-5xl relative md:top-1/2 lg:top-1/2 transform md:-translate-y-1/2 lg:-translate-y-1/2 sm:-translate-y-1/2">
            <div className="absolute inset-0">
              <Image
                src={Footerbg}
                alt="grid"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl opacity-100 bg-slate-900"
              />
            </div>
            <div className="relative flex flex-col items-center z-20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 px-10 ">Subscribe to my newsletter</h2>
                <p className="lg:text-lg px-8 lg:px-28 text-sm ">
                  Join 10,000+ designers and get creative site breakdowns, design musings, and tips every Monday.
                </p>
              </div>
              <form className="flex flex-col md:flex-row items-center max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-t-md md:rounded-l-md text-gray-900 mb-2 md:mb-0 md:mr-2"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-6 py-4 rounded-b-md md:rounded-r-md font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div> */}
      </section>


      <footer
        className="bg-black  text-gray-100 py-12 mt-[-100px] md:mt-[-50px] lg:mt-[-50px] relative"
        style={{
          backgroundImage: `url(${Footermainbg.src})`, // Use the Footermainbg image as a background
          backgroundSize: 'contain', // Adjust size to fit within the container
          backgroundPosition: 'top right', // Align the image to the top-right corner
          backgroundRepeat: 'no-repeat', // Prevent the image from repeating
          padding: '80px 0 0 0', // Top padding to adjust content positioning
        }}
      >


        <div className="container mx-auto px-9">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 md:flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-6xl font-bold mb-4 py-12 md:py-10">Lets make something<br /><span className='text-orange-600   '> great together</span></h2>

            </div>
            <div className="flex flex-col md:flex-row md:ml-auto md:space-x-10">
              <div className="mb-8 md:mb-0 md:flex-1">
                <h2 className="text-xl font-bold mb-4">Useful Links</h2>
                <ul className="text-gray-300">
                  <li className="mb-2"><Link href="/Section/Digitalmarket">Digital Marketing</Link></li>
                  <li className="mb-2"><Link href="/Section/ECommerce">E-commerce Website Development</Link></li>
                  <li className="mb-2"><Link href="/Section/Seo">SEO</Link></li>
                  <li className="mb-2"><Link href="/Section/LeadGenServices">Lead Generation Service</Link></li>
                  <li className="mb-2"><Link href="/Section/MobileApp">Mobile App Development</Link></li>
                  <li className="mb-2"><Link href="/Section/MobileAppPromo">Mobile App Promotions</Link></li>
                  <li className="mb-2"><Link href="/Section/Social">Social Media Marketing</Link></li>
                  <li className="mb-2"><Link href="#">Strategic Branding</Link></li>
                  <li className="mb-2"><Link href="/Section/Webdev">Website Development</Link></li>
                  <li className="mb-2"><Link href="#">Pay Per Click</Link></li>
                  <li className="mb-2"><Link href="#">CMS</Link></li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0 md:flex-1">
                <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                <ul className="text-gray-300">
                  <li className="mb-2"><Link href="/">Home</Link></li>
                  <li className="mb-2"><Link href="/About">About Us</Link></li>
                  <li className="mb-2"><Link href="">Services</Link></li>
                  <li className="mb-2"><Link href="/Portfolio">Portfolio</Link></li>
                  <li className="mb-2"><Link href="/Our Works">Our Works</Link></li>
                  <li className="mb-2"><Link href="/Contacts">Contact Us</Link></li>
                  <li className="mb-2"><Link href="/Careers">Careers</Link></li>
                  <li className="mb-2"><Link href="/Blog">Blogs</Link></li>
                  <li className="mb-2"><Link href="#">Privacy Policy</Link></li>
                  <li className="mb-2"><Link href="#">Disclaimer Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <div className="mt-8 flex justify-between items-center">
              <div className="flex flex-wrap gap-4 text-sm md:text-base">
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.29 14.71L15 15l-3-3-3 3-1.29-1.29L9 12l-3-3 1.29-1.29L12 9l3-3 1.29 1.29L15 12l3 3-1.29 1.29z" />
                  </svg>
                  Email me
                </a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Dribbble</a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Instagram</a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Twitter</a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">LinkedIn</a>
                <a href="#" className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full">Github</a>
              </div>
            </div>
            <p className="text-sm font-normal text-gray-400 md:ml-auto mt-7 text-end">
              &copy; 2024 Tailwind Awesome. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;



{/*<footer
className="bg-black  text-gray-100 py-12 mt-[-100px] md:mt-[-50px] lg:mt-[-50px] relative"
style={{
  backgroundImage: `url(${Footerbg.src})`, // Use the Footermainbg image as a background
  backgroundSize: 'cover', // Adjust size to fit within the container
  backgroundPosition: 'center', // Align the image to the top-right corner
  // Top padding to adjust content positioning
}}
> */}