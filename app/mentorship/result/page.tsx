
import type { Stripe } from "stripe";

import PrintObject from "@/components/print-object";
import { stripe } from "@/lib/stripe";
import Link from "next/link";

import { BsArrowRight} from "react-icons/bs";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;


  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-8 pt-28 sm:pt-36 flex justify-center items-center mx-auto">
      <div className="mx-auto">
      <h2 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">Status: {paymentIntent.status}</h2>
      <h3 className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl">Keep an eye out for your confirmation email!</h3>
      {/* <PrintObject content={checkoutSession} /> */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
      <Link
          href="/"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 border border-white/10 hover:bg-gray-950 active:scale-105 transition"
        >
          Back Home{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

      </div>
      </div>
    </section>
  );
}