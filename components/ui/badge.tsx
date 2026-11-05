import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}
export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#d3dff3] bg-[#edf2fa] px-3 py-1 text-xs text-[#2458d3]",
        className,
      )}
      {...props}
    />
  );
}
