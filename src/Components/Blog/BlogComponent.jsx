import React from 'react'
import HomeBlog from "@/Components/Blog/HomeBlog";
import MainBlog from "@/Components/Blog/MainBlog";

 
const Blogc = [
{id:"1",
    field: "Technology",
    name: "Mario Sanchez",
    date: "October 08, 2022",
    aboutText:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    imageUrl:
      "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75",
    head: "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limelight.",
    para: "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope needed to compete. Given the disruption observed today across industries and segments.",
    time: "3 Min read"
  },
  {id:"2",
    field: "Lifestyle",
    name: "Joshua Wood",
    date: "October 21, 2022",
    aboutText:
      "5 Effective Brain Recharging Activities No One is Talking About",
    para: "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope needed to compete. Given the disruption observed today across industries and segments.",
    imageUrl:
      "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    time: "3 Min read"
  },
  {id:"3",
    field: "Technology",
    time: "3 Min read",
    name: "Emma Smith",
    date: "November 5, 2022",
    aboutText: "The Future of Artificial Intelligence in Everyday",
    imageUrl:
      "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    head: "Artificial Intelligence (AI) has been revolutionizing industries and changing the way we interact with technology.",
    para: "From voice assistants like Siri and Alexa to recommendation systems on streaming platforms, AI has become an integral part of our daily lives. As AI continues to advance, its applications are expanding into new areas such as healthcare, finance, and transportation. This blog explores the current state of AI technology and its potential impact on society.",
  },
  {id:"4",
    field: "Technology",
    name: "Emma Smith",
    date: "November 5, 2022",
    time: "3 Min read",
    aboutText: "The Future of Artificial Intelligence in Everyday Life",
    imageUrl: "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    head: "Artificial Intelligence (AI) has been revolutionizing industries and changing the way we interact with technology.",
    para: "From voice assistants like Siri and Alexa to recommendation systems on streaming platforms, AI has become an integral part of our daily lives. As AI continues to advance, its applications are expanding into new areas such as healthcare, finance, and transportation. This blog explores the current state of AI technology and its potential impact on society."
  },
  {id:"5",
    field: "Technology",
    name: "Emma Smith",
    date: "November 5, 2022",
    time: "3 Min read",
    aboutText: "The Future of Artificial Intelligence in Everyday Life",
    imageUrl: "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    head: "Artificial Intelligence (AI) has been revolutionizing industries and changing the way we interact with technology.",
    para: "From voice assistants like Siri and Alexa to recommendation systems on streaming platforms, AI has become an integral part of our daily lives. As AI continues to advance, its applications are expanding into new areas such as healthcare, finance, and transportation. This blog explores the current state of AI technology and its potential impact on society."
  },
   {id:"6",
    field: "Technology",
    name: "Emma Smith",
    date: "November 5, 2022",
    time: "3 Min read",
    aboutText: "The Future of Artificial Intelligence in Everyday Life",
    imageUrl: "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    head: "Artificial Intelligence (AI) has been revolutionizing industries and changing the way we interact with technology.",
    para: "From voice assistants like Siri and Alexa to recommendation systems on streaming platforms, AI has become an integral part of our daily lives. As AI continues to advance, its applications are expanding into new areas such as healthcare, finance, and transportation. This blog explores the current state of AI technology and its potential impact on society."
  },
  {id:"7",
    field: "Travel",
    name: "Sophie Brown",
    date: "November 15, 2022",
    time: "3 Min read",
    aboutText: "Discovering Hidden Gems: Off the Beaten Path Travel ",
    imageUrl:
      "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    head: "Traveling off the beaten path offers unique experiences and allows you to discover hidden gems that are often overlooked by tourists.",
    para: "Whether it's exploring remote villages in Southeast Asia or hiking lesser-known trails in the Alps, off the beaten path travel allows you to immerse yourself in local culture and natural beauty. This blog highlights some of the best off the beaten path destinations around the world and provides tips for planning your next adventure.",
  },
  {id:"8",
    field: "Technology",
    name: "Emma Smith",
    date: "November 5, 2022",
    time: "3 Min read",
    aboutText: "The Future of Artificial Intelligence in Everyday Life",
    imageUrl: "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    head: "Artificial Intelligence (AI) has been revolutionizing industries and changing the way we interact with technology.",
    para: "From voice assistants like Siri and Alexa to recommendation systems on streaming platforms, AI has become an integral part of our daily lives. As AI continues to advance, its applications are expanding into new areas such as healthcare, finance, and transportation. This blog explores the current state of AI technology and its potential impact on society."
  },
  {id:"9",
    field: "Travel",
    name: "Sophie Brown",
    date: "August 18, 2024",
    time: "3 Min read",
    aboutText: "Discovering Hidden Gems: Off the Beaten Path Travel ",
    imageUrl:
      "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=640&q=75",
    head: "Traveling off the beaten path offers unique experiences and allows you to discover hidden gems that are often overlooked by tourists.",
    para: "Whether it's exploring remote villages in Southeast Asia or hiking lesser-known trails in the Alps, off the beaten path travel allows you to immerse yourself in local culture and natural beauty. This blog highlights some of the best off the beaten path destinations around the world and provides tips for planning your next adventure.",
  },
  
  {id:"10",
    field: "developer",
    name: "Mario Sanchez",
    date: "August 19, 2024",
    aboutText:
      "Nee than da developerah unnadha da developer ah poduranum !",
    imageUrl:
      "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75",
    head: "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limelight.",
    para: "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope needed to compete. Given the disruption observed today across industries and segments.",
    time: "3 Min read"
  },
  {id:"11",
    field: "Technology",
    name: "Mario Sanchez",
    date: "August 29, 2024",
    aboutText:
      "The Future of Artificial Intelligence in Everyday Life !",
    imageUrl:
      "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75",
    head: "Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades, is back in the limelight.",
    para: "Simply understood, brand architecture is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope needed to compete. Given the disruption observed today across industries and segments.",
    time: "3 Min read"
  }
 
 
  // Add more blog post objects as needed
 
];
 
const BlogComponent = () => {
    const newContent = Blogc[Blogc.length -0];
    console.log(newContent);
    const blogPostsExceptLast = Blogc.slice(0, -1);
 
    return (
      <div>
        <div>
          <div className="justify-center items-center">
            <MainBlog newContent={newContent} />
            <HomeBlog blogPostsExceptLast={blogPostsExceptLast} />
          </div>
        </div>
      </div>
    );
  };
 
  export default BlogComponent;