import React from 'react'

const PortfolioInfo = () => {
  return (
    <div className="relative flex items-center justify-start h-screen bg-cover bg-center bg-pink-200" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
    <div className="text-left p-6 text-white">
      <h1 className="text-6xl lg:text-[10rem] leading-none m-0">NANOTECH</h1>
      <p className="mt-5 text-lg w-4/6 leading-relaxed">
        As you navigate through the projects, you’ll discover a harmonious blend of creativity and functionality, seamlessly brought to life by the dynamic capabilities of our shortcodes. Each shortcode serves as a building block, unlocking a world of possibilities for expressing your ideas and presenting your content in ways that are both visually stunning and highly engaging.
      </p>
      <div className="mt-10">
        <p className="text-base">
          <strong>Date</strong><br />May 2024
        </p>
      </div>
    </div>
  </div>
  )
}

export default PortfolioInfo
