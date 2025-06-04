
import { Pricing } from "@/components/pricing";
import ServiceHero from "@/components/service-hero";
import { FaBook } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { TbNetwork } from "react-icons/tb";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";
import  VideoPlayer from "@/components/video-player";

export default function Mentorship() {
  let heading = "Lifetime Value Mentorship"
  let title = "Enroll Now With Our GOLD Mentorship Program"
  let caption = "Go beyond a mentorship and let us work with you. Not only will you get all of our mentorship guidance, but we will dispatch for you until you gain traction on your own loads. Learn about direct shippers, load board usage & integration, and more! You will also receive personalized one-on-one meet-ups and gain direct contact to Marlon!"
  let features = [
    {
      title : "24/7 Access & In-Person Meetings",
      description : "Enjoy clear and constant contact with Marlon's one-on-one meetups and maximize your growth",
      icon : <MdMenuBook />
    },
    {
      title : "Access to Direct Shoppers & Platform of Drivers",
      description : "Receive qualified load opportunities from us to get started right away!",
      icon : <PiStudentBold />
    },
    {
      title : "Networking Opportunities",
      description : "Connect with a network of fellow mentees and business partners for collaboration and shared insights",
      icon : <TbNetwork />
    },
    {
      title : "Assistance with Business & Personal Credit",
      description : "Gain first access to cutting-edge resources, tools, and insider information to stay ahead of the competition",
      icon : <HiMagnifyingGlassCircle />
    }
  ]

  let pricingHeading = "Simple no-tricks pricing"
  let pricingTitle = " With tailored guidance, continuous skill development, networking opportunities, and exclusive resources, you'll navigate the road to success with confidence and expertise"
  let pricingSubHeading = "Gold Package Mentorship"
  let pricingSubTitle = "Your private mentorship has LIFETIME value"
  let pricingFeatures = [
    {
      title: "24/7 Access & In-Person Meetings",
    },
    {
      title: "Access to Direct Shoppers & Platform of Drivers"
    },
    {
      title: "Networking Opportunities"
    },
    {
      title: "Assistance with Business & Personal Credit"
    }
  ]
  let price = 2170

    return (
      <div className="flex flex-col items-center px-4">
        <ServiceHero heading={heading} title={title} caption={caption} features={features}/>
        
        <Pricing service="/gold-mentorship" heading={pricingHeading} title={pricingTitle} subTitle={pricingSubTitle} subHeading={pricingSubHeading} features={pricingFeatures} price={price} beforeDiscount={2600}/>
      </div>
    )
  }