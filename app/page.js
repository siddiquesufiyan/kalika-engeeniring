"use client"
import HomeBanner from "./component/HomeBanner"
import OurProducts from "./component/OurProducts"
import WeServe from "./component/WeServe"
import HowWeWork from "./component/HowWeWork"
import Testimonial from "./component/Testimonial"
import Faq from "./component/Faq"
import Cta from "./component/Cta"
import ManufacturingAndReach from "./component/ManufacturingAndReach"
function page() {
  return (
  <>
<HomeBanner/>
<OurProducts/>
<HowWeWork/>
<ManufacturingAndReach/>
<WeServe/>
<Testimonial/>
<Faq/>
<Cta/>
  </>
  )
}

export default page
