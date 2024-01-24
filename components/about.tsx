"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import YoutubeVideo from "./youtube-video";
import LazyYoutube from "./lazy-youtube";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Meet Marlon, the visionary 22-year-old behind{" "}
        <span className="font-medium">Velez Express</span>, hailing from the vibrant 
        city of <span className="underline">West Palm Beach, FL</span>. His story 
        is one of resilience and entrepreneurial spirit, crafting Velez Express from 
        the <span className="font-medium">ground up</span> into 
        a <span className="font-medium">thriving</span> cargo van delivery business that 
        spans the <span className="underline">entire nation</span>.
      </p>
      <p className="mb-3">
        Beyond transporting goods, Marlon's passion lies in empowering others to be 
        their <span className="font-medium">own bosses</span>. Whether you're a seasoned 
        client seeking reliable services or a dreamer ready to embark on your{" "}
        <span className="font-medium">entrepreneurial journey</span>, we are here 
        for you. With a genuine  <span className="italic">love</span> for{" "}
        <span className="italic">helping</span> clients and aspiring entrepreneurs alike, 
        we extend a warm invitation to <span className="underline">anyone with aspirations</span> of 
        creating their own <span className="font-medium">cargo van delivery businesses</span>. Join us 
        at Velez Express, where success isn't just a destination - it's a journey we embark 
        on <span className="underline">together</span>, <span className="font-medium">turning dreams into thriving ventures</span>.
      </p>
      <LazyYoutube videoId="fK0d1rPPAHU" /> 
      
    </motion.section>
  );
}