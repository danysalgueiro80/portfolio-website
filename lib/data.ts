import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MarketingCloudEmailSpecialist_Dany from "@/public/MarketingCloudEmailSpecialist_Dany.jpg";
import MarketingCloudDeveloper_Dany from "@/public/MarketingCloudDeveloper_Dany.jpg";
import SalesforceDataCloudConsultant_Dany from "@/public/SalesforceDataCloudConsultant_Dany.png";
import DataCampBigQuery_Dany from "@/public/DataCampBigQuery_Dany.png";
import MarketingCloudPersonalization_Dany from "@/public/MarketingCloudPersonalization_Dany.png";

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
    name: "Accomplishments",
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
    "Authored and deployed HTML email campaigns with precise audience targeting via SQL and Adobe Campaign workflows. Worked across Salesforce Marketing Cloud and Adobe Campaign Standard serving Unilever.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Master's degree in Marketing and Innovation",
    location: "IADE - School of Design, Technology, and Communication, Lisbon",
    description:"",    
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "Senior Solution Expert",
    location: "VML MAP - Lisbon",
    description:
    "Technical ownership of Salesforce Marketing Cloud operations for IKEA. Resolved complex platform issues, led data-driven lifecycle projects, and collaborated with global cross-functional teams.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Salesforce Marketing Cloud Consultant",
    location: "Making Science - Madrid",
    description:
    "End-to-end ownership of marketing automation for a major European energy company — lifecycle programmes, SQL-based segmentation, Salesforce Data Cloud architecture, and multi-channel journey orchestration across email, SMS, push, and web. Managing a customer base of 400K+ users.",
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

export const certificationsData = [
  {
    title: "Salesforce Marketing Cloud Email Specialist",
    description: "Completed in September 2023.",
    tags: ["Email Studio", "A/B Testing", "Automation Studio", "Journey Builder"],
    imageUrl: MarketingCloudEmailSpecialist_Dany,
    category: "Salesforce",
  },
  {
    title: "Salesforce Marketing Cloud Developer",
    description: "Completed in September 2024.",
    tags: ["AMPscript", "SQL", "REST API", "SOAP API", "SSJS"],
    imageUrl: MarketingCloudDeveloper_Dany,
    category: "Salesforce",
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
    category: "Salesforce",
  },
  {
    title: "Salesforce Marketing Cloud Personalization",
    description: "Completed in January 2026.",
    tags: ["Personalization", "Behavioural Tracking", "Segmentation", "Recommendations", "A/B Testing"],
    imageUrl: MarketingCloudPersonalization_Dany,
    category: "Salesforce",
  },
  {
    title: "DataCamp Introduction to BigQuery",
    description: "Completed in July 2025.",
    tags: ["BigQuery Architecture", "Cloud SQL", "Data Types", "CTEs", "Query Optimization", "DML statements"],
    imageUrl: DataCampBigQuery_Dany,
    category: "Data",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SQL",
  "AMPscript",
  "SSJS",
  "JavaScript",
  "JSON",
  "REST API",
  "SOAP API",
  "Git",
  "Salesforce Marketing Cloud",
  "Salesforce Data Cloud",
  "Salesforce Personalization",
  "Adobe Campaign Standard",
  "Journey Builder",
  "Automation Studio",
  "n8n",
] as const;
