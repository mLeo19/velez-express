"use client";

import React, { useState } from "react";

// import CustomDonationInput from "@/components/CustomDonationInput";
// import StripeTestCards from "@/components/StripeTestCards";

import { formatAmountForDisplay } from "@/lib/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "@/actions/stripe";
import { BsArrowRight } from "react-icons/bs";

export default function CheckoutForm({price, service} : {price: number, service: string}): JSX.Element {
  const [loading] = useState<boolean>(false);
  let priceString = '$ ' + Math.round(price * 100) / 100;
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
      <div className=" mt-6 flex items-center justify-center gap-x-2 relative">
        <div className="w-full font-bold bg-transparent outline-none text-5xl text-center">
          {priceString}
        </div>
        <input type="hidden" name="service" value={service} />
        <input type="hidden" name="price" value={price}/>
      </div>
      <button
        className="mt-8 mx-auto group dark:bg-gray-950 bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition"
        type="submit"
        disabled={loading}
      >
        Get Access{" "}<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
      </button>
    </form>
  );
}