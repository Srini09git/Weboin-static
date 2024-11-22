'use client';
import React from 'react';

// JSON Data
const data = {
  sections: [
    {
      title: "Digital Innovation Partner",
      description:
        "Digital marketing refers to the strategic use of digital channels, platforms, and technologies to promote products, services, or brands to a targeted audience. It encompasses a wide range of online tactics and strategies that leverage the power of the internet and electronic devices to connect with potential customers, engage audiences, and drive desired actions. Digital marketing aims to create a strong online presence, increase brand visibility, and ultimately achieve business goals.",
      image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
      reverse: false,
    },
    {
      title: "Social Media Marketing",
      description:
        "We understand that social media is not just a platform; it's a powerful tool to connect, engage, and build relationships with your audience. Our skilled social media marketing team is passionate about creating data-driven strategies that drive brand awareness, foster meaningful interactions, and generate measurable results.",
      image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
      reverse: true,
    },
    {
      title: "Social Media Management",
      description:
        "We understand the impact of social media on your brand's success. Social media management encompasses the strategic planning, creation, and execution of content across various social media platforms to achieve specific organizational goals. It involves developing a comprehensive strategy tailored to the target audience, creating engaging content that resonates with followers, and scheduling posts at optimal times for maximum reach and engagement.",
      image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
      reverse: false,
    },
    {
      title: "Content Marketing",
      description:
        "Content is the cornerstone of digital marketing strategies. In an era where consumers are inundated with information, compelling and valuable content serves as the foundation for building brand awareness, driving engagement, and nurturing relationships with your audience. Content marketing involves the creation and distribution of relevant, informative, and entertaining content across various digital channels, including websites, blogs, social media platforms, email newsletters, and more.",
      image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137",
      reverse: true,
    },
  ],
};

const SecDM = () => {
  return (
    <div className="m-6">
      {data.sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center p-8 rounded-lg shadow-lg bg-gray-200 mt-4 sticky top-0 ${section.reverse ? 'md:flex-row-reverse' : ''
            }`}
        >
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600 mb-4">{section.description}</p>
          </div>
          <div className="flex-1">
            <img
              src={section.image}
              alt={section.title}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SecDM;
