"use client"
import { useParams } from 'next/navigation';
import React from 'react';


const ContentBlog = () => {
  const data = [
    {
      "id": 1,
      "htmlContent": (
        <div className="p-5 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-3 text-blue-600">
            Architectural Engineering Wonders of the Modern Era
          </h1>
          <p className="mb-4 text-gray-500">
            By Mario Sanchez on October 08, 2022
          </p>
          <img
            className="w-full h-56 object-cover mb-5"
            src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=1920&q=75"
            alt="Architectural Engineering Wonders"
          />
          <p className="mb-4 leading-7">
            Architectural engineering has evolved tremendously in the modern era, offering inspiration through various technological and design advancements. In this article, we explore some of the most impressive engineering wonders.
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li>Burj Khalifa - Dubai, UAE (2010)</li>
            <li>The Shard - London, UK (2012)</li>
            <li>One World Trade Center - New York, USA (2014)</li>
          </ul>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr>
                <th className="bg-blue-100 font-bold border border-blue-300 p-3 text-left">Wonder</th>
                <th className="bg-blue-100 font-bold border border-blue-300 p-3 text-left">Height (m)</th>
                <th className="bg-blue-100 font-bold border border-blue-300 p-3 text-left">Completion Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-blue-300 p-3 text-left">Burj Khalifa</td>
                <td className="border border-blue-300 p-3 text-left">828</td>
                <td className="border border-blue-300 p-3 text-left">2010</td>
              </tr>
              <tr>
                <td className="border border-blue-300 p-3 text-left">The Shard</td>
                <td className="border border-blue-300 p-3 text-left">310</td>
                <td className="border border-blue-300 p-3 text-left">2012</td>
              </tr>
              <tr>
                <td className="border border-blue-300 p-3 text-left">One World Trade Center</td>
                <td className="border border-blue-300 p-3 text-left">541</td>
                <td className="border border-blue-300 p-3 text-left">2014</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4 leading-7">
            These marvels not only showcase engineering excellence but also symbolize the economic and cultural aspirations of their regions.
          </p>
        </div>
      )
    },
    {
      "id": 2,
      "htmlContent": (
        <div className="p-5 max-w-2xl mx-auto bg-gray-50">
          <h1 className="text-3xl font-semibold mb-4 text-red-600">
            Innovations in Structural Engineering
          </h1>
          <p className="mb-2 text-gray-700 italic">
            By Jane Doe on November 12, 2022
          </p>
          <img
            className="w-full h-64 object-cover rounded-md mb-4"
            src="https://example.com/image2.jpg"
            alt="Innovations in Structural Engineering"
          />
          <p className="mb-4 leading-8">
            Structural engineering has seen a number of breakthroughs in recent years, from new materials to innovative design techniques. This article explores some of the most exciting developments.
          </p>
          <blockquote className="border-l-4 border-red-500 pl-4 mb-6">
            The future of construction is being shaped by innovations in materials and techniques.
          </blockquote>
          <p className="mb-4 leading-7">
            In particular advancements in earthquake-resistant designs and the use of carbon fiber in construction have revolutionized the industry. The following table highlights some of the latest materials used in modern constructions
          </p>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr>
                <th className="bg-gray-100 font-bold border border-gray-300 p-3 text-left">Material</th>
                <th className="bg-gray-100 font-bold border border-gray-300 p-3 text-left">Application</th>
                <th className="bg-gray-100 font-bold border border-gray-300 p-3 text-left">Year Introduced</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 text-left">Carbon Fiber Reinforcement</td>
                <td className="border border-gray-300 p-3 text-left">High-rise Buildings</td>
                <td className="border border-gray-300 p-3 text-left">2015</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-left">Self-healing Concrete</td>
                <td className="border border-gray-300 p-3 text-left">Bridges</td>
                <td className="border border-gray-300 p-3 text-left">2018</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 text-left">Smart Glass</td>
                <td className="border border-gray-300 p-3 text-left">Commercial Buildings</td>
                <td className="border border-gray-300 p-3 text-left">2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      "id": 3,
      "htmlContent": (<div class="p-6 max-w-2xl mx-auto bg-white shadow-lg">
        <h1 class="text-2xl font-bold mb-3 text-green-700">
          The Future of Green Architecture
        </h1>
        <p class="mb-3 text-gray-600">
          By John Smith on September 15, 2022
        </p>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <img
            class="w-full h-40 object-cover rounded-md"
            src="https://example.com/image4.jpg"
            alt="Green Architecture"
          />
          <img
            class="w-full h-40 object-cover rounded-md"
            src="https://example.com/image5.jpg"
            alt="Sustainable Building"
          />
        </div>
        <p class="mb-4 leading-7">
          Green architecture is more important than ever, with architects and engineers working to create buildings that are not only energy-efficient but also environmentally friendly.
        </p>
        <table class="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th class="bg-green-100 font-bold border border-green-300 p-3 text-left">Feature</th>
              <th class="bg-green-100 font-bold border border-green-300 p-3 text-left">Benefit</th>
              <th class="bg-green-100 font-bold border border-green-300 p-3 text-left">Year Adopted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-green-300 p-3 text-left">Solar Panels</td>
              <td class="border border-green-300 p-3 text-left">Reduces Energy Costs</td>
              <td class="border border-green-300 p-3 text-left">2010</td>
            </tr>
            <tr>
              <td class="border border-green-300 p-3 text-left">Green Roofs</td>
              <td class="border border-green-300 p-3 text-left">Improves Insulation</td>
              <td class="border border-green-300 p-3 text-left">2015</td>
            </tr>
            <tr>
              <td class="border border-green-300 p-3 text-left">Rainwater Harvesting</td>
              <td class="border border-green-300 p-3 text-left">Conserves Water</td>
              <td class="border border-green-300 p-3 text-left">2018</td>
            </tr>
          </tbody>
        </table>
        <p class="mb-4 leading-7">
          These features are essential as we move towards more sustainable construction practices that have less impact on the environment.
        </p>
      </div>)
    },
    {
      "id": 4,
      "htmlContent": (<div class="p-5 max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold mb-4 text-yellow-600">
          Modern Bridge Engineering
        </h1>
        <p class="mb-4 text-gray-500">
          By Sarah Johnson on December 01, 2022
        </p>
        <img
          class="w-full h-56 object-cover mb-5"
          src="https://example.com/image6.jpg"
          alt="Modern Bridge Engineering"
        />
        <p class="mb-4 leading-7">
          Bridges have always been a vital part of infrastructure, but modern bridge engineering has taken the art of bridge-building to new heights.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <img class="w-full h-32 object-cover rounded-md" src="https://example.com/image7.jpg" alt="Bridge 1" />
          <img class="w-full h-32 object-cover rounded-md" src="https://example.com/image8.jpg" alt="Bridge 2" />
          <img class="w-full h-32 object-cover rounded-md" src="https://example.com/image9.jpg" alt="Bridge 3" />
        </div>
        <table class="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th class="bg-yellow-100 font-bold border border-yellow-300 p-3 text-left">Bridge</th>
              <th class="bg-yellow-100 font-bold border border-yellow-300 p-3 text-left">Location</th>
              <th class="bg-yellow-100 font-bold border border-yellow-300 p-3 text-left">Year Built</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-yellow-300 p-3 text-left">Golden Gate Bridge</td>
              <td class="border border-yellow-300 p-3 text-left">San Francisco, USA</td>
              <td class="border border-yellow-300 p-3 text-left">1937</td>
            </tr>
            <tr>
              <td class="border border-yellow-300 p-3 text-left">Millau Viaduct</td>
              <td class="border border-yellow-300 p-3 text-left">Millau, France</td>
              <td class="border border-yellow-300 p-3 text-left">2004</td>
            </tr>
            <tr>
              <td class="border border-yellow-300 p-3 text-left">Akashi Kaikyō Bridge</td>
              <td class="border border-yellow-300 p-3 text-left">Kobe, Japan</td>
              <td class="border border-yellow-300 p-3 text-left">1998</td>
            </tr>
          </tbody>
        </table>
      </div>)
    },
    {
      "id": 5,
      "htmlContent": (<div class="p-6 max-w-2xl mx-auto bg-blue-50 rounded-lg">
        <h1 class="text-2xl font-semibold mb-3 text-indigo-700">
          Advances in Skyscraper Design
        </h1>
        <p class="mb-4 text-gray-600">
          By Michael Brown on January 15, 2023
        </p>
        <img
          class="w-full h-60 object-cover mb-4 rounded-lg"
          src="https://example.com/image8.jpg"
          alt="Skyscraper Design"
        />
        <p class="mb-4 leading-7">
          Skyscrapers have long been a symbol of urban development, but recent advances in design and technology have pushed these buildings to new heights—literally and figuratively.
        </p>
        <div class="flex justify-between items-center mt-4">
          <span class="text-gray-500">Read more...</span>
          <span class="text-gray-500">15 min read</span>
        </div>
      </div>)
    },
    {
      "id": 6,
      "htmlContent": (<div class="p-5 max-w-2xl mx-auto bg-gray-100">
        <h1 class="text-3xl font-bold mb-4 text-purple-600">
          Cutting-Edge Stadium Designs
        </h1>
        <p class="mb-4 text-gray-500">
          By Emily Davis on March 20, 2023
        </p>
        <img
          class="w-full h-56 object-cover mb-4 rounded-md"
          src="https://example.com/image10.jpg"
          alt="Stadium Design"
        />
        <p class="mb-4 leading-8">
          Stadiums are no longer just places to watch sports—they are architectural marvels that enhance the fan experience with cutting-edge design and technology.
        </p>
        <ul class="list-disc pl-5 mb-6">
          <li>Wembley Stadium - London, UK (2007)</li>
          <li>AT&T Stadium - Dallas, USA (2009)</li>
          <li>Allianz Arena - Munich, Germany (2005)</li>
        </ul>
      </div>)
    },
    {
      "id": 7,
      "htmlContent": (<div class="p-5 max-w-2xl mx-auto bg-white border border-gray-300">
        <h1 class="text-2xl font-semibold mb-3 text-blue-600">
          Innovative Airport Terminals
        </h1>
        <p class="mb-3 text-gray-600">
          By James Lee on April 10, 2023
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <img
            class="w-full h-32 object-cover rounded-md"
            src="https://example.com/image12.jpg"
            alt="Airport Terminal"
          />
          <img
            class="w-full h-32 object-cover rounded-md"
            src="https://example.com/image13.jpg"
            alt="Airport Terminal"
          />
        </div>
        <p class="mb-4 leading-7">
          Airport terminals have evolved from simple transit hubs to complex, multi-functional spaces that prioritize passenger experience, sustainability, and cutting-edge design.
        </p>
        <blockquote class="border-l-4 border-blue-500 pl-4 mb-6">
          The future of air travel is being shaped by innovative terminal designs.
        </blockquote>
      </div>)
    },
    {
      "id": 8,
      "htmlContent": (<div class="p-6 max-w-2xl mx-auto bg-green-50">
        <h1 class="text-2xl font-bold mb-3 text-green-600">
          Sustainable Building Materials
        </h1>
        <p class="mb-2 text-gray-500">
          By Laura Wilson on May 05, 2023
        </p>
        <img
          class="w-full h-56 object-cover mb-5 rounded-md"
          src="https://example.com/image14.jpg"
          alt="Sustainable Building Materials"
        />
        <p class="mb-4 leading-8">
          As the construction industry becomes more environmentally conscious, sustainable building materials are playing a key role in reducing the carbon footprint of new developments.
        </p>
        <ul class="list-disc pl-6 mb-6">
          <li>Bamboo - Flooring</li>
          <li>Recycled Steel - Structural Support</li>
          <li>Hempcrete - Insulation</li>
        </ul>
      </div>)
    },
    {
      "id": 9,
      "htmlContent": (<div class="p-5 max-w-2xl mx-auto bg-gray-200 rounded-lg">
        <h1 class="text-2xl font-bold mb-4 text-red-600">
          The Rise of Modular Construction
        </h1>
        <p class="mb-3 text-gray-700">
          By Chris Martinez on June 18, 2023
        </p>
        <img
          class="w-full h-60 object-cover mb-4 rounded-lg"
          src="https://example.com/image16.jpg"
          alt="Modular Construction"
        />
        <p class="mb-4 leading-7">
          Modular construction is quickly gaining popularity as a method of building that is both efficient and cost-effective. This article explores the benefits and challenges of this innovative approach.
        </p>
        <blockquote class="border-l-4 border-red-500 pl-4 mb-6">
          Modular construction offers a range of benefits but comes with its own set of challenges.
        </blockquote>
      </div>)
    },
    {
      "id": 10,
      "htmlContent": (<div class="p-5 max-w-2xl mx-auto bg-white shadow-md">
        <h1 class="text-2xl font-bold mb-3 text-blue-600">
          Engineering Marvels of the Middle East
        </h1>
        <p class="mb-4 text-gray-600">
          By Ahmed Hassan on July 25, 2023
        </p>
        <img
          class="w-full h-56 object-cover mb-5 rounded-md"
          src="https://example.com/image18.jpg"
          alt="Engineering Marvels of the Middle East"
        />
        <p class="mb-4 leading-8">
          The Middle East is home to some of the most impressive engineering marvels of the modern era, from towering skyscrapers to sprawling man-made islands.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <img class="w-full h-40 object-cover rounded-md" src="https://example.com/image19.jpg" alt="Project 1" />
          <img class="w-full h-40 object-cover rounded-md" src="https://example.com/image20.jpg" alt="Project 2" />
        </div>
      </div>)
    },
    {
      "id": 11,
      "htmlContent": (<div class="p-5 max-w-2xl mx-auto bg-white shadow-md">
        <h1 class="text-2xl font-bold mb-3 text-blue-600">
        The Rise of Modular Construction
        </h1>
        <p class="mb-4 text-gray-600">
        By Chris Martinez on June 18, 2023
        </p>
        <img
          class="w-full h-56 object-cover mb-5 rounded-md"
          src="https://example.com/image16.jpg"
          alt="Engineering Marvels of the Middle East"
        />
        <p class="mb-4 leading-8">
        Modular construction is quickly gaining popularity as a method of building that is both efficient and cost-effective. This article explores the benefits and challenges of this innovative approach..
        </p>
        <div class="grid grid-cols-2 gap-4">
          <img class="w-full h-40 object-cover rounded-md" src="https://example.com/image19.jpg" alt="Project 1" />
          <img class="w-full h-40 object-cover rounded-md" src="https://example.com/image20.jpg" alt="Project 2" />
        </div>
      </div>)
    }
    // Add more items as needed, similarly structured
  ];

  const { blogdes } = useParams();

  const blogData = data.find((item) => item.id == blogdes);

  if (!blogData) {
    return <div>Blog not found</div>;
  }

  return <>{blogData.htmlContent}</>;
};

export default ContentBlog;
