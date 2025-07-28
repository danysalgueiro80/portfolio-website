import React from "react";
import { cn } from "@/lib/utils";

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

export default function Label({ children, htmlFor, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
    >
      {children}
    </label>
  );
} 