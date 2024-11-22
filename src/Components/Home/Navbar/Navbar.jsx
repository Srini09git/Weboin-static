"use client";
import React, { useState } from 'react';
import Link from 'next/link';
//import Logo from "../../../../public/logo/WEBOINBANNER.png.webp"
import Image from 'next/image';


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="#" legacyBehavior>
          <a className="flex items-center">
            <Image
              src=""
              className="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full lg:flex lg:w-auto  px-36 ml-80 lg:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link href="/" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/About" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
              </Link>
            </li>
            <li className="relative">
              <button onClick={toggleDropdown} className="flex items-center py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" className="ml-2 h-4 w-4">
                  <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute z-10 w-48 py-2 mt-2 bg-white border border-gray-200 rounded shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col gap-4 px-3 justify-center items-center">
                    <h1 className="font-semibold text-lg text-center">
                      We provide <br /> the best service <br /> for you
                    </h1>
                    <div className="w-24 shadow img-ll">
                      {/* <img
                        src="https://blog.weboin.com/wp-content/uploads/2024/05/card.png"
                        alt="Service Card"
                      />
                      */}
                    </div>
                  </div>
                  <ul className="sub-links flex flex-col gap-2 items-center capitalize font-medium justify-between">
                    <li>
                      <Link href="/Section/Digi" legacyBehavior>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Digital Marketing</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Section/Webdev" legacyBehavior>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Web Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Section/Seo" legacyBehavior>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">SEO</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Section/Social" legacyBehavior>
                        <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">Social Media Marketing</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/Section/Port" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/Section/Call" legacyBehavior>
                <a className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
