"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function HeroHighlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative z-10 inline-block", className)}>
      <span
        className="absolute -inset-1 z-0 block rounded-lg bg-gradient-to-r from-[#2D9EDB]/30 to-[#2D9EDB]/0 blur-md opacity-80 animate-hero-highlight"
        aria-hidden="true"
      />
      <span className="relative z-10 font-bold text-inherit">{children}</span>
      <style>{`
        @keyframes hero-highlight {
          0%, 100% { opacity: 0.8; filter: blur(8px); }
          50% { opacity: 1; filter: blur(12px); }
        }
        .animate-hero-highlight {
          animation: hero-highlight 2s infinite;
        }
      `}</style>
    </span>
  );
} 