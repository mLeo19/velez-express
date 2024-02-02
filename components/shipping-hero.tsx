'use client'

import React, {useRef} from 'react'
import { IconType } from 'react-icons';
import { motion } from "framer-motion";
import { ServiceHeroProps } from '@/lib/types';
import { ShippingHeroProps } from '@/lib/types';
import Link from 'next/link';
import { BsArrowRight} from "react-icons/bs";
import { Transition } from '@headlessui/react';
import { Fragment, useId, useState } from 'react';
import { PropsWithChildren } from 'react';
import { ChangeEvent } from 'react';
import { sendQuote } from "@/actions/sendQuote";
import SubmitBtn from './submit-btn';
import toast from "react-hot-toast";

type FadeInProps = {
  delay: string;
}

type SlideOverLayerProps = {}


export default function ShippingHero({heading, title, description, features} : ShippingHeroProps) {
    const [show, setShow] = useState(false)
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')

    const formRef = useRef<HTMLFormElement>(null)

  return (
    <>
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
          {description}
        </motion.p>
        <div className='flex items-center justify-center mt-6'>
          <button
            onClick={() => setShow(!show)}
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition"
          >
            Request a Quote{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </button>
        </div>
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
    {/* Slide over panel */}
    <Transition.Root show={show}>
        <BackgroundLayer />
        <SlideOverLayer>
          <h2 className="my-6 text-2xl font-bold text-gray-950 dark:text-gray-50">Request a Quote</h2>
          <p className="text-gray-700 -mt-3 dark:text-white/80">Please complete the form below and one of our specialists will contact you as soon as possible to discuss pricing</p>
          <form className="space-y-4 mt-6 flex flex-col"
            ref={formRef}
            action={async (formData) => {
                const { data, error } = await sendQuote(formData);
      
                if (error) {
                  toast.error(error);
                  return;
                }
      
                console.log(data)
                formRef.current?.reset()
                toast.success("Quote request sent successfully!");
                
              }}
          >
            <FadeIn delay="delay-[200ms]"> 
              <input
                type="text"
                id="from"
                name="from"
                placeholder='Transport From:'
                className="h-14 w-full px-4 text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
              /> 
            </FadeIn>
            <FadeIn delay="delay-[400ms]"> 
              <input
                type="text"
                id="to"
                name="to"
                placeholder='Transport To:'
                className="h-14 w-full px-4 text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
              /> 
            </FadeIn>
            <FadeIn delay="delay-[600ms]"> 
              <input
                type="text"
                id="date"
                name="date"
                placeholder='First Available Date'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
              /> 
            </FadeIn>
            <FadeIn delay="delay-[700ms]"> 
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Name'
                className="h-14 w-full px-4 text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
              /> 
            </FadeIn>
            <FadeIn delay="delay-[800ms]"> 
              <input
                type="text"
                id="email"
                name="email"
                placeholder='Email'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
              /> 
            </FadeIn>
            <FadeIn delay="delay-[900ms]"> 
              <input
                type="text"
                id="number"
                name="number"
                placeholder='Phone Number'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
              /> 
            </FadeIn>
            <div className="my-6">
            <FadeIn delay="delay-[1000ms]">
              <div className='flex items-center justify-center mt-6'>
                <SubmitBtn />
              </div>
            </FadeIn>
          </div>
          </form>
          
          <div className="my-6">
            <FadeIn delay="delay-[1100ms]">
              <div className='flex items-center justify-center mt-6'>
                <button
                  className="group bg-gray-900 dark:bg-white dark:bg-opacity-10 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition"
                  onClick={() => setShow(false)}
                >
                  Close{" "}
                 </button>
              </div>
            </FadeIn>
          </div>
        </SlideOverLayer>
      </Transition.Root>
    </>
  )
}

const BackgroundLayer = () => (
    <Transition.Child
      enter="transition-opacity ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-gray-500 opacity-75" />
    </Transition.Child>
  )

  const SlideOverLayer = ({ children } : PropsWithChildren<SlideOverLayerProps>) => (
    <Transition.Child
      as={Fragment}
      enter="transform transition ease-in-out duration-500"
      enterFrom="translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-500 delay-100"
      leaveFrom="translate-x-0"
      leaveTo="translate-x-full"
    >
      <div className="fixed inset-0 overflow-hidden z-[999]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-xl">
              <div className="flex h-full flex-col overflow-y-scroll bg-gray-50 dark:bg-gray-900 py-6 shadow-xl">
                <div className="px-4 sm:px-6">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition.Child>
  )

  const FadeIn = ({ delay, children } : PropsWithChildren<FadeInProps>) => (
    <Transition.Child
      enter={`transition-all ease-in-out duration-700 ${delay}`}
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  )
/*
  const Input = ({ label, ...props } ) => {
    const inputId = useId()
  
    return (
      <div className='text-black'>
        <label className='text-black' htmlFor={inputId}>{label}</label>
        <div className="mt-1">
          <input
            type="text"
            id={inputId}
            className="w-full rounded-md border-2"
            {...props}
          />
        </div>
      </div>
    )
  }
  */
