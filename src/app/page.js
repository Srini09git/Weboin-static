"use client"

import HeroMainz from "@/Components/Home/Hero/HeroMainz";
import OurSponsors from "@/Components/Home/Partners/OurSponsors";
import Ourclients from "@/Components/Home/Partners/Ourclients";
import GrowYourBusiness from "@/Components/Home/Follow/GrowYourBusiness";
import Testimonials from "@/Components/Home/feedback/Testimonials";
import Newservice from "@/Components/Home/Service/Newservice";
import Faq from "@/Components/FAQ/Faq";
import Rolling from "@/Components/Home/Rolling-effect.jsx/Rolling";
import AnimateCompo from "@/Components/AnimateCompo/AnimateCompo";
import Infitescroll from "@/Components/Home/Partners/Infitescroll";
import MiddleExtra from "@/Components/Home/Move/MiddleExtra";
import Sponsorsx from "@/Components/Home/Partners/Sponsorsx";
import Macbook from "@/Components/Home/VideoSection/Macbook";
import { ServiceX } from "@/Components/Home/Service/ServiceX";
import { SpotlightPreview } from "@/Components/Home/Newhero/SpotlightPreview";
import { MainHome } from "@/Components/Home/NewHomez/MainHome";
import MainCountup from "@/Components/Home/Counts/MainCountup";
import Counts from "@/Components/Home/Counts/Counts";
import Extray from "@/Components/AnimateCompo/Extray";
import { AppleCardsCarouselDemo } from "../Components/Home/Service/Carousel/Comp/CardAnime2";
import { Herotext } from "@/Components/Home/Webhero/Herotext";
import WhyChooseUs from "@/Components/About/Choose Us/WhyChooseUs";
import Whyusz from "@/Components/AnimateCompo/Whyusz";
import Sticky from "@/Components/About/Skicky/Sticky";
import { Herotextthambi } from "@/Components/Home/Webhero/Herotextthambi";





export default function Home() {
  return (
    <main className="w-full "> {/*flex min-h-screen flex-col items-center justify-between */}
      {/* <HeroMainz /> */}
      {/* <SpotlightPreview/> */}



      {/* <Herotext /> */}
      <Macbook />
      <OurSponsors />
      <Infitescroll />

      {/*<MainCountup /> */}
      <Counts />
      <AnimateCompo />

      <Rolling />
      <Ourclients />
      {/* <Newservice /> */}
      <AppleCardsCarouselDemo />
      <ServiceX />
      {/* <Extray/> */}
      <Testimonials />
      <Faq />
      <GrowYourBusiness />
    </main>
  )
}
