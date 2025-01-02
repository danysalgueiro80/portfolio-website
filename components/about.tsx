"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a portuguese young adult, currently based in{" "}
      <span className="font-medium">Madrid</span>{" "}🇪🇸, with a strong passion for the
      {" "}
        <span className="font-medium">Salesforce</span> ecosystem.
      </p>
      <p className="mb-3">
      My journey into technology began during my academic path, which was primarily focused on marketing. I discovered that CRM perfectly bridges the gap between Marketing and Technology, and it has become my favorite area to explore. I thrive on learning something new every day and enjoy challenging myself—whether it's solving complex problems or experimenting with new tools, such as those I used while developing this website. The satisfaction of untangling a tricky issue and finding its solution is truly rewarding.
      </p>
      <p className="mb-3">
      When it’s time to relax, you’ll find me playing video games, reading books, or hanging out with friends — though getting me out of the house can be a difficult task sometimes.
      </p>

    </motion.section>
  );
}
