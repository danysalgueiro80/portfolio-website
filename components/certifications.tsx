"use client";

// Certifications component with simplified modal behavior
import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

type Category = "All" | "Salesforce" | "Data";

export default function Certifications() {
  const { ref } = useSectionInView("Certifications", 0.5);
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [selectedCertification, setSelectedCertification] = useState<(typeof certificationsData)[number] | null>(null);

  const categories: Category[] = ["All", "Salesforce", "Data"];

  const filteredCertifications = certificationsData.filter((cert) => {
    if (selectedCategory === "All") return true;
    return cert.category === selectedCategory;
  });

  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertification(null);
      }
    };

    if (selectedCertification) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedCertification]);

  // Prevent page scrolling when modal is open
  useEffect(() => {
    if (selectedCertification) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertification]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={ref} id="certifications" className="scroll-mt-28 mb-28">
      <SectionHeading>My Accomplishments</SectionHeading>
      
      {/* Filter Tabs - Matching header design */}
      <motion.div 
        className="flex justify-center mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative flex">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="relative px-6 py-2 rounded-full text-sm font-normal transition-all duration-200 hover:font-bold dark:text-gray-500 dark:hover:text-gray-300"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {selectedCategory === category && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                  layoutId="activeCategory"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">
                {category}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Certifications Grid - Matching project design exactly */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={selectedCategory}
      >
        <AnimatePresence mode="wait">
          {filteredCertifications.slice(0, 4).map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="group mb-3 sm:mb-8 last:mb-0"
            >
              <section 
                className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-pointer"
                onClick={() => setSelectedCertification(cert)}
              >
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
                  <h3 className="text-2xl font-semibold">{cert.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                    {cert.description}
                  </p>
                  <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {cert.tags.slice(0, 4).map((tag, tagIndex) => (
                      <li
                        className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                        key={tagIndex}
                      >
                        {tag}
                      </li>
                    ))}
                    {cert.tags.length > 4 && (
                      <li className="text-[0.7rem] text-gray-500 dark:text-gray-400 px-3 py-1">
                        +{cert.tags.length - 4} more
                      </li>
                    )}
                  </ul>
                </div>

                {/* Card Image - Exactly like project layout */}
                <div className="absolute hidden sm:block top-8 -right-40 w-[28.25rem]">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.title}
                    quality={95}
                    priority={true}
                    className="rounded-t-lg shadow-2xl transition 
                      group-hover:scale-[1.04]
                      group-hover:-translate-x-3
                      group-hover:translate-y-3
                      group-hover:-rotate-2"
                  />
                </div>
              </section>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertification && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertification(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl sm:max-w-4xl md:max-w-5xl lg:max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertification(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors z-10"
              >
                <IoClose size={24} />
              </button>
              
              <div className="p-6 pr-16">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white break-words">
                    {selectedCertification.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedCertification.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertification.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center w-full">
                  <div className="w-full max-w-3xl sm:max-w-3xl md:max-w-4xl lg:max-w-4xl ml-8">
                    <Image
                      src={selectedCertification.imageUrl}
                      alt={selectedCertification.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                      priority
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 