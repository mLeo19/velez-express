
import { Pricing } from "@/components/pricing";
import ServiceHero from "@/components/service-hero";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { TbNetwork } from "react-icons/tb";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";
import  VideoPlayer from "@/components/video-player";

export default function Mentorship() {
  let heading = "VIP Guidance"
  let title = "Start Now With Our Private Mentorship Program"
  let features = [
    {
      title : "VIP One-on-One Sessions",
      description : "Enjoy exclusive, priority access to private mentoring sessions for unparalleled guidance",
      icon : <MdMenuBook />
    },
    {
      title : "Customized Strategic Planning",
      description : "Receive personalized business strategies and tailored plans to optimize your cargo van operations",
      icon : <PiStudentBold />
    },
    {
      title : "Networking Opportunities",
      description : "Connect with a network of fellow mentees for collaboration and shared insights",
      icon : <TbNetwork />
    },
    {
      title : "Priority Resource Access",
      description : "Gain first access to cutting-edge resources, tools, and insider information to stay ahead of the competition",
      icon : <HiMagnifyingGlassCircle />
    }
  ]

  let pricingHeading = "Simple no-tricks pricing"
  let pricingTitle = " With tailored guidance, continuous skill development, networking opportunities, and exclusive resources, you'll navigate the road to success with confidence and expertise"
  let pricingSubHeading = "Private VIP Mentorship"
  let pricingSubTitle = "Price reflects our mentorship price plus online payment fees"
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
  let price = 1000

    return (
      <div className="flex flex-col items-center px-4">
        <ServiceHero heading={heading} title={title} features={features}/>
        
        <Pricing service="/private-mentorship" heading={pricingHeading} title={pricingTitle} subTitle={pricingSubTitle} subHeading={pricingSubHeading} features={pricingFeatures} price={price}/>
      </div>
    )
  }