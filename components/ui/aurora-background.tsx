"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative min-h-screen overflow-hidden", className)}>
      {/* Base background */}
      <div className="absolute inset-0 bg-white dark:bg-[#0F172A]" />
      
      {/* Aurora background - Light mode */}
      <div className="absolute inset-0 aurora-bg-light animate-aurora dark:hidden" />
      
      {/* Aurora background - Dark mode */}
      <div className="absolute inset-0 aurora-bg-dark animate-aurora hidden dark:block" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 