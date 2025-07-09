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
      I am a portuguese tech enthusiast, currently based in{" "}
      <b>Madrid</b>, with a strong passion <b>Data</b>, <b>CRM</b>, and the <b>Salesforce ecosystem</b>.
      </p>
      <p className="mb-3">
      My journey into technology started with a background in marketing, where I quickly realized that CRM was the perfect bridge between business and tech. Since then, I’ve been diving deeper into the world of data, marketing automation and problem-solving. I love the challenge of untangling complex issues, learning new tools, and constantly pushing myself to improve, and this website is just one of the many projects where I get to explore new technologies and skills.
      </p>
      <p className="mb-3">
      When it’s time to relax, you’ll probably find me playing video games, reading, or just enjoying some downtime with family and friends.
      </p>

    </motion.section>
  );
}
