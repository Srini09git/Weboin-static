"use client"
import AboutCA from '@/Components/About/AboutCA/AboutCA.jsx'
import AboutContent from '@/Components/About/AboutContent/AboutContent.jsx'
import AboutContentz from '@/Components/About/AboutContent/AboutContentz.jsx'
import AboutcontentX from '@/Components/About/AboutContent/AboutcontentX.jsx'
import MovingTag from '@/Components/About/AboutContent/Movingtag'
import HomeAbout from '@/Components/About/AboutHome/HomeAbout'
import Benefits from '@/Components/About/BENEFITS/Benefits.jsx'
import Ceo from '@/Components/About/CEO/Ceo'
import CeoAbout from '@/Components/About/CEO/CeoAbout'
import NewCEO from '@/Components/About/CEO/NewCEO'
import WhyChooseUs from '@/Components/About/Choose Us/WhyChooseUs'
import Employee from '@/Components/About/Employee/Employee'
import EmployeeMain from '@/Components/About/Employee/EmployeeMain'
import OurHistory from '@/Components/About/Our Histroy/OurHistroy'
import OurProcessMain from '@/Components/About/OurProcess/OurProcessMain'
import { TimelineDemo } from '@/Components/About/Timeline/TimelineDemo'
import { Extray } from '@/Components/AnimateCompo/Extray'
import ImageCompo from '@/Components/AnimateCompo/ImageCompo'
import MiddleExtra from '@/Components/Home/Move/MiddleExtra'


const aboutus = () => {
  return (
    <div>
      <HomeAbout />
      <AboutContentz />
      {/*  <AboutcontentX /> */}
      <MovingTag />
      <AboutContent />
      <AboutCA />
      <Benefits />
      {/* <OurHistory /> */}
      <TimelineDemo />
      <MiddleExtra />
      <OurProcessMain />
      <ImageCompo />
      <NewCEO />
      {/* <Ceo /> 
      <CeoAbout />*/}
      <EmployeeMain />
      <Employee />
    </div>
  )
}

export default aboutus