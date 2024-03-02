'use client'

import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { testimonials } from '@/lib/data'
import LazyYoutube from './lazy-youtube'

export default function TestimonialWheel() {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [autorotate, setAutorotate] = useState(true)
  const autorotateTiming = 7000

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  

  return (
    <div className='pb-16 pt-8 '>
      <div className="w-full relative  max-w-3xl mx-auto text-center px-4 sm:px-8 md:px-16">
        {/* Testimonial image */}
        <div className="relative h-[400px] ">
          <div className="absolute top-0 left-1/2 -translate-x-1/2  max-w-[35rem] w-full h-[400px]  before:absolute before:-z-10">
            <div className="h-full  ">
              {testimonials.map((testimonial, index) => (
                <Transition
                key={index}
                show={active === index}
                className="absolute inset-0 h-full z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                >
                  
                  <div className="h-[400px]">
                    <iframe
                      width="100%"
                      height="400"
                      src={`https://www.youtube.com/embed/${testimonial.vidId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-xl h-full "
                    ></iframe>
                  </div>
                </Transition>
              ))}          
            </div>
          </div>
        </div>
        {/* Text */}
        <div className=" h-fit my-9 md:mb-3 transition-all duration-150 delay-300 ease-in-out">
          <div className="relative flex flex-col  text-wrap" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-2xl font-bold before:content-['\201C'] after:content-['\201D']">{testimonial.quote}</div>
            </Transition>
          ))}

        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center z-50 ">

        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`cursor-pointer inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-600 transition-colors duration-150 ${active === index ? 'bg-blue-500 text-white shadow-blue-950/10' : 'bg-white hover:bg-blue-100 text-slate-900'}`}
            onClick={() => { setActive(index); setAutorotate(false); }}
          >
            <span>{testimonial.name}</span> <span className={`${active === index ? 'text-blue-200' : 'text-slate-300'}`}>-</span> <span>{testimonial.role}</span>
          </button>
        ))}

      </div>
      </div>
    </div>
  )
}
