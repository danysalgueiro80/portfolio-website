"use client";

import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeSwitchNew() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color mode"
      className="fixed bottom-5 right-5 z-50 w-8 h-8 rounded-md flex items-center justify-center
        text-gray-700 dark:text-gray-300
        hover:bg-gray-100 dark:hover:bg-white/10
        transition-colors duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isLight ? <LuSun size={20} /> : <LuMoon size={20} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
