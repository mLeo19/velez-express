"use client";

import React, { useState } from "react";

// import CustomDonationInput from "@/components/CustomDonationInput";
// import StripeTestCards from "@/components/StripeTestCards";

import { formatAmountForDisplay } from "@/lib/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "@/actions/stripe";

export default function CheckoutForm({price} : {price: number}): JSX.Element {
  const [loading] = useState<boolean>(false);
  /*const [input, setInput] = useState<{ customDonation: number }>({
    customDonation: Math.round(config.MAX_AMOUNT / config.AMOUNT_STEP),
  });*/

  /*const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ): void =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });*/

  return (
    <form action={createCheckoutSession} >
      {/* 
      <CustomDonationInput
        className="checkout-style"
        name="customDonation"
        min={config.MIN_AMOUNT}
        max={config.MAX_AMOUNT}
        step={config.AMOUNT_STEP}
        currency={config.CURRENCY}
        onChange={handleInputChange}
        value={input.customDonation}
      />
      */}
      <label className="mt-6 flex items-center justify-center gap-x-2">
        <input name="price" value={price} readOnly className="font-bold bg-transparent tracking-tight text-gray-900 outline-none text-5xl text-center w-[7rem]" />
        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
      </label>
      <button
        className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        type="submit"
        disabled={loading}
      >
        Get Access
      </button>
    </form>
  );
}