"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 360);
    setTimeout(() => {
      toggleTheme();
    }, 400);
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ 
          duration: theme === "light" ? 0.4 : 0.5, 
          ease: "easeInOut" 
        }}
        className="flex items-center justify-center"
      >
        {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
      </motion.div>
    </button>
  );
}
