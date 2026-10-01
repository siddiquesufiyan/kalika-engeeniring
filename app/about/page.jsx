
"use client"
import AboutHero from "../component/AboutHero"
import OurStory from "../component/OurStory"
import EngineeringExcellence from "../component/EngineeringExcellence"
import Testimonial from "../component/Testimonial"
import Faq from "../component/Faq"
import Cta from "../component/Cta"
import OurVison from "../component/OurVison"
function page() {
  return (
    <div>
    <AboutHero/>
    <OurStory/>
       <OurVison/>
    <EngineeringExcellence/>
    <Testimonial/>
    <Faq/>
    <Cta/>
    </div>
  )
}

export default page
