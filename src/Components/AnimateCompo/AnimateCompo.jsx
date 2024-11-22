import React from 'react'
import Sticky from '../About/Skicky/Sticky'
import Whyusz from './Whyusz'
import WhyChooseUs from "@/Components/About/Choose Us/WhyChooseUs";

const AnimateCompo = () => {
  return (
    <div>
      {/* Sticky component is hidden on small screens (sm:hidden) and displayed on medium and larger screens (md:block) */}
      <div className="hidden md:block">
        <Sticky />
      </div>

      {/* WhyChooseUs and Whyusz components are displayed on all screen sizes */}
      <div className="block md:hidden">
        <WhyChooseUs />
        <Whyusz />
      </div>
    </div>
  )
}

export default AnimateCompo
