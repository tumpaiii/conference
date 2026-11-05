import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#d3dff3] bg-[#ffffff] text-[#242321]",
        className,
      )}
      {...props}
    />
  );
}
