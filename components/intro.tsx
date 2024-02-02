"use client";

import Image from "next/image";
import React, { useRef, useState, Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight} from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Transition } from '@headlessui/react';
import { sendQuote } from "@/actions/sendQuote";
import SubmitBtn from './submit-btn';
import toast from "react-hot-toast";
import { PropsWithChildren } from 'react';

type FadeInProps = {
  delay: string;
}

type SlideOverLayerProps = {}


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // request quote variables
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
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/velez-express-logo.jpeg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          {/*
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🚚
          </motion.span>*/}
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Welcome to Velez Express</span>, where{" "}
        <span className="font-bold">22 year old Marlon</span> excels in{" "}
        <span className="underline">nationwide</span> cargo van deliveries. Explore 
        his <span className="italic">journey</span>, hire reliable{" "}
        <span className="italic">services</span>, and gain valuable <span className="italic">insights</span> into industry logistics.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <button
          onClick={() => setShow(!show)}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
        >
          Request a Quote{" "}
          <LuCalendarClock className="opacity-60 group-hover:translate-x-1 transition" />
        </button>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://instagram.com"
          target="_blank"
        >
          <FaInstagramSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://youtube.com"
          target="_blank"
        >
          <FaYoutube />
        </a>
      </motion.div>
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
  );
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
