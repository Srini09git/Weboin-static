"use client";
import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { Parallax } from 'react-parallax';
import color from "./../../../public/image/color.png";


const skillsOptions = [
    { value: 'ReactJS', label: 'ReactJS' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'NodeJS', label: 'NodeJS' },
    { value: 'ExpressJS', label: 'ExpressJS' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'Angular', label: 'Angular' },
    { value: 'C/C++', label: 'C/C++' },
    { value: 'wordpress', label: 'wordpress' },
    // Add more skills as needed
];

const roles = [
    { value: 'Software Developer', label: 'Software Developer' },
    { value: 'Full stack Developer', label: 'Full stack Developer' },
    { value: 'Front-End Developer', label: 'Front-End Developer' },
    { value: 'Back-End Developer', label: 'Back-End Developer' },
    { value: 'API Developer', label: 'API Developer' },
    { value: 'Quality Testing', label: 'Quality Testing' },
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'Graphic Designer', label: 'Graphic Designer' },
    { value: 'Manual Testing', label: 'Manual Testing' },
];

export const Formfile = () => {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({});
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        graduation: '',
        gender: '',
        experience: '',
        location: '',
        message: ''
    });

    const handleSkillsChange = (selectedOptions) => {
        setSelectedSkills(selectedOptions);
    }

    const handleRolesChange = (selectedOptions) => {
        setSelectedRoles(selectedOptions);
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleonsubmit = (e) => {
        e.preventDefault();
        let isFormValid = true;
        let errors = {};

        // Client-side validation
        Object.keys(formData).forEach(key => {
            if (formData[key].trim() === '' && key !== 'resume') {
                isFormValid = false;
                errors[key] = `Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`;
            }
        });

        // Validate selected skills and roles
        if (selectedSkills.length === 0) {
            isFormValid = false;
            errors['skills'] = 'Please select at least one skill.';
        }

        if (Object.keys(selectedRoles).length === 0) {
            isFormValid = false;
            errors['roles'] = 'Please select at least one role.';
        }
        
        if (!formData.resume) {
            isFormValid = false;
            errors['resume'] = 'Please upload your resume.';
        }
        // Set error messages and validation status
        if (!isFormValid) {
            setErrorMessage(errors);
            setIsError(true);
            setTimeout(() => {
                setIsError(false);
                setErrorMessage({});
            }, 500000); // Clear error message after 5 seconds
            return;
        }

        // Prepare form data to log
        const finalData = {
            ...formData,
            skills: selectedSkills.map(skill => skill.value),
            roles: selectedRoles.map(role => role.value),
        };

        // Log form data to the console
        console.log('Form Data:', finalData);

        // Reset form and states
        form.current.reset(); // Reset form fields
        setSelectedSkills([]);
        setSelectedRoles([]);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            graduation: '',
            gender: '',
            experience: '',
            location: '',
            message: ''
        });
        setErrorMessage({});
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
        }, 500000); // Clear success message after 5 seconds
    }

    return (
        <div className='flex flex-col'>
            <Parallax strength={500}  bgImageStyle={{ minHeight: '100vh' }} bgImageAlt='bg' className='object-cover bg-white'>
                <div className="px-6 lg:px-8">
                    <form className='flex flex-wrap flex-col gap-5 border-black mx-auto mt-16 max-w-xl sm:mt-20' ref={form} onSubmit={handleonsubmit}>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                           <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-black">First name</label>
                           <div className="mt-2.5">
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-gray-900 px-2 py-1 sm:text-sm sm:leading-6"
                            placeholder="Enter your first name"
                        />
                           {isError && errorMessage['firstName'] && <p className="text-red-500 text-sm">{errorMessage['firstName']}</p>}
                        </div>
                       </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-black">Last name</label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-gray-900 px-2 py-1 sm:text-sm sm:leading-6"
                                        placeholder='Enter your last name'
                                    />
                                    {isError && errorMessage['lastName'] && <p className="text-red-500 text-sm">{errorMessage['lastName']}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-black">Email</label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-gray-900 px-2 py-1 sm:text-sm sm:leading-6"
                                        placeholder='Enter your email'
                                    />
                                    {isError && errorMessage['email'] && <p className="text-red-500 text-sm">{errorMessage['email']}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-black">Phone Number</label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="block w-full border-b-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-gray-900 px-2 py-1 sm:text-sm sm:leading-6"
                                        placeholder='Enter your phone number'
                                    />
                                    {isError && errorMessage['phoneNumber'] && <p className="text-red-500 text-sm">{errorMessage['phoneNumber']}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="graduation" className="block text-sm font-semibold leading-6 text-black">Year of Graduation</label>
                                <div className="mt-2.5">
                                    <input
                                        type="number"
                                        name="graduation"
                                        id="graduation"
                                        value={formData.graduation}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                    {isError && errorMessage['graduation'] && <p className="text-red-500 text-sm">{errorMessage['graduation']}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-sm font-semibold leading-6 text-black">Gender</label>
                                <div className="mt-2.5">
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    {isError && errorMessage['gender'] && <p className="text-red-500 text-sm">{errorMessage['gender']}</p>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="experience" className="block text-sm font-semibold leading-6 text-black">Experience</label>
                                <div className="mt-2.5">
                                    <select
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    >
                                        <option value="">Select experience</option>
                                        <option value="fresher">Fresher</option>
                                        <option value="0-1 Year">0-1 year</option>
                                        <option value="1-3 Year">1-3 year</option>
                                        <option value="3-5 Year">3-5 year</option>
                                        <option value="5+ Year">5+ year</option>
                                    </select>
                                    {isError && errorMessage['experience'] && <p className="text-red-500 text-sm">{errorMessage['experience']}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="location" className="block text-sm font-semibold leading-6 text-black">Current Location</label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                    {isError && errorMessage['location'] && <p className="text-red-500 text-sm">{errorMessage['location']}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="roles" className="block text-sm font-semibold leading-6 text-black">Roles</label>
                                <div className="mt-2.5">
                                    <Select
                                        isMulti
                                        name="roles"
                                        options={roles}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={handleRolesChange}
                                        value={selectedRoles}
                                    />
                                    {isError && errorMessage['roles'] && <p className="text-red-500 text-sm">{errorMessage['roles']}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="skills" className="block text-sm font-semibold leading-6 text-black">Skills</label>
                                <div className="mt-2.5">
                                    <Select
                                        isMulti
                                        name="skills"
                                        options={skillsOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        onChange={handleSkillsChange}
                                        value={selectedSkills}
                                    />
                                    {isError && errorMessage['skills'] && <p className="text-red-500 text-sm">{errorMessage['skills']}</p>}
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-black">Message</label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    ></textarea>
                                    {isError && errorMessage['message'] && <p className="text-red-500 text-sm">{errorMessage['message']}</p>}
                                </div>
                            </div>
                        </div>
                        <div> 
                            <label htmlFor="resume" className="block text-sm font-semibold leading-6 text-black">Resume</label>
                            <div className="mt-2.5">
                                <input
                                    type="file"
                                    name="resume"
                                    id="resume"
                                    onChange={handleChange}
                                    className="block w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                                {isError && errorMessage['resume'] && <p className="text-red-500 text-sm">{errorMessage['resume']}</p>}
                            </div>
                        </div>

                        <div className="mt-10 flex justify-center">
                            <button type="submit" className="block w-20 rounded-md bg-green-500 px-1.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110">Submit</button>
                        </div>
                    </form>
                    {isSuccess && (
                        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center">
                            <div className="bg-green-100 border-l-4 flex flex-col gap-3 border-green-500 text-green-700 max-w-md p-4 rounded-lg shadow-lg relative">
                                <p className="text-lg font-semibold">Form submitted successfully!</p>
                                <p>Your information has been successfully submitted.</p>
                                <div className='flex items-center justify-end'>
                                <button className='' onClick={()=>setIsSuccess(false)}>close</button>
                                </div>
                            </div>
                            
                        </div>
                    )}
                    {/* {isError && (
                        <div className="text-red-500 text-center mt-4">
                            {Object.values(errorMessage).map((msg, index) => (
                                <p key={index}>{msg}</p>
                            ))}
                        </div>
                    )} */}
                </div>
            </Parallax>
        </div>
    )
}
