"use client";

import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/context/theme-context";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type ToggleOptionsType = "light" | "dark";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  // theme is either 'light' or 'dark'
  const selected = theme as ToggleOptionsType;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <SliderToggle selected={selected} toggleTheme={toggleTheme} />
    </div>
  );
}

function SliderToggle({
  selected,
  toggleTheme,
}: {
  selected: ToggleOptionsType;
  toggleTheme: () => void;
}) {
  return (
    <div className="relative flex w-fit items-center rounded-full bg-white/80 dark:bg-slate-900/80 shadow-2xl border border-white border-opacity-40 backdrop-blur-[0.5rem]">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light" ? "text-white" : "text-slate-300"
        }`}
        aria-pressed={selected === "light"}
        onClick={() => {
          if (selected !== "light") toggleTheme();
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark" ? "text-white" : "text-slate-800"
        }`}
        aria-pressed={selected === "dark"}
        onClick={() => {
          if (selected !== "dark") toggleTheme();
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
}
