import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type RequestQuoteEmailProps = {
  senderEmail: string;
  senderFrom: string;
  senderTo: string;
  senderDate: string;
  senderName: string;
  senderNumber: string;
  senderDescription: string,
  senderPounds: string,
  senderWidth: string,
  senderLength: string,
  senderHeight: string,
};

export default function RequestQuoteEmail({
  senderEmail,
  senderFrom,
  senderTo,
  senderDate,
  senderName,
  senderNumber,
  senderDescription,
  senderPounds,
  senderWidth,
  senderLength,
  senderHeight,
}: RequestQuoteEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your site: Quote Requested</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the request quote form
              </Heading>
              <Text>The sender's email is: {senderEmail}</Text>
              <Hr />
              <Text>The sender's phone number is: {senderNumber}</Text>
              <Hr />
              <Text>The sender's name is: {senderName}</Text>
              <Hr />
              <Text>The sender will transport from: {senderFrom}</Text>
              <Hr />
              <Text>The sender will transport to: {senderTo}</Text>
              <Hr />
              <Text>The sender's first available date is: {senderDate}</Text>
              <Hr />
              <Text>The sender's load description is: {senderDescription}</Text>
              <Hr />
              <Text>The sender's load weight in pounds is: {senderPounds}</Text>
              <Hr />
              <Text>The sender's load width is: {senderWidth}</Text>
              <Hr />
              <Text>The sender's load length is: {senderLength}</Text>
              <Hr />
              <Text>The sender's load height is: {senderHeight}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}