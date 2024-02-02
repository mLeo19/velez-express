"use server"
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import RequestQuoteEmail from "@/email/request-quote-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendQuote = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const senderFrom = formData.get("from");
  const senderTo = formData.get("to");
  const senderDate = formData.get("date");
  const senderName = formData.get("name");
  const senderNumber = formData.get("number")

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderFrom, 5000)) {
    return {
      error: "Invalid sender from",
    };
  }

  if (!validateString(senderTo, 5000)) {
    return {
      error: "Invalid sender to",
    };
  }

  if (!validateString(senderDate, 5000)) {
    return {
      error: "Invalid sender date",
    };
  }

  if (!validateString(senderName, 5000)) {
    return {
      error: "Invalid sender name",
    };
  }

  if (!validateString(senderNumber, 5000)) {
    return {
      error: "Invalid sender number",
    };
  }



  // onboarding@resend.dev
  // delivered@resend.dev

  let data;
  try {
    data = await resend.emails.send({
      from: "Send Quote Form <onboarding@resend.dev>",
      to: "delivered@resend.dev",
      subject: "Message from send quote form",
      reply_to: senderEmail,
      react: React.createElement(RequestQuoteEmail, {
        senderEmail: senderEmail,
        senderFrom: senderFrom,
        senderTo: senderTo,
        senderDate: senderDate,
        senderName: senderName,
        senderNumber: senderNumber,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};