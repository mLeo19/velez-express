import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import completeGuide from "@/public/complete-guide.jpg";
import mentorship from "@/public/mentorship.jpg";
import shipping from "@/public/shipping.jpg";
import privateMentorship from "@/public/private-mentorship.jpg"
import goldMentorship from "@/public/gold-mentorship.jpg"
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BiSolidCommentEdit } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Services",
    hash: "/#services",
  },
  {
    name: "Testimonials",
    hash: "/#testimonials",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Shipping",
    href: "/shipping",
    description:
      "Obtain reliable and timely deliveries for your business equipment needs through transparent pricing and top-tier customer service.",
    tags: ["Product Safety", "Quick Delivery", "24/7 Live Support"],
    imageUrl: shipping,
  },
  {
    title: "Complete Guide",
    href: "/guide",
    description:
      "Acquire a comprehensive roadmap explaining how to succesfully compete in this industry and expand your network!",
    tags: ["One-Time Purchase", "Live Support", "Networking"],
    imageUrl: completeGuide,
  },/*
  {
    title: "Mentorship",
    href: "/mentorship",
    description:
      "Let us mentor you through every step of the way and gain access to 24/7 live support, one-on-one sessions, exclusive opportunities, and more!",
    tags: ["24/7 Live Support", "Networking", "Exclusive Offers"],
    imageUrl: mentorship,
  },*/
  {
    title: "Private Mentorship",
    href: "/private-mentorship",
    description:
      "Direct access to Marlon for tailored guidance, extensive skill development, elite networking opportunities, and more!",
    tags: ["24/7 Live Support", "Vip Mentorship", "Personalized Guidance"],
    imageUrl: privateMentorship,
  },
  {
    title: "Gold Packet Mentorship",
    href: "/gold-mentorship",
    description:
      "Gain lifetime access to 24/7 support, networking opportunities, assistance with personal credit, and more!",
    tags: ["Lifetine Value", "Business & Credit", "Personalized Guidance"],
    imageUrl: goldMentorship,
  },/*
  {
    title: "Test Product",
    href: "/test-product",
    description:
      "Direct access to Marlon for tailored guidance, extensive skill development, elite networking opportunities, and more!",
    tags: ["24/7 Live Support", "Vip Mentorship", "Personalized Guidance"],
    imageUrl: privateMentorship,
  },*/
] as const;



export const whyChooseUsData = [
  {
    title: "Flexible Scheduling",
    desc: 'Bid farewell to extended delivery timeframes. Choose a time that suits your convenience. Arrange a pickup at any hour, every day of the week',
    icon: BsFillCalendar2CheckFill
  },
  {
    title: "Affordable Pricing",
    desc: 'We ensure competitive pricing without compromising on quality. Discover affordability without sacrificing reliability for all your shipping needs',
    icon: FaMoneyBill
  },
  {
    title: "Convenience",
    desc: 'Seamless technology at your fingertips. Booking, tracking, communicating, and paying have never been this effortless. Secure a Delivery Professional in just one minute',
    icon: MdPhoneIphone
  },
  {
    title: "Peer-Reviewed",
    desc: 'Rely on the collective feedback of customers like yourself to ensure excellence. Our thorough review system guarantees that you consistently receive services from the best delivery professionals every time',
    icon: BiSolidCommentEdit
  },
  {
    title: "You are Protected",
    desc: 'Safeguard your cargo with our extensive cargo insurance and liability coverage. Your peace of mind is our priority, ensuring comprehensive protection for your valuable shipments',
    icon: AiFillSafetyCertificate
  },
  {
    title: "Safe and Reliable",
    desc: "Count on the safety and reliability of our services. Each Velez Express delivery professional is licensed, insured, background-checked, and reviewed, ensuring a secure and trustworthy experience for every customer",
    icon: BiSolidUserAccount
  },
] as const;

export const testimonials = [
  {
    img: '/testimonial-1.jpg',
    quote: "Working with Marlon has definitely been something great, something awesome, something new...",
    name: 'Enrique L',
    role: 'Transport 88',
    vidId: 'VZw9aKby_Js'
  },
  {
    img: '/testimonial-2.jpg',
    quote: "Some people get into this busines not knowing how to bid, not knowing where the good and bad areas are, he will cover all of that with you...",
    name: 'Rudy',
    role: 'RLV Management LLC',
    vidId: 'MVIk2q9EKcs'
  },
  {
    img: '/testimonial-3.jpg',
    quote: "If you're looking for someone that can produce results that you can see, Marlon is the real deal...",
    name: 'Vince',
    role: 'Fleet Birds LLC',
    vidId: '2fibWDQ9y1M'
  },
  {
    img: '/testimonial-1.jpg',
    quote: "The experience has been such a good one; in my first month I was able to make a bit over $10,000...",
    name: 'Roderick',
    role: 'Gold VIP Mentee',
    vidId: 'rdGlbHBbceQ'
  },
  {
    img: '/testimonial-1.jpg',
    quote: "Marlon is the man, he helped me with everything from A to Z...",
    name: 'Christian',
    role: 'Gold VIP Mentee',
    vidId: 'swWqST8K_DI'
  }
] as const;