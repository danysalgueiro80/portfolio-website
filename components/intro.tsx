"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image'; 
import profilePic from '@/public/Dany-profile-pic.png';
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight,BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from '../context/active-section-context';
import { HeroHighlight } from "@/components/ui/hero-highlight";

// Helper to split text and preserve bold tags for the typewriter
function getTypewriterElements() {
  return [
    "Hello, I'm Dany. I'm a ",
    <HeroHighlight key="sfmc"><b>Salesforce Marketing Cloud</b></HeroHighlight>,
    " consultant, with ",
    <b key="years">3 years</b>,
    " of experience in ",
    <b key="crm">data-driven CRM projects</b>,
    ". Also: proud data enthusiast."
  ];
}

function CustomTypewriterRich({ elements, speed = 35, className = '', cursorClassName = '' }: { elements: (string | JSX.Element)[], speed?: number, className?: string, cursorClassName?: string }) {
  const [displayed, setDisplayed] = useState<(string | JSX.Element)[]>([]);
  const [charIndex, setCharIndex] = useState(0);
  const [flatText, setFlatText] = useState<string[]>([]);
  const [elementMap, setElementMap] = useState<{ start: number, end: number, jsx: JSX.Element }[]>([]);

  // Flatten the elements into a string array and map bold ranges
  useEffect(() => {
    let flat: string[] = [];
    let map: { start: number, end: number, jsx: JSX.Element }[] = [];
    let idx = 0;
    elements.forEach((el) => {
      if (typeof el === 'string') {
        flat.push(...el.split(''));
        idx += el.length;
      } else if (React.isValidElement(el)) {
        let text = '';
        const children = (el as React.ReactElement).props.children;
        if (typeof children === 'string') {
          text = children;
        } else if (Array.isArray(children)) {
          text = children.join('');
        }
        map.push({ start: idx, end: idx + text.length, jsx: el });
        flat.push(...text.split(''));
        idx += text.length;
      }
    });
    setFlatText(flat);
    setElementMap(map);
    setDisplayed([]);
    setCharIndex(0);
  }, [elements]);

  useEffect(() => {
    if (charIndex <= flatText.length) {
      const timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, flatText, speed]);

  useEffect(() => {
    // Rebuild the displayed array with bold tags as needed
    let result: (string | JSX.Element)[] = [];
    let i = 0;
    while (i < charIndex) {
      // Check if this index is inside a bold range
      const bold = elementMap.find(m => i >= m.start && i < m.end);
      if (bold) {
        const start = Math.max(i, bold.start);
        const end = Math.min(charIndex, bold.end);
        const text = flatText.slice(start, end).join('');
        result.push(React.cloneElement(bold.jsx, { key: bold.start }, text));
        i = end;
      } else {
        result.push(flatText[i]);
        i++;
      }
    }
    setDisplayed(result);
  }, [charIndex, flatText, elementMap]);

  return (
    <span className={className}>
      {displayed}
      <span className={(cursorClassName ? cursorClassName + ' ' : '') + 'typewriter-cursor animate-pulse'}>|</span>
    </span>
  );
}

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
        <CustomTypewriterRich
          elements={getTypewriterElements()}
          speed={35}
          className="inline"
          cursorClassName="" 
        />
        <style>{`.typewriter-cursor { color: #2D9EDB !important; }`}</style>
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
