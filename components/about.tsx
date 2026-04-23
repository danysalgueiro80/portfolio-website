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
        I’m a <b>Marketing Operations Consultant</b> currently based in <b>Porto, Portugal</b>. I relocated to Madrid for work, where I spent time deepening my experience in the Salesforce ecosystem before returning to Portugal.
      </p>
      <p className="mb-3">
        I specialise in <b>lifecycle automation</b>, <b>CRM architecture</b>, and <b>data-driven marketing</b> — currently at Making Science, where I manage the full marketing operations stack for a <b>400K+ customer base</b>, from data ingestion and segmentation in <b>Salesforce Data Cloud</b> to multi-channel journey orchestration across email, SMS, and push.
      </p>
      <p className="mb-3">
        My background started in marketing, but I’ve always gravitated toward the technical side — the systems, the data, and the automation logic that makes everything run. If a process is manual and repeatable, I’m probably already thinking about how to automate it.
      </p>
      <p className="mb-3">
        This site is one of those side projects — built with <b>Next.js</b>, <b>TypeScript</b>, and <b>Tailwind</b>, and continuously improved as I learn new things.
      </p>

    </motion.section>
  );
}
