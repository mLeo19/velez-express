import { links } from "./data";
import { IconType } from 'react-icons';

export type SectionName = (typeof links)[number]["name"];

export type ServiceHeroProps = {
  heading: string;
  title: string;
  caption: string;
  features: {
    title : string,
    description: string,
    icon: React.ReactNode,
  }[];
};

export type ShippingHeroProps = {
  heading: string;
  title: string;
  description: string;
  features: {
    title : string,
    description: string,
    icon: React.ReactNode,
  }[];
};

export type PricingProps = {
  service: string;
  heading: string;
  title: string;
  subTitle: string;
  subHeading: string;
  features: {
    title: string,
  }[];
  price: number;
  beforeDiscount: null | number;
}

export type ReceiptProps = {
  c_email : string;
  c_name : string;
  c_paid : string;
  c_service : string; 
}
  