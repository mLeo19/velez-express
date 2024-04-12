
import { Pricing } from "@/components/pricing";
import ServiceHero from "@/components/service-hero";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { TbNetwork } from "react-icons/tb";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";
import  VideoPlayer from "@/components/video-player";

export default function Mentorship() {
  let heading = "VIP Mentorship"
  let title = "Start Now With Our Private Mentorship Program"
  let caption = "Go beyond a mentorship and let us work with you. Not only will you get all of our mentorship guidance, but we will dispatch for you until you gain traction on your own loads. Learn about direct shippers, load board usage & integration, and more! You will also receive personalized one-on-one meet-ups and gain direct contact to Marlon!"
  let features = [
    {
      title : "Personalized Sessions",
      description : "Enjoy clear and constant contact with Marlon's one-on-one meetups and maximize your growth",
      icon : <MdMenuBook />
    },
    {
      title : "Dispatch Opportunities",
      description : "Receive qualified load opportunities from us to get started right away!",
      icon : <PiStudentBold />
    },
    {
      title : "Networking Opportunities",
      description : "Connect with a network of fellow mentees and business partners for collaboration and shared insights",
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
  let pricingSubTitle = "Your private mentorship will last 12 months upon purchase"
  let pricingFeatures = [
    {
      title: "Personalized Sessions",
    },
    {
      title: "Dispatch Opportunities"
    },
    {
      title: "Networking Opportunities"
    },
    {
      title: "Priority Resource Access"
    }
  ]
  let price = 1300

    return (
      <div className="flex flex-col items-center px-4">
        <ServiceHero heading={heading} title={title} caption={caption} features={features}/>
        
        <Pricing service="/private-mentorship" heading={pricingHeading} title={pricingTitle} subTitle={pricingSubTitle} subHeading={pricingSubHeading} features={pricingFeatures} price={price} beforeDiscount={1500}/>
      </div>
    )
  }