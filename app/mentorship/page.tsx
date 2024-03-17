
import { Pricing } from "@/components/pricing";
import ServiceHero from "@/components/service-hero";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { TbNetwork } from "react-icons/tb";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";
import  VideoPlayer from "@/components/video-player";

export default function Mentorship() {
  let heading = "Get All The Necessary Guidance"
  let title = "Start Now With Our Mentorship Program Geared For You"
  let caption = "Get immersed right away as we teach you how to build your business. Acquire your LLC, your EIN number, your business bank account, van insurance, and more! Maintain your vision with our weekly calls as we teach you about business credit, rates across states, and how to use your MC / US DOT."
  let features = [
    {
      title : "Personalized Guidance",
      description : "Regular one-on-one sessions to address challenges and strategize for success",
      icon : <MdMenuBook />
    },
    {
      title : "Business Essentials",
      description : "Learn how to legally operate your business and how to build a solid foundation",
      icon : <PiStudentBold />
    },
    {
      title : "Networking Opportunities",
      description : "Connect with a network of fellow mentees and business partners for collaboration and shared insights",
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
  let pricingSubHeading = "One-on-One Mentorship"
  let pricingSubTitle = "Your mentorship will last 90 days upon purchase"
  let pricingFeatures = [
    {
      title: "Personalized Guidance",
    },
    {
      title: "Business Essentials"
    },
    {
      title: "Networking Opportunities"
    },
    {
      title: "Exclusive Resources"
    }
  ]
  let price = 650

    return (
      <div className="flex flex-col items-center px-4">
        <ServiceHero heading={heading} title={title} caption={caption} features={features}/>
        
        <Pricing service="/mentorship" heading={pricingHeading} title={pricingTitle} subTitle={pricingSubTitle} subHeading={pricingSubHeading} features={pricingFeatures} price={price} beforeDiscount={null}/>
      </div>
    )
  }