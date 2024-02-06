import { Transition } from '@headlessui/react'
import React, { Fragment, useRef, useState } from 'react'
import { LuCalendarClock } from 'react-icons/lu'
import { PropsWithChildren } from 'react';
import { sendQuote } from '@/actions/sendQuote';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { IoClose } from "react-icons/io5";

type FadeInProps = {
  delay: string;
}

type SlideOverLayerProps = {}

export default function RequestQuote() {
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
      <button
          onClick={() => setShow(!show)}
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
        >
          Request a Quote{" "}
          <LuCalendarClock className="opacity-60 group-hover:translate-x-1 transition" />
        </button>
        {/* Slide over panel */}
        <Transition.Root show={show}>
          <BackgroundLayer />
          <SlideOverLayer>
            <h2 className="mb-6 text-left text-2xl font-bold text-gray-950 dark:text-gray-50">Request a Quote</h2>
            <p className="text-left text-gray-700 -mt-3 dark:text-white/80">Please complete the form below and one of our specialists will contact you as soon as possible to discuss pricing</p>
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
            <FadeIn delay="delay-[300ms]"> 
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
            <div className='flex space-x-4'>
              <FadeIn delay="delay-[400ms]"> 
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
              <FadeIn delay="delay-[400ms]"> 
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
            </div>
            <div className='flex space-x-4'>
              <FadeIn delay="delay-[500ms]"> 
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
              <FadeIn delay="delay-[500ms]"> 
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
            </div>
            <FadeIn delay="delay-[600ms]"> 
              <input
                type="text"
                id="description"
                name="description"
                placeholder='Load Description'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
              /> 
            </FadeIn>
            <div className='flex space-x-4'>
              <FadeIn delay="delay-[700ms]"> 
                <input
                type="text"
                id="pounds"
                name="pounds"
                placeholder='Lbs'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
                /> 
              </FadeIn>
              <FadeIn delay="delay-[700ms]"> 
                <input
                type="text"
                id="width"
                name="width"
                placeholder='Width'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
                /> 
              </FadeIn>
            </div>
            <div className='flex space-x-4'>
              <FadeIn delay="delay-[800ms]"> 
                <input
                type="text"
                id="length"
                name="length"
                placeholder='Length'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
                /> 
              </FadeIn>
              <FadeIn delay="delay-[800ms]"> 
                <input
                type="text"
                id="height"
                name="height"
                placeholder='Height'
                className="h-14 px-4 w-full text-black rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                required
                maxLength={500}
                /> 
              </FadeIn>
            </div>
            <div className=" ">
              <FadeIn delay="delay-[900ms]">
                <div className='flex items-center justify-center mt-4'>
                  <SubmitBtn />
                </div>
              </FadeIn>
            </div>
          </form>
          <FadeIn delay="delay-[1000ms]">
            <div className='flex items-center justify-center mt-4'>
              <button
                className="flex items-center justify-center gap-2 h-[3rem] w-[6rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
                  onClick={() => setShow(false)}
                >
                  Close{" "}
                 </button>
            </div>
          </FadeIn>
          {/* Top right close button */}
          <div className='absolute top-0 right-0 mr-4 text-3xl'>
            <button
             className=""
             onClick={() => setShow(false)}
            >
              <IoClose />
            </button>
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
                <div className="px-4 sm:px-6 relative">{children}</div>
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
  
