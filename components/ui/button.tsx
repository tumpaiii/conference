"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      asChild = false,
      variant = "default",
      size = "default",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2458d3] disabled:pointer-events-none disabled:opacity-50",
          variant === "default"
            ? "bg-[#2458d3] text-[#ffffff] hover:bg-[#1b46ac]"
            : variant === "outline"
              ? "border border-[#d3dff3] bg-[#ffffff] text-[#242321]"
              : "text-[#242321] hover:bg-[#edf2fa]",
          size === "sm"
            ? "h-9 px-4"
            : size === "lg"
              ? "h-12 px-8"
              : size === "icon"
                ? "h-11 w-11"
                : "h-11 px-6",
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
export default Button;
