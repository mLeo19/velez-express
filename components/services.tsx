"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Service from "./service";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function Services() {
  const { ref } = useSectionInView("Services", 0.25);

  return (
    <section ref={ref} id="services" className="scroll-mt-28 mb-28">
      <SectionHeading>Our services</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* TODO: Fix bug regarding header tab when a service is clicked while having an active section that is not services */}
            <Service {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}