"use client";

import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] rounded-full flex items-center justify-center
        bg-white/80 dark:bg-gray-950/80 backdrop-blur-[0.5rem] shadow-2xl
        border border-black/10 dark:border-white/10
        hover:scale-[1.15] active:scale-105 transition-transform"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center text-gray-700 dark:text-gray-300"
        >
          {isLight ? <LuSun size={20} /> : <LuMoon size={20} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
