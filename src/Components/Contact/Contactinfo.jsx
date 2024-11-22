"use client";
import React, { useState, useEffect } from 'react';

// List of services for the select input
const servicename = [
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Web Development", label: "Web Development" },
  { value: "SEO", label: "SEO" },
  { value: "Mobile App Development", label: "Mobile App Development" },
  { value: "E-commerce Website Development", label: "E-commerce Website Development" },
  { value: "Mobile App Promotion", label: "Mobile App Promotion" },
  { value: "Lead Generation Marketing", label: "Lead Generation Marketing" },
  { value: "Pay Per Click", label: "Pay Per Click" },
  { value: "Social Media Marketing", label: "Social Media Marketing" }
];

// Contactinfo component
const Contactinfo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Form fields including a select input for service
  const formFields = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "e.g. Willy",
      value: ""
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "e.g. youremail@gmail.com",
      value: ""
    },
    {
      id: "phone",
      label: "Phone No",
      type: "tel",
      placeholder: "e.g. +8801",
      value: ""
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "e.g. I need help",
      value: ""
    },
    {
        id: "service",
        label: "Service",
        type: "select",
        placeholder: "",
        options: servicename
      },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "e.g. you need any help",
      value: ""
    }
   
  ];

  // Initialize formData with empty values
  useEffect(() => {
    const initialFormData = {};
    formFields.forEach(field => {
      initialFormData[field.id] = field.value;
    });
    setFormData(initialFormData);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (Object.values(formData).some(field => !field)) {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage(""); // Clear success message
      return;
    }

    // Simulate a successful submission
    setSuccessMessage("Your data has been successfully submitted!");
    setErrorMessage(""); // Clear error message

    // Clear form fields
    const clearedFormData = {};
    formFields.forEach(field => {
      clearedFormData[field.id] = "";
    });
    setFormData(clearedFormData);
  };

  return (
    <div className='p-6 bg-gray-100 w-full'>
      <h2 className='text-start text-2xl font-bold mb-6 px-11 mt-6'>CONTACT US</h2>
      <div className='flex flex-col md:flex-row justify-between px-6 py-6'>
        <div className='flex-1 mb-6 md:mb-0 md:mr-6'>
          <h3 className='text-6xl font-semibold mb-4 px-4'>Join us in creating a shining brand for you!</h3>
        </div>
        <div className='flex-1 px-4'>
          <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt sit totam et ut esse explicabo rerum quos, doloribus mollitia perspiciatis necessitatibus ipsum tempora veniam?</p>
        </div>
      </div>
      <div className="px-4 py-8 w-full">
        <div className="flex flex-wrap">
          <form className="tf_contact_form tf_contact_page_form max-w-8xl mt-8 bg-gray-100 p-6" onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              {formFields.map(field => (
                <div key={field.id} className={`w-full ${field.type === 'textarea' ? 'px-4 mb-6' : field.type === 'select' ? 'md:w-1/2 px-4 mb-6' : 'md:w-1/2 px-4 mb-6'}`}>
                  <div className="tf_contact_form_input w-full">
                    <label htmlFor={field.id} className="block text-gray-700 mb-2">{field.label}:</label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        placeholder={field.placeholder}
                        value={formData[field.id] || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-b bg-gray-100 border-gray-600 focus:outline-none focus:border-indigo-500 h-32"
                      ></textarea>
                    ) : field.type === 'select' ? (
                      <select
                        id={field.id}
                        value={formData[field.id] || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-b bg-gray-100 border-gray-600 focus:outline-none focus:border-indigo-500"
                      >
                        <option value="">Select a service</option>
                        {field.options.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        placeholder={field.placeholder}
                        value={formData[field.id] || ""}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-b bg-gray-100 border-gray-600 focus:outline-none focus:border-indigo-500"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-6 px-6">
              <div className="flex-1">
                {successMessage && (
                  <div className="text-green-600 mb-4 text-2xl">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="text-red-600 mb-4 text-2xl">{errorMessage}</div>
                )}
              </div>
              <button
                className={`relative px-7 py-4 bg-gray-500 text-black font-bold border-2 rounded-xl text-sm overflow-hidden transition-transform duration-200 ease-in-out transform ${
                  isHovered ? 'scale-105 border-transparent' : 'border-black'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ zIndex: 0 }}
              >
                <span
                  className={`absolute inset-0 bg-white rounded-xl transition-transform duration-200 ease-out transform ${
                    isHovered ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transformOrigin: 'bottom', zIndex: -1 }}
                ></span>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5977849473707!2d80.2574354735907!3d13.06125471290932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526604f33cea8f%3A0x93dfce45454eb81c!2sWeboin!5e0!3m2!1sen!2sin!4v1723027239002!5m2!1sen!2sin" className='w-full h-96' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contactinfo;
