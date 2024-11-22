import React, { useState } from 'react';
import InsightsIcon from '@mui/icons-material/Insights';
import PieChartIcon from '@mui/icons-material/PieChart';
import EditNoteIcon from '@mui/icons-material/EditNote';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const ImageComponent = () => {
    
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleToggleImage = (index) => {
        
        setSelectedImageIndex(index);
    };

    const details = [
        {
            icon: <InsightsIcon />,
            title: "Creativity",
            content: "Add the best talent on the market, an agile skilled management & seamless involvement",
            Url: "https://crowdytheme.com/wp/arolax/web-design-agencey/wp-content/uploads/sites/15/2024/06/graph-with-img.png"
        },
        {
            icon: <PieChartIcon />,
            title: "Relationships",
            content: "Add the best talent on the market, an agile skilled management & seamless involvement",
            Url: "https://crowdytheme.com/wp/arolax/web-design-agencey/wp-content/uploads/sites/15/2024/07/t1.webp"
        },
        {
            icon: <EditNoteIcon />,
            title: "Responsibility",
            content: "Add the best talent on the market, an agile skilled management & seamless involvement",
            Url: "https://crowdytheme.com/wp/arolax/web-design-agencey/wp-content/uploads/sites/15/2024/07/t2.webp"
        },
        {
            icon: <AttachMoneyIcon />,
            title: "Cost effective",
            content: "Add the best talent on the market, an agile skilled management & seamless involvement",
            Url: "https://crowdytheme.com/wp/arolax/web-design-agencey/wp-content/uploads/sites/15/2024/07/t3.webp"
        },
    ];

    return (
        <div className='py-10 px-5 md:px-10 bg-white'>
            <div className='flex justify-center items-center my-10'>
                <h1 className='text-4xl md:text-5xl font-bold'>Empowering skills <span className='text-green-600'>to help you!</span></h1>
            </div>

            <div className='flex flex-col lg:flex-row w-full gap-5 justify-center items-center'>
                <div className='w-full lg:w-1/2 space-y-4'>
                    {details.map((detail, index) => (
                        <div 
                            key={index}
                            className={`cursor-pointer p-4 bg-white transition-transform
                            ${selectedImageIndex === index ? 'bg-gray-100' : ''}`} 
                            onClick={() => handleToggleImage(index)}
                        >
                            <div className='flex flex-row gap-5'>
                                <div 
                                    className={`text-lg text-black flex justify-center items-center rounded-full h-12 w-12 lg:h-14 lg:w-14 
                                    ${selectedImageIndex === index ? 'bg-lime-500 text-black' : 'bg-gray-200'}
                                    hover:bg-lime-500 hover:text-black transition-all`}
                                >
                                    <div className='flex justify-center items-center p-3 lg:p-5'>{detail.icon}</div>
                                </div>

                                <div className='space-y-2'>
                                    <h3 className="text-xl lg:text-2xl font-bold">{detail.title}</h3>
                                    <p className='text-slate-600 text-wrap'>{detail.content}</p>
                                </div>
                            </div>  

                            
                            {selectedImageIndex === index && (
                                <div className='mt-4 lg:hidden flex justify-center'>
                                    <img 
                                        src={detail.Url} 
                                        alt={detail.title} 
                                        className="rounded max-w-full h-auto"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                
                <div className='w-full lg:w-1/2 hidden lg:flex justify-center items-center'>
                    {details[selectedImageIndex] && (
                        <img 
                            src={details[selectedImageIndex].Url} 
                            alt={details[selectedImageIndex].title} 
                            className="rounded max-w-full h-auto"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;