"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { whyChooseUsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import TestimonialWheel from "./testimonial-wheel";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
    },
  }),
};

export default function Testimonials() {
  const { ref } = useSectionInView("Testimonials", 0.25);

  return (
    <motion.section
      id="testimonials"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Testimonials</SectionHeading>
      <TestimonialWheel />
      <h2 className="text-2xl font-medium capitalize mb-8 text-center">
        Why our clients choose us
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-2xl text-gray-800">
        {whyChooseUsData.map((reason, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl py-5 px-5 lg:px-7 dark:bg-white/10 dark:text-white/80 text-center"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex justify-center items-center text-5xl mb-2">
              <reason.icon/>
            </div>
            <div className=" font-bold mb-2">
              {reason.title}
            </div>
            <div className="text-base">
              {reason.desc}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}