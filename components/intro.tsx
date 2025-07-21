"use client";

import React, { useEffect } from 'react';
import Image from 'next/image'; 
import profilePic from '@/public/Dany-profile-pic.png';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight,BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '../context/active-section-context';
import ReactTypingEffect from 'react-typing-effect';

export default function Intro() {

    const { ref, inView } = useInView({
        threshold: 0.4,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection("Home");
        }
    }, [inView, setActiveSection, timeOfLastClick]);


  return (
    <section ref={ref} id="home" className="mb-28 max-w-[58rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type:"tween",
                duration: 0.2,
            }}
            >
          <Image
            src={profilePic} 
            alt="Profile Picture"
            width="192"
            height="192"
            priority={true} 
            className="h-24 w-24 rounded-full shadow-xl"
          />
            </motion.div>
          <motion.span className="absolute bottom-0 right-0 text-4x1"
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
                type:"spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.5,
            }}
          >👋</motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="inline">
          <ReactTypingEffect
            text={["Hello, I'm Dany. I'm a Salesforce Marketing Cloud consultant with 3 years of experience. I enjoy building campaign targets with SQL, setting up beautiful customer journeys, and developing personalized HTML emails."]}
            speed={50}
            eraseDelay={9999999}
            typingDelay={200}
            cursorClassName="text-blue-500"
            className="inline"
          />
        </span>
      </motion.h1>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "tween",
                          duration: 0.2,
                        }}
            >

                <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer border border-black/10">
                Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
            <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10" href="/CV_DanySalgueiro_2024.pdf" download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/> </a>
            
            <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/danysalgueiro/" target="_blank"><BsLinkedin /></a>
            </motion.div>
    </section>
  );
}
