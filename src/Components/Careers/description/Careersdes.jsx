'use client';
import { useParams } from 'next/navigation';
import React from 'react';

const Careersdes = () => {
  const router = useParams();
  console.log(router);

  const data = [
    
    {id:"1",
      company: "Weboin",
      jobType: "Full time",
      position: "Digital Marketing Analyst",
      workmode : "Work from Office",
      workingdays : "Mon to Fri",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Manage Google Adwords Campaigns to improve Return on Investment and generate reports",
          "Develop performance metrics to provide recommendations and continually revise campaign strategy",
          "Understand data and arrive at decisions based on Web Analytics data and generate reports",
          "Integrate SEM campaigns, including both Paid Search (Pay-Per-Click), Search Engine Optimization (SEO), Social Media and other paid/non-paid mediums",
          "Engage in all facets of search engine marketing (SEM) campaigns, including initial planning, implementation, monitoring, optimization, analysis and reporting",
        ]
      }
    },
    {id:"2",
     company: "Weboin",
      jobType: "Full time",
      position: "Software Developer",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Design, develop, and maintain software applications",
          "Collaborate with cross-functional teams to define, design, and ship new features",
          "Identify and correct bottlenecks and fix bugs",
          "Continuously discover, evaluate, and implement new technologies to maximize development efficiency",
          "Write clean, scalable code using .NET programming languages",
        ]
      }
    },
    {id:"3",
      company: "InnoTech",
      jobType: "Part time",
      position: "UX/UI Designer",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Design intuitive user interfaces with modern tools and methodologies",
          "Conduct user research and evaluate user feedback",
          "Create wireframes, storyboards, user flows, process flows, and site maps",
          "Collaborate with product management and engineering teams to define and implement innovative solutions",
          "Establish and promote design guidelines, best practices, and standards",
        ]
      }
    },
    {
      id:"4",
      company: "MarketEdge",
      jobType: "Contract",
      position: "SEO Specialist",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Optimize website content, landing pages, and paid search copy",
          "Perform ongoing keyword research, discovery, and optimization",
          "Analyze SEO and PPC performance using tools like Google Analytics and SEMrush",
          "Collaborate with developers and content teams to ensure SEO best practices are properly implemented",
          "Keep up-to-date with the latest trends in SEO and integrated marketing strategies",
        ]
      }
    },
    {
      id:"5",
      company: "CloudNet",
      jobType: "Full time",
      position: "Cloud Engineer",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Design and implement cloud-based solutions for clients",
          "Monitor and manage cloud infrastructure, ensuring scalability, availability, and security",
          "Collaborate with the development team to optimize applications for the cloud environment",
          "Automate cloud deployment processes using scripts and DevOps tools",
          "Provide guidance on cloud adoption and migration strategies",
        ]
      }
    },
    {
      id:"6",
      company: "DataPulse",
      jobType: "Full time",
      position: "Data Analyst",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Collect, analyze, and interpret large datasets to drive business decisions",
          "Develop and implement databases, data collection systems, and data analytics tools",
          "Identify trends, patterns, and insights in data to inform business strategies",
          "Create detailed reports and presentations for stakeholders",
          "Collaborate with IT and management to prioritize business and information needs",
        ]
      }
    },
    {
      id:"7",
      company: "GreenTech",
      jobType: "Full time",
      position: "Sustainability Consultant",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Advise clients on sustainability best practices and environmental policies",
          "Conduct sustainability audits and assessments",
          "Develop and implement sustainability programs and initiatives",
          "Collaborate with stakeholders to set and achieve sustainability goals",
          "Stay current with environmental regulations and industry trends",
        ]
      }
    },
    {
      id:"8",
      company: "FinGuard",
      jobType: "Contract",
      position: "Financial Analyst",
      about: {
        title: "About Webion",
       content: [
          "Weboin Technologies Private Limited is a leading digital marketing and web development company based in Chennai, India. We specialize in a wide range of services, including digital marketing, e-commerce website development, mobile app development, SEO, and social media marketing.Our mission is to empower brands to thrive in the digital age through strategic thinking, creative solutions, and relentless execution. With over 10 years of experience, we are dedicated to providing exceptional results and fostering strong, collaborative partnerships with our clients."
        ]
      },
      RoleDescription: {
        title: "Role Description",
        content: [
          "We are seeking an experienced and creative Digital Marketing Specialist to join our team. The ideal candidate will be responsible for developing, implementing, and managing marketing campaigns that promote our company’s products and services. You will play a major role in enhancing brand awareness within the digital space as well as driving website traffic and acquiring leads/customers."
        ]
      },
      Qualifications: {
        title: "Qualifications",
        content: [
          "Analyze financial data and prepare reports on financial performance",
          "Develop financial models and forecasts",
          "Assist in budgeting and financial planning processes",
          "Provide insights and recommendations to improve financial performance",
          "Collaborate with the finance team to ensure accurate financial reporting",
        ]
      },
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Analyze financial data and prepare reports on financial performance",
          "Develop financial models and forecasts",
          "Assist in budgeting and financial planning processes",
          "Provide insights and recommendations to improve financial performance",
          "Collaborate with the finance team to ensure accurate financial reporting",
        ]
      },
      SkillsRequired: {
        title: "Skills Required",
        content: [
          "Analyze financial data and prepare reports on financial performance",
          "Develop financial models and forecasts",
          "Assist in budgeting and financial planning processes",
          "Provide insights and recommendations to improve financial performance",
          "Collaborate with the finance team to ensure accurate financial reporting",
        ]
      },
      Benefits: {
        title: "Benefits",
        content: [
          "Analyze financial data and prepare reports on financial performance",
          "Develop financial models and forecasts",
          "Assist in budgeting and financial planning processes",
          "Provide insights and recommendations to improve financial performance",
          "Collaborate with the finance team to ensure accurate financial reporting",
        ]
      }
    },
    {
      id:"9",
      company: "CyberShield",
      jobType: "Full time",
      position: "Cybersecurity Analyst",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Monitor and analyze security alerts and threats",
          "Conduct vulnerability assessments and penetration testing",
          "Implement security measures to protect the organization's data and systems",
          "Collaborate with IT and other departments to ensure security best practices",
          "Stay updated on the latest cybersecurity trends and threats",
        ]
      }
    },
    {
      id:"10",
      company: "BlueSky Innovations",
      jobType: "Part time",
      position: "Content Writer",
      jobDescription: {
        title: "Job Description",
        responsibilities: [
          "Create engaging content for blogs, articles, social media, and websites",
          "Collaborate with the marketing team to develop content strategies",
          "Conduct thorough research on industry-related topics",
          "Edit and proofread content to ensure it is error-free and aligns with brand guidelines",
          "Stay up-to-date with content trends and best practices",
        ]
      }
    }
  ];


  const jobData = data.filter((item) => item.id === router.careersdes)[0];

  if (!jobData) {
    return <div>Job not found</div>;
  }

  return (
    <div className="max-w-full px-20 py-10 bg-white border border-gray-300 rounded-lg shadow-lg flex md:flex-row flex-col gap-20">
      <div>
      <h2 className="text-5xl font-semibold mb-14">{jobData.position}</h2>
      
      {jobData.about && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.about.title}</h4>
          <div className="max-w-3xl">
          {jobData.about.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-2 text-justify">{paragraph}</p>
          ))}
          </div>
        </section>
      )}

      {jobData.RoleDescription && (
        <section className="mb-6">
         
          <h4 className="text-2xl font-semibold mb-2">{jobData.RoleDescription.title}</h4>
          <div className="max-w-3xl">
          {jobData.RoleDescription.content.map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-2 text-justify">{paragraph}</p>
          ))}
          </div>
        </section>
      )}

      {jobData.Qualifications && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.Qualifications.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            {jobData.Qualifications.content.map((qualification, index) => (
              <li key={index} className="mb-2">{qualification}</li>
            ))}
          </ul>
        </section>
      )}

      {jobData.jobDescription && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.jobDescription.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700 max-w-3xl">
            {jobData.jobDescription.responsibilities.map((responsibility, index) => (
              <li key={index} className="mb-2">{responsibility}</li>
            ))}
          </ul>
        </section>
      )}

      {jobData.SkillsRequired && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.SkillsRequired.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            {jobData.SkillsRequired.content.map((skill, index) => (
              <li key={index} className="mb-2">{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {jobData.Benefits && (
        <section className="mb-6">
          <h4 className="text-2xl font-semibold mb-2">{jobData.Benefits.title}</h4>
          <ul className="list-disc list-inside pl-5 text-gray-700">
            {jobData.Benefits.content.map((benefit, index) => (
              <li key={index} className="mb-2">{benefit}</li>
            ))}
          </ul>
        </section>
      )}
      </div>
      <div>
        <h1 className='text-3xl font-semibold'>Job information</h1>
        <div className='mt-7'>
          <h3 className='text-md font-medium'>Work Mode</h3>
          <p>{jobData.workmode}</p>
        </div>
        <div className='mt-7'>
          <h3 className='text-md font-medium'>Working Days</h3>
          <p>{jobData.workingdays}</p>
        </div>
      </div>

    </div>
  );
};

export default Careersdes;
