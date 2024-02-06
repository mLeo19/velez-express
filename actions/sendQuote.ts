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
  const senderNumber = formData.get("number");
  const senderDescription = formData.get("description");
  const senderPounds = formData.get("pounds");
  const senderWidth = formData.get("width");
  const senderLength = formData.get("length");
  const senderHeight = formData.get("height");

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

  if (!validateString(senderDescription, 5000)) {
    return {
      error: "Invalid sender description",
    };
  }

  if (!validateString(senderPounds, 5000)) {
    return {
      error: "Invalid sender pounds",
    };
  }

  if (!validateString(senderWidth, 5000)) {
    return {
      error: "Invalid sender width",
    };
  }

  if (!validateString(senderLength, 5000)) {
    return {
      error: "Invalid sender length",
    };
  }

  if (!validateString(senderHeight, 5000)) {
    return {
      error: "Invalid sender height",
    };
  }



  // onboarding@resend.dev
  // delivered@resend.dev

  let data;
  try {
    data = await resend.emails.send({
      from: "Send Quote Form <mail@velezexpressllc.com>",
      to: "velezexpress7@gmail.com",
      subject: "Message from send quote form",
      reply_to: senderEmail,
      react: React.createElement(RequestQuoteEmail, {
        senderEmail: senderEmail,
        senderFrom: senderFrom,
        senderTo: senderTo,
        senderDate: senderDate,
        senderName: senderName,
        senderNumber: senderNumber,
        senderDescription: senderDescription,
        senderPounds: senderPounds,
        senderWidth: senderWidth,
        senderLength: senderLength,
        senderHeight: senderHeight,
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