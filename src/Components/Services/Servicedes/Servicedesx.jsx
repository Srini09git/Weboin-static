'use client';
import React from 'react'
import Titledes from './Titledes'
import Maindes from './Maindes'
import Secdes from './Secdes'
import Testimonialdes from './Testimonialdes'
import GetinTouchdes from './GetinTouchdes'
import ServiceReusable from '../SReusable/ServiceReusable'
import SwiftLoading from '@/Components/Home/Whyweboin/SwiftLoading'
import { useParams } from 'next/navigation'


const Servicedesx = () => {
  
    const servicedatas = [
      {
        "id": 1,
        "Data": {
          "Title": [
            {
              "title": "Digital Marketing",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "Established in 2013, Weboin has continuously evolved alongside the ever-changing landscape of the internet, adapting cutting-edge technologies to deliver impactful digital marketing solutions. With a rich history of pushing boundaries and embracing emerging trends, Weboin remains committed to empowering businesses with the latest in web technology to drive growth and success in the digital sphere."
            }
          ],
          "Secdm": [
            {
              "title": "Digital Innovation Partner",
              "description": "Digital marketing refers to the strategic use of digital channels, platforms, and technologies to promote products, services, or brands to a targeted audience. It encompasses a wide range of online tactics and strategies that leverage the power of the internet and electronic devices to connect with potential customers, engage audiences, and drive desired actions. Digital marketing aims to create a strong online presence, increase brand visibility, and ultimately achieve business goals.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            },
            {
              "title": "Social Media Marketing",
              "description": "We understand that social media is not just a platform; it's a powerful tool to connect, engage, and build relationships with your audience. Our skilled social media marketing team is passionate about creating data-driven strategies that drive brand awareness, foster meaningful interactions, and generate measurable results.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": true
            },
            {
              "title": "Social Media Management",
              "description": "We understand the impact of social media on your brand's success. Social media management encompasses the strategic planning, creation, and execution of content across various social media platforms to achieve specific organizational goals. It involves developing a comprehensive strategy tailored to the target audience, creating engaging content that resonates with followers, and scheduling posts at optimal times for maximum reach and engagement.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            },
            {
              "title": "Content Marketing",
              "description": "Content is the cornerstone of digital marketing strategies. In an era where consumers are inundated with information, compelling and valuable content serves as the foundation for building brand awareness, driving engagement, and nurturing relationships with your audience. Content marketing involves the creation and distribution of relevant, informative, and entertaining content across various digital channels, including websites, blogs, social media platforms, email newsletters, and more.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": true
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Collaborate",
              "heading": "Digital Innovation Partner",
              "contentTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "contentParagraphs": [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
              ],
              "buttonText": "Learn more"
            },
            {
              "imgUrl": "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Marketing",
              "heading": "Social Media Marketing",
              "contentTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "contentParagraphs": [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
              ],
              "buttonText": "Learn more"
            },
            {
              "imgUrl": "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Management",
              "heading": "Social Media Management",
              "contentTitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              "contentParagraphs": [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reiciendis blanditiis aliquam aut fugit sint."
              ],
              "buttonText": "Learn more"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://i.ibb.co/4g1D9cv/imgslider1.png",
              "quote": "Some of the best work that was done!",
              "text": "Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.",
              "name": "Anna Smith",
              "role": "Senior Web Designer"
            },
            {
              "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlPlpTtK_z4wQ4W74DmV5pxpZYatxBAmzrg&s",
              "quote": "Amazing work done by the team!",
              "text": "Every project reflects our commitment to excellence. We believe in delivering top-quality work that exceeds our clients expectations.",
              "name": "John Doe",
              "role": "Creative Director"
            },
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Exceptional service and results!",
              "text": "The team consistently delivers exceptional work. Their dedication to our projects is evident in every detail.",
              "name": "Jane Doe",
              "role": "Marketing Manager"
            }
          ],
          "getintouch": "Want to talk strategy & Digital Marketing"
        }
      },
      {
        "id": 2,
        "Data": {
         "Title": [
            {
              "title": "Web Development",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "Established in 2013, Weboin has continuously evolved alongside the ever-changing landscape of the internet, adapting cutting-edge technologies to deliver impactful digital marketing solutions. With a rich history of pushing boundaries and embracing emerging trends, Weboin remains committed to empowering businesses with the latest in web technology to drive growth and success in the digital sphere."
            }
          ],
          "Secdm": [
            {
              "title": "Custom Website Development",
              "description": "We create custom websites tailored to your specific business requirements, ensuring a unique and engaging user experience.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            },
            {
              "title": "E-commerce Solutions",
              "description": "Our e-commerce development services help you set up an online store with seamless shopping experiences, payment gateways, and more.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": true
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Innovate",
              "heading": "Custom Web Solutions",
              "contentTitle": "Elevate Your Online Presence",
              "contentParagraphs": [
                "Our custom web development services are designed to provide you with a unique and competitive edge in the digital landscape.",
                "From responsive designs to scalable solutions, we ensure that your website meets your business objectives."
              ],
              "buttonText": "Learn more"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Excellent web development services!",
              "text": "Their attention to detail and ability to understand our needs made the development process smooth and effective.",
              "name": "Alice Johnson",
              "role": "Project Manager"
            }
          ],
          "getintouch": "Ready to take your web presence to the next level?"
        }
      },
      {
        "id": 3,
        "Data": {
          "Title": [
            {
              "title": "E-commerce Website Development",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "Our e-commerce website development services provide businesses with fully functional online stores that drive sales and enhance user experience."
            }
          ],
          "Secdm": [
            {
              "title": "Seamless Shopping Experience",
              "description": "We build e-commerce platforms that offer a smooth and engaging shopping experience for your customers, with easy navigation and checkout processes.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Optimize",
              "heading": "Boost Your Online Sales",
              "contentTitle": "Transform Your E-commerce Strategy",
              "contentParagraphs": [
                "Our solutions are designed to maximize your online sales with features such as advanced product search, secure payment gateways, and user-friendly interfaces.",
                "Let us help you create an online store that attracts and retains customers."
              ],
              "buttonText": "Explore More"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Exceptional e-commerce development!",
              "text": "The new online store has significantly boosted our sales and improved the user experience for our customers.",
              "name": "Michael Brown",
              "role": "E-commerce Manager"
            }
          ],
          "getintouch": "Interested in enhancing your e-commerce presence?"
        }
      },
      {
        "id": 4,
        "Data": {
          "Title": [
            {
              "title": "Social Media Management",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "We offer expert social media management services to help you build a strong online presence and engage effectively with your audience."
            }
          ],
          "Secdm": [
            {
              "title": "Strategic Social Media Planning",
              "description": "Our team develops strategic social media plans that align with your business goals and target audience, ensuring effective engagement and growth.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Engage",
              "heading": "Maximize Your Social Reach",
              "contentTitle": "Comprehensive Social Media Strategies",
              "contentParagraphs": [
                "We create and manage social media strategies that help you connect with your audience, increase brand awareness, and drive conversions.",
                "Our services include content creation, scheduling, and performance analysis to ensure the best results."
              ],
              "buttonText": "Get Started"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Highly recommend their social media services!",
              "text": "Their social media management has greatly increased our brand visibility and engagement.",
              "name": "Emily White",
              "role": "Marketing Specialist"
            }
          ],
          "getintouch": "Ready to boost your social media presence?"
        }
      },
      {
        "id": 5,
        "Data": {
          "Title": [
            {
              "title": "Lead Generation Services",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "Our lead generation services are designed to help you identify and capture potential leads, driving growth and success for your business."
            }
          ],
          "Secdm": [
            {
              "title": "Effective Lead Capture Strategies",
              "description": "We implement strategies to capture high-quality leads through various channels and optimize the lead generation process for your business.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Grow",
              "heading": "Increase Your Lead Volume",
              "contentTitle": "Proven Lead Generation Techniques",
              "contentParagraphs": [
                "Our techniques are designed to increase the volume and quality of leads, ensuring that your sales team has the best opportunities to convert.",
                "We focus on targeted lead generation and nurturing strategies to maximize results."
              ],
              "buttonText": "Learn More"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Outstanding lead generation services!",
              "text": "The lead generation strategies provided have been effective in bringing valuable leads to our business.",
              "name": "Robert Davis",
              "role": "Sales Director"
            }
          ],
          "getintouch": "Want to boost your lead generation efforts?"
        }
      },
      {
        "id": 6,
        "Data": {
          "Title": [
            {
              "title": "Mobile App Development",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "We offer mobile app development services to create innovative and user-friendly applications for both iOS and Android platforms."
            }
          ],
          "Secdm": [
            {
              "title": "Custom Mobile Apps",
              "description": "Our team develops custom mobile applications tailored to your business needs, ensuring high performance and user satisfaction.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Innovate",
              "heading": "Mobile App Excellence",
              "contentTitle": "Transform Your Business with Mobile Apps",
              "contentParagraphs": [
                "We provide end-to-end mobile app development services to help you reach your audience on their preferred devices.",
                "Our solutions are designed to enhance user experience and drive engagement through innovative features and functionality."
              ],
              "buttonText": "Explore Solutions"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Exceptional app development!",
              "text": "Their mobile app development services have helped us deliver a seamless experience to our users.",
              "name": "Linda Green",
              "role": "App Product Manager"
            }
          ],
          "getintouch": "Ready to develop your next mobile app?"
        }
      },
      {
        "id": 7,
        "Data": {
          "Title": [
            {
              "title": "Mobile App Promotion",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "Our mobile app promotion services are designed to enhance the visibility and user acquisition for your mobile applications."
            }
          ],
          "Secdm": [
            {
              "title": "App Store Optimization",
              "description": "We optimize your app's presence in app stores to increase visibility and attract more downloads.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Promote",
              "heading": "Enhance Your App's Reach",
              "contentTitle": "Effective Mobile App Promotion Strategies",
              "contentParagraphs": [
                "Our promotion strategies are tailored to boost your app's visibility, attract more users, and drive engagement.",
                "We use a combination of techniques to ensure that your app stands out in a crowded market."
              ],
              "buttonText": "Learn More"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Fantastic app promotion services!",
              "text": "Their promotion strategies have significantly increased our app's visibility and user base.",
              "name": "David Wilson",
              "role": "Marketing Coordinator"
            }
          ],
          "getintouch": "Want to increase your app's visibility?"
        }
      },
      
      {
        "id": 8,
        "Data": {
          "Title": [
            {
              "title": "Content Management System",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "We offer content management system solutions to help you efficiently manage and organize your digital content."
            }
          ],
          "Secdm": [
            {
              "title": "Custom CMS Solutions",
              "description": "Our custom CMS solutions provide you with the flexibility to manage your content effectively and efficiently.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Manage",
              "heading": "Streamline Your Content Operations",
              "contentTitle": "Tailored CMS Solutions for Your Business",
              "contentParagraphs": [
                "We provide content management systems that are tailored to your business needs, allowing for easy content creation, editing, and publishing.",
                "Our solutions are designed to be user-friendly and scalable."
              ],
              "buttonText": "Find Out More"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Excellent CMS solutions!",
              "text": "The CMS solutions provided have streamlined our content management processes and improved efficiency.",
              "name": "Daniel Harris",
              "role": "Content Manager"
            }
          ],
          "getintouch": "Looking for an efficient content management solution?"
        }
      },
      {
        "id": 9,
        "Data": {
          "Title": [
            {
              "title": "SEO Management",
              "TitlebgImage": "https://static.wixstatic.com/media/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg/v1/fill/w_1280,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_caf7d704d774479b9d154220c65cf27f~mv2_d_3000_1688_s_2.jpg",
              "description": "Our SEO management services are designed to improve your website's search engine ranking and drive more organic traffic."
            }
          ],
          "Secdm": [
            {
              "title": "On-Page SEO",
              "description": "We optimize individual web pages to rank higher and earn more relevant traffic in search engines.",
              "image": "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
              "reverse": false
            }
          ],
          "Maindm": [
            {
              "imgUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "subheading": "Optimize",
              "heading": "Boost Your Search Visibility",
              "contentTitle": "Comprehensive SEO Strategies",
              "contentParagraphs": [
                "Our SEO strategies are designed to enhance your website's visibility and drive organic traffic.",
                "We focus on both on-page and off-page SEO to achieve the best results."
              ],
              "buttonText": "Discover More"
            }
          ],
          "testimonial": [
            {
              "imageSrc": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
              "quote": "Top-notch SEO management!",
              "text": "Their SEO management has significantly improved our website's search engine rankings.",
              "name": "Sophia Martinez",
              "role": "Digital Marketing Manager"
            }
          ],
          "getintouch": "Interested in improving your search rankings?"
        }
      }
    ]
    
const Servicedes = useParams()
console.log(Servicedes)

const servicedata = servicedatas.find((item) => item.id == Servicedes.servicedes
);
console.log(servicedata.Data)
    
  return (
    <div className=' bg-zinc-100'>
      <Titledes
      title = {servicedata.Data.Title}
      />
      <Maindes 
      textParallaxData = {servicedata.Data.Maindm}
      />
      <ServiceReusable/>
      <SwiftLoading/>
      <Secdes 
      data = {servicedata.Data.Secdm}/>
      <Testimonialdes 
      testimonials = {servicedata.Data.testimonial}/>
      <GetinTouchdes
        text = {servicedata.Data.getintouch}/>
    </div>
  
  )
}

export default Servicedesx