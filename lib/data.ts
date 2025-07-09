import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MarketingCloudEmailSpecialist_Dany from "@/public/MarketingCloudEmailSpecialist_Dany.jpg";
import MarketingCloudDeveloper_Dany from "@/public/MarketingCloudDeveloper_Dany.jpg";
import SalesforceDataCloudConsultant_Dany from "@/public/SalesforceDataCloudConsultant_Dany.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor Degree in Marketing",
    location: "University of Aveiro, Portugal",
    description:"",    
    icon: React.createElement(LuGraduationCap),
    date: "2017-2020",
  },
  {
    title: "Digital Marketing Intern",
    location: "Hey Digital Ventures - Remote",
    description:
      "First experience, managing different clients in a digital marketing agency environment (WordPress, Social media ads and copywriting, SEO).",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Postgraduate degree in Digital Marketing",
    location: "IPAM, Porto",
    description:"",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Campaign Specialist",
    location: "VML MAP - Lisbon",
    description:
    "Creating and implementing HTML e-mails, with accurate targets through SQL and Adobe workflows. Working with Salesforce Marketing Cloud and Adobe Campaign Standard.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Master’s degree in Marketing and Innovation",
    location: "IADE - School of Design, Technology, and Communication, Lisbon",
    description:"",    
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Senior Solution Expert",
    location: "VML MAP - Lisbon",
    description:
    "Managing and resolving technical issues in Salesforce Marketing Cloud. Implementing data-driven solutions, leading technical projects, and collaborating with global cross-functional teams.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Salesforce Marketing Cloud Consultant",
    location: "Making Science - Madrid",
    description:
    "Focused on Salesforce Marketing Cloud, Data Cloud and Personalization. Providing clients a holistic CRM experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Salesforce Marketing Cloud Email Specialist",
    description:
      "Completed in September 2023.",
    tags: ["Email Studio","A/B Testing", "Automation Studio", "Journey Builder"],
    imageUrl: MarketingCloudEmailSpecialist_Dany,
  },
  {
    title: "Salesforce Marketing Cloud Developer",
    description:
      "Completed in September 2024.",
    tags: ["AMPscript", "SQL", "REST API", "SOAP API","SSJS"],
    imageUrl: MarketingCloudDeveloper_Dany,
  },
  {
    title: "Salesforce Data Cloud Consultant",
    description: "Completed in July 2025.",
    tags: [
      "Data Cloud Administration",
      "Data Modeling",
      "Data Analysis",
      "Data Activation",
      "Data Explorer & APIs"
    ],
    imageUrl: SalesforceDataCloudConsultant_Dany,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SQL",
  "AMPscript",
  "JavaScript",
  "APIs",
  "Salesforce Marketing Cloud",
  "Salesforce Data Cloud",
  "Salesforce Personalization",
  "Adobe Campaign Standard",
] as const;
