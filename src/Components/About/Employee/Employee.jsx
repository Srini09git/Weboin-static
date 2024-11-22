"use client";
import Image from 'next/image';
import one from '../../../../public/Employee/one.webp';
import two from '../../../../public/Employee/two.webp';
import three from '../../../../public/Employee/three.webp';
import four from '../../../../public/Employee/four.webp';
import five from '../../../../public/Employee/five.jpg';
import six from '../../../../public/Employee/six.webp';
import seven from '../../../../public/Employee/seven.webp';
import eight from '../../../../public/Employee/eight.jpg';


const Employee = ({ name, position, imageUrl }) => {
    return (
        <div className='group hover:scale-105 flex flex-col rounded-full gap-7 pb-3 mb-5'>
            <div className='w-48 h-48 lg:w-80 lg:h-80'>
                <img
                    src={imageUrl}
                    alt={name}
                    className='w-full h-full rounded-full object-cover'
                />
            </div>
            <div className='text-center w-full flex px-6 gap-2 justify-center items-center flex-col'>
                <h2 className='font-black text-md'>{name}</h2>
                <p className='text-xs'>{position}</p>
            </div>
        </div>
    );
};

const EmployeeList = () => {
    const employeeData = [
        {
            name: 'Prasanna Meshak',
            position: 'Head of Digital Marketing',
            img: one
        },
        {
            name: 'John Doe',
            position: 'Software Engineer',
            img: two
        },
        {
            name: 'Ajith Kumar',
            position: 'Team Lead',
            img: three
        },
        {
            name: 'Shah Rukh Khan',
            position: 'Senior Developer',
            img: four
        },
        {
            name: 'Jane Smith',
            position: 'Product Manager',
            img: five
        },
        {
            name: 'Emily Johnson',
            position: 'UX Designer',
            img: six
        },
        {
            name: 'Jane Smith',
            position: 'Product Manager',
            img: seven
        },
        {
            name: 'Emily Johnson',
            position: 'UX Designer',
            img: eight
        },
    ];

    return (
        <div className='bg-white text-black'>
            <div className="flex justify-between items-start pt-8 pb-16">
                <div className="w-1/2">
                    <h2 className="text-xl pl-3 md:lg:text-6xl font-bold text-start lg:p-10 sm:p-10">
                        Bringing passion <br />
                        and <span className='text-blue-600'> our expertise together!</span> <br />

                    </h2>
                </div>
                <div className="w-1/2 flex justify-end">
                    <p className="text-gray-950 text-xs md:lg:text-base mt-11 text-end w-96 mr-8">
                        We bet on brands that shift categories and add value to peoples lives, and on founders who are motivated to shape.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-16">
                {employeeData.map((employee, index) => (
                    <div key={index} className="space-y-4 text-center flex flex-col items-center">
                        <div className='w-48 sm:w-72'>
                            <Image
                                src={employee.img}
                                alt={employee.name}
                                width={300} // Adjust these values as needed
                                height={300} // Adjust these values as needed
                                className=' rounded-3xl'

                            />
                        </div>
                        <div className=''>

                            <h3 className="text-base text-sky-600 ">{employee.name}</h3>
                            <p className="text-lg font-semibold text-black pt-1">{employee.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EmployeeList;
