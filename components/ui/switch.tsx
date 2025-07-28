"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface SwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  thumbIcon?: React.ReactNode;
  motionProps?: HTMLMotionProps<"button">;
  className?: string;
}

export default function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  leftIcon,
  rightIcon,
  thumbIcon,
  motionProps,
  className = "",
}: SwitchProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {leftIcon && (
        <div className="flex items-center justify-center">
          {leftIcon}
        </div>
      )}
      
      <motion.button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange?.(!checked)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
          checked 
            ? "bg-primary" 
            : "bg-input"
        }`}
        {...motionProps}
      >
        <motion.span
          className="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform"
          animate={{
            x: checked ? 20 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {thumbIcon && (
            <div className="flex h-full w-full items-center justify-center">
              {thumbIcon}
            </div>
          )}
        </motion.span>
      </motion.button>
      
      {rightIcon && (
        <div className="flex items-center justify-center">
          {rightIcon}
        </div>
      )}
    </div>
  );
} 