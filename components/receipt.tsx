import React from 'react'
import { ReceiptProps } from '@/lib/types'

export const Receipt = ({ c_email, c_name, c_paid, c_service } : ReceiptProps) => {
  return (
    <section className=' text-left my-12 px-6'>
      <div className='sm:px-0'>
        <h3 className='text-base font-semibold leading-7'>Payment Information</h3>
        <p className='mt-1 max-w-2xl text-sm leading-6'> General details for your new{' '}
        {c_service}{' '}purchase</p>
      </div>
      <div className='mt-6 border-t border-gray-100'>
      <dl className="divide-y divide-gray-100">
        <div className='py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
          <dt className="text-sm font-medium leading-6">Full name</dt>
          <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">{c_name}</dd>
        </div>
        <div className='py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
          <dt className="text-sm font-medium leading-6">Email address</dt>
          <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">{c_email}</dd>
        </div>
        <div className='py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
          <dt className="text-sm font-medium leading-6">Amount paid</dt>
          <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">{c_paid}</dd>
        </div>
      </dl>
      </div>
    </section>
  )
}
