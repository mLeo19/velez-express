import ServiceHero from "@/components/service-hero"
import { PiStudentBold } from "react-icons/pi";
import { TbNetwork } from "react-icons/tb";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { MdMenuBook } from "react-icons/md";
import ShippingHero from "@/components/shipping-hero";

export default function Shipping() {

  let heading = "Top Tier Delivery Services"
  let title = "Transporting Equipment For Businesses Nationwide"
  let description = "Allow us to help your business thrive with timely and efficient delivery services. Request a quote today and see why our clients love us!"
  let features = [
    {
      title : "Reliable Cargo Transport",
      description : "Secure and timely transportation of your goods across the nation with Velez Express",
      icon : <MdMenuBook />
    },
    {
      title : "Customized Logistics Solutions",
      description : "Tailor-made logistics plans to meet the specific needs of your cargo and business",
      icon : <PiStudentBold />
    },
    {
      title : "Dedicated Customer Support",
      description : "24/7 customer support to address inquiries, track shipments, and resolve any issues",
      icon : <TbNetwork />
    },
    {
      title : "Transparent Pricing",
      description : "Detailed quotes and transparent communication throughout the shipping process",
      icon : <HiMagnifyingGlassCircle />
    }
  ]

    return (
      <div className="flex flex-col items-center px-4 pb-10">
        <ShippingHero heading={heading} title={title} description={description} features={features} />
      </div>
    )
  }