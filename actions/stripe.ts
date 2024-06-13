"use server";

import type { Stripe } from "stripe";

import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { CURRENCY } from "@/config";
import { formatAmountForStripe } from "@/lib/stripe-helpers";
import { stripe } from "@/lib/stripe";

export async function createCheckoutSession(data: FormData): Promise<void> {
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      //payment_method_types: ['card', 'klarna'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            product_data: {
              name: "One Time Purchase",
            },
            unit_amount: formatAmountForStripe(
              Number(data.get("price") as string),
              CURRENCY,
            ),
          },
        },
      ],
      success_url: `${headers().get(
        "origin",
      )}${data.get("service") as string}/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headers().get("origin")}${data.get("service") as string}`,
    });

  redirect(checkoutSession.url as string);
}

export async function createPaymentIntent(
  data: FormData,
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent =
    await stripe.paymentIntents.create({
      amount: formatAmountForStripe(
        Number(data.get("price") as string),
        CURRENCY,
      ),
      automatic_payment_methods: { enabled: true },
      currency: CURRENCY,
    });

  return { client_secret: paymentIntent.client_secret as string };
}

export async function createCheckoutSession2(
  data: FormData,
): Promise<{ client_secret: string | null; url: string | null }> {

  const origin: string = headers().get("origin") as string;

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "pay",
      payment_method_types: ['card', 'afterpay_clearpay', 'cashapp', 'klarna'],
      shipping_address_collection: {
      // Specify which shipping countries Checkout should provide as options for shipping locations
        allowed_countries: ['AU', 'GB', 'NZ', 'US'],
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: CURRENCY,
            product_data: {
              name: "Custom amount donation",
            },
            unit_amount: formatAmountForStripe(
              Number(data.get("price") as string),
              CURRENCY,
            ),
          },
        },
      ],
        success_url: `${origin}/${data.get("service") as string}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/${data.get("service") as string}`,
      
    });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}