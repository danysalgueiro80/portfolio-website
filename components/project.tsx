"use client";

import { useRef, useState, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Add ESC key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    // Add event listener when modal is open
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isModalOpen]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Hide header when modal is open
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      header.style.display = isModalOpen ? 'none' : 'block';
    }
    return () => {
      if (header) {
        header.style.display = 'block';
      }
    };
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Card Image */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer"
          >
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              priority={true}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] group-even:-left-40"
            />
          </div>
        </section>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Animated overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="fixed inset-0 bg-black/95 z-40"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Static content container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div 
                className="relative w-full max-w-4xl mx-auto px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={1200}
                    height={800}
                    className="rounded-lg"
                    priority={true}
                    style={{ 
                      maxWidth: '100%',
                      height: 'auto',
                      maxHeight: '80vh',
                      objectFit: 'contain'
                    }}
                  />
                  <button
                    className="absolute top-4 right-4 text-[#579ED8] hover:text-[#579ED8]/70 transition-colors backdrop-blur-sm rounded-full p-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(false);
                    }}
                  >
                    <IoClose size={24} />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
