"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-2xl border border-white border-opacity-40 bg-white bg-opacity-80 backdrop-blur-[0.5rem] dark:bg-gray-950 transition-all hover:scale-110 active:scale-105"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      type="button"
    >
      <motion.div
        className="relative w-10 h-10 flex items-center justify-center"
        initial={false}
        animate={{ background: theme === "dark" ? "#18181b" : "#facc15" }}
        transition={{ duration: 0.4 }}
        style={{ borderRadius: "50%" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.svg
              key="sun"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <circle cx="16" cy="16" r="8" fill="#facc15" />
              <g stroke="#facc15" strokeWidth="2">
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="16" y1="26" x2="16" y2="30" />
                <line x1="2" y1="16" x2="6" y2="16" />
                <line x1="26" y1="16" x2="30" y2="16" />
                <line x1="6.93" y1="6.93" x2="9.76" y2="9.76" />
                <line x1="22.24" y1="22.24" x2="25.07" y2="25.07" />
                <line x1="6.93" y1="25.07" x2="9.76" y2="22.24" />
                <line x1="22.24" y1="9.76" x2="25.07" y2="6.93" />
              </g>
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              initial={{ rotate: 90, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <motion.path
                d="M22 16c0-5-4-9-9-9 0 7 5 13 13 13-2.5 0-4-1-4-4z"
                fill="#f4f4f5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.circle
                cx="22"
                cy="10"
                r="1.5"
                fill="#facc15"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              />
            </motion.svg>
          )}
        </AnimatePresence>
        {/* Sliding background effect */}
        <motion.div
          className="absolute inset-0 rounded-full -z-10"
          initial={false}
          animate={{
            background: theme === "dark"
              ? "linear-gradient(135deg, #18181b 60%, #27272a 100%)"
              : "linear-gradient(135deg, #fef9c3 60%, #fde68a 100%)",
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </button>
  );
}
