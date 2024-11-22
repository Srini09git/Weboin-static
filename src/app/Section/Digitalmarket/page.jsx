import React from 'react'
import MainDM from '@/Components/Services/DigitalMarketing/MainDM'
import SecDM from '@/Components/Services/DigitalMarketing/SecDM'
import TestimonialDM from '@/Components/Services/DigitalMarketing/TestimonialDM'
import ServiceReusable from '@/Components/Services/SReusable/ServiceReusable'
import TittleDM from '@/Components/Services/DigitalMarketing/TittleDM'
import SwiftLoading from '@/Components/Home/Whyweboin/SwiftLoading'
import GetinTouch from '@/Components/Services/DigitalMarketing/GetinTouch'
import Servicedesx from '@/Components/Services/Servicedes/Servicedesx'

const Digitalmarket = () => {
  return (
    <div className=' bg-zinc-100'>
      {/* <TittleDM />
      <MainDM />
      <ServiceReusable />
      <SwiftLoading />
      <SecDM />
      <TestimonialDM />
      <GetinTouch /> */}
      <Servicedesx/>
    </div>
  )
}

export default Digitalmarket