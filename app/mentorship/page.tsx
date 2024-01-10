import { Pricing } from "@/components/pricing";
import ServiceHero from "@/components/service-hero";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { TbNetwork } from "react-icons/tb";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";

export default function Mentorship() {
  let heading = "Get All The Necessary Guidance"
  let title = "Start Now With Our Mentorship Program Geared For You"
  let features = [
    {
      title : "Personalized Guidance",
      description : "Regular one-on-one sessions to address challenges and strategize for success",
      icon : <MdMenuBook />
    },
    {
      title : "Continuous Skill Development",
      description : "Monthly mentoring sessions covering various aspects of cargo van operations",
      icon : <PiStudentBold />
    },
    {
      title : "Networking Opportunities",
      description : "Connect with a network of fellow mentees for collaboration and shared insights",
      icon : <TbNetwork />
    },
    {
      title : "Exclusive Resources",
      description : "Receive insider tips, tools, and resources to enhance your cargo van business",
      icon : <HiMagnifyingGlassCircle />
    }
  ]

  let pricingHeading = "Simple no-tricks pricing"
  let pricingTitle = " With tailored guidance, continuous skill development, networking opportunities, and exclusive resources, you'll navigate the road to success with confidence and expertise"
  let pricingSubHeading = "Lifetime membership"
  let pricingSubTitle = "Accelerate Your Success: Elevate your cargo van business with our mentorship program."
  let pricingFeatures = [
    {
      title: "Personalized Guidance",
    },
    {
      title: "Continuous Skill Development"
    },
    {
      title: "Networking Opportunities"
    },
    {
      title: "Exclusive Resources"
    }
  ]
  let price = "$349"

    return (
      <div className="flex flex-col items-center px-4">
        <ServiceHero heading={heading} title={title} features={features}/>
        <Pricing heading={pricingHeading} title={pricingTitle} subTitle={pricingSubTitle} subHeading={pricingSubHeading} features={pricingFeatures} price={price}/>
      </div>
    )
  }