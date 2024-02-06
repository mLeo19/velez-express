import Intro from "@/components/intro"
import SectionDivider from "@/components/section-divider"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import ServiceHero from "@/components/service-hero"
import { FaBook } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import { Pricing } from "@/components/pricing"

export default function Guide() {
  let heading = "Want to get started?"
  let title = "Learn With Our Complete Step-By-Step Guide"
  let features = [
    {
      title : "Comprehensive Learning Material",
      description : "Detailed step-by-step instructions and industry insights to set you on the path to success",
      icon : <MdMenuBook />
    },
    {
      title : "Personalized Business Strategies",
      description : "Tailored advice on crafting a business plan that suits your goals and resources",
      icon : <MdBusinessCenter />
    },
    {
      title : "Resource Optimization Tips",
      description : "Maximize efficiency with tips on route planning, cargo handling, and fuel management",
      icon : <FaShuttleVan />
    },
    {
      title : "Ongoing Support and Updates",
      description : "Stay informed with regular updates on industry trends and regulations",
      icon : <MdSupportAgent />
    }
  ]

  let pricingHeading = "Simple no-tricks pricing"
  let pricingTitle = "Packed with step-by-step instructions, industry insights, and resource optimization tips, this guide is your roadmap to launching and growing a successful cargo van business"
  let pricingSubHeading = "Complete Step-By-Step Guide"
  let pricingSubTitle = "Price reflects our mentorship price plus online payment fees"
  let pricingFeatures = [
    {
      title: "Comprehensive Learning Material",
    },
    {
      title: "Personalized Business Strategies"
    },
    {
      title: "Resource Optimization Tips"
    },
    {
      title: "Ongoing Support and Updates"
    }
  ]
  let price = 350

  return (
    <div className="flex flex-col items-center px-4">
      <ServiceHero heading={heading} title={title} features={features}/>
      <Pricing service="/guide" heading={pricingHeading} title={pricingTitle} subTitle={pricingSubTitle} subHeading={pricingSubHeading} features={pricingFeatures} price={price}/>
    </div>
  )
}
