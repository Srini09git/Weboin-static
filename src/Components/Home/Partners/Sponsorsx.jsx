import React from 'react';

const setColor = (bgColor) => {
  const lightness = (color) => {
    const rgb = color.match(/\d+/g);
    return (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255 * 100;
  };

  return lightness(bgColor) > 30 ? '#000' : '#FFF';
};

const Sponsorsx = () => {
  const bgColor = 'rgb(255, 192, 203)'; // pink
  const textColor = setColor(bgColor);

  return (
    <div className="min-h-screen bg-purple-400 flex flex-col items-center py-8">
      <div className="container mx-auto flex flex-wrap justify-center">
        {[
          { name: 'google', imgSrc: 'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
          { name: 'google', imgSrc: 'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
          { name: 'google', imgSrc: 'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
          { name: 'google', imgSrc: 'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
          { name: 'google', imgSrc: 'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
          { name: 'google', imgSrc: 'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
          { name: 'amazon', imgSrc: 'https://pngimg.com/uploads/microsoft/microsoft_PNG7.png' },
          { name: 'microsoft', imgSrc: 'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
          { name: 'Facebook', imgSrc: 'https://pngimg.com/uploads/microsoft/microsoft_PNG7.png'},
          { name: 'Instagram', imgSrc: 'https://pngimg.com/uploads/instagram/instagram_PNG5.png'},
          { name: 'amnet', imgSrc:'https://pngimg.com/uploads/google/small/google_PNG19624.png' },
        ].map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-40 h-40 transition-all duration-300 ease-in-out group"
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-purple-400 transition-opacity duration-75 ease-in-out opacity-100 group-hover:opacity-70"></div>

            {/* Image or Text content */}
            <div className="relative z-10 text-center" style={{ color: textColor }}>
              {item.imgSrc ? (
                <img src={item.imgSrc} alt={item.name} className="h-20 w-20 object-contain" /> // Display image if imgSrc is present
              ) : (
                <h3 className="font-bold text-xl">{item.name}</h3> // Display name if no imgSrc
              )}
            </div>

            {/* Border sides */}
            <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-1000 ease-in-out border-t-2 border-transparent group-hover:border-black"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-1000 ease-in-out border-b-2 border-transparent group-hover:border-black"></div>
            <div className="absolute top-0 bottom-0 left-0 w-1 transition-all duration-1000 ease-in-out border-l-2 border-transparent group-hover:border-black"></div>
            <div className="absolute top-0 bottom-0 right-0 w-1 transition-all duration-1000 ease-in-out border-r-2 border-transparent group-hover:border-black"></div>

            {/* Corner enhancement */}
            <div className="absolute inset-0">
              {/* Top-left corner */}
              <div className="absolute top-0 left-0 w-4 h-4 transition-all duration-1000 ease-out border-t-4 border-l-4 border-transparent group-hover:border-black "></div>
              
              {/* Bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-4 h-4 transition-all duration-1000 ease-out border-b-4 border-r-4 border-transparent group-hover:border-black"></div>

              {/* Bottom-left corner */}
              <div className="absolute bottom-0 left-0 w-4 h-4 transition-all duration-1000 ease-out border-b-4 border-l-4 border-transparent group-hover:border-black"></div>

              {/* Top-right corner */}
              <div className="absolute top-0 right-0 w-4 h-4 transition-all duration-1000 ease-out border-t-4 border-r-4 border-transparent group-hover:border-black"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsorsx;
