import React from 'react';

// Reusable ListItem component
const ListItem = ({ icon, text }) => (
  <li className="mt-6 lg:mt-0">
    <div className="flex">
      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 dark:bg-transparent">
        {icon}
      </span>
      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
        {text}
      </span>
    </div>
  </li>
);

// Reusable ImageRow component
const ImageRow = ({ images }) => (
  <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
    {images.map((image, index) => (
      <img
        key={index}
        className={`rounded-lg shadow-lg ${image.className}`}
        width={image.width}
        src={image.src}
        alt={image.alt}
      />
    ))}
  </div>
);

// Main Counts component
const Counts = () => {
  const listItems = [
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      ),
      text: 'Live modifications',
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      ),
      text: 'Data tracker',
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      ),
      text: '24/24 support',
    },
    {
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      ),
      text: 'Free tips to improve work time',
    },
  ];

  const imagesTopRow = [
    {
      src: 'https://img.lovepik.com/background/20211030/medium/lovepik-team-silhouette-mobile-wallpaper-background-image_400372213.jpg',
      className: 'w-32 md:w-56 md:h-60',
      width: 200,
      alt: '1',
    },
    {
      src: 'https://neurosciencenews.com/files/2018/01/visual-imagination-neurosciencenews.jpg',
      className: 'w-40 md:w-64',
      width: 260,
      alt: '2',
    },
  ];

  const imagesBottomRow = [
    {
      src: 'https://people.com/thmb/yivXS08TvhHbTBuDf5qXGltsioE=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(599x0:601x2)/TaylorSwift_PEOPLE_2-3ae7b9b0cfee4c869253ec38306a5ead.jpg',
      className: 'w-24 md:w-40',
      width: 170,
      alt: '3',
    },
    {
      src: 'https://w0.peakpx.com/wallpaper/2/680/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg',
      className: 'w-32 md:w-56 -mt-15',
      width: 200,
      alt: '4',
    },
  ];

  return (
    <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
      <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
            <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">Interactive</p>
            <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
              Interactivity between team members is the key of the success.
            </h4>
            <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
              Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
            </p>
            <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
              {listItems.map((item, index) => (
                <ListItem key={index} icon={item.icon} text={item.text} />
              ))}
            </ul>
          </div>
          <div className="relative mt-10 lg:-mx-4 lg:mt-0 lg:col-start-1">
            <div className="relative space-y-4">
              <div className="flex items-end justify-center space-x-4 lg:justify-start">
                <ImageRow images={imagesTopRow} />
              </div>
              <ImageRow images={imagesBottomRow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counts;
