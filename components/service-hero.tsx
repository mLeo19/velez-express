'use client'

import React from 'react'
import { IconType } from 'react-icons';
import { motion } from "framer-motion";
import { ServiceHeroProps } from '@/lib/types';

export default function ServiceHero({heading, title, caption, features} : ServiceHeroProps) {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 pt-28 sm:pt-36 ">
      <div className='mx-auto'>
        <motion.h2
          className="text-base font-semibold leading-7"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {heading}
        </motion.h2>
        <motion.p
          className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-lg leading-8"
        >
          {caption}
        </motion.p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl flex justify-center items-center'>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              className="relative pl-16"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <div className="text-base font-semibold leading-7">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                  <span className='text-3xl'>
                    {feature.icon}
                  </span>
                </div>
                <div>
                  {feature.title}
                </div>
              </div>
              <dd className="mt-2 text-base leading-7">{feature.description}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
