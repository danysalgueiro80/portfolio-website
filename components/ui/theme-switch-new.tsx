"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitchNew() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleTheme}
        className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-[#040814]' : 'bg-gray-300'
        }`}
      >
        <motion.div
          className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
          animate={{
            x: isDark ? 28 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {isDark ? (
            <BsMoon size={14} className="text-[#0F172A]" />
          ) : (
            <BsSun size={14} className="text-yellow-500" />
          )}
        </motion.div>
      </button>
    </div>
  );
} 