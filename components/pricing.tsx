import React from 'react'
import { IconType } from 'react-icons';
import { FaCheck } from "react-icons/fa";
import { PricingProps } from '@/lib/types';
import CheckoutForm from './checkout-form';

export const Pricing = ({service, heading, title, subTitle, subHeading, features, price, beforeDiscount} : PricingProps) => {
  let fees = ((price + 0.3) / (1 - 0.029)) - price;
  let roundedFees = Math.round(fees * 100) / 100;
  return (
    <div className="py-24 sm:py-32">
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-6 text-lg leading-8">
            {title}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-500 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight ">{subHeading}</h3>
            <p className="mt-6 text-base leading-7 ">
              {subTitle}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-x-3">
                  <FaCheck className="h-6 w-5 flex-none" aria-hidden="true" />
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-transparent py-10 text-center ring-1 ring-inset ring-gray-900/5 dark:ring-gray-500/50 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs  ">
                {/* Check if discount should be displayed */}
                {beforeDiscount ? (
                  <div className='flex  gap-x-14  justify-between w-full '>
                  <div className='text-left'>
                    <p className=" text-base font-semibold text-red-600 dark:text-red-700">Original Price</p>
                    <p className=" text-xl font-semibold ">Limited Time Offer</p>
                    <p className="text-base font-semibold "> Transaction Fees</p>
                  </div>
                  <div className='text-right'>
                    <p className=" text-base font-semibold text-red-600 dark:text-red-700">${beforeDiscount}</p>
                    <p className=" text-xl font-semibold ">${price}</p>
                    <p className=" text-base font-semibold ">+ ${roundedFees}</p>
                  </div>
                </div>
                ) : (
                  <div className='flex   gap-x-14 justify-between w-full '>
                    <div className='text-left'>
                    <p className=" text-xl font-semibold ">Price</p>
                    <p className="text-base font-semibold "> Transaction Fees</p>
                    </div>
                    <div className='text-right'>
                    <p className=" text-xl font-semibold ">${price}</p>
                    <p className=" text-xl font-semibold ">+ ${roundedFees}</p>
                    </div>
                  </div>
                )}
                
                <CheckoutForm price={price + fees} service={service}/>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  REFUNDS NOT AVAILABLE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
