import React from 'react'
import Image from 'next/image';
import bg1 from '../../../../public/BGD/bgg.webp';

const EmployeeMain = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Section */}
                <div className="pt-4">
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-2">
                                <h1 className="text-xl md:text-8xl lg:text-8xl font-bold">
                                    Work together <span className='text-green-600 block'>for success.</span>
                                </h1>
                            </div>

                            <div className="flex flex-col items-center pt-4 md:pr-20 lg:pr-40 xl:pr-10 lg:ml-auto">
                                <p className="text-base w-full sm:w-80 py-5 text-center sm:text-left text-gray-900">
                                    Anoliez is a beacon of best innovation and the dynamic parent company of Walcolder and many other subsidiaries.
                                </p>
                                <div>
                                    <p className="border px-3 py-2 text-2xl font-bold border-gray-300 bg-gradient-to-tr from-sky-300 to-sky-400 text-black text-center rounded-full w-full mt-4 ml-5">
                                        4,000 <br /> <span className='font-normal'>Happy Clients</span>
                                    </p>
                                </div>
                            </div>
                        </div>




                        <div className="relative pt-20 pb-5 xl:pt-32">
                            <Image
                                src={bg1} // Replace with your image path
                                alt="Employees walking"
                                width={1800}
                                height={600} // Increase height
                                objectFit="cover"
                                className="rounded-lg xl:w-screen xl:h-auto py-0"
                            />



                            <div className="mt-3 absolute top-9 lg:-top-4 lg:left-28 bg-gradient-to-tr from-zinc-300 to-red-500 rounded-full h-24 w-24 md:h-36 md:w-36 lg:h-56 lg:w-56 flex items-center justify-center text-center text-white">
                                <div>
                                    <span className="text-xl md:text-7xl lg:text-7xl font-bold">99+</span>
                                    <p className="text-sm lg:text-2xl mt-1">Expertise</p>
                                    <p className="text-sm lg:text-2xl">employees</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeMain;
