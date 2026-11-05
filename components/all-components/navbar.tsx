"use client";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import formoraMarkIcon from "@/assets/icons/formora-mark.svg";
interface NavbarProps {
  className?: string;
}
export default function Navbar({ className }: NavbarProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="offgrid-nav"
      >
        <a className="offgrid-brand" href="#" aria-label="OFFGRID home">
          <img src={formoraMarkIcon} alt="OFFGRID symbol" />
          {"OFFGRID"}
          <span>{"®"}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#platform">{"About"}</a>
          <a href="#templates">{"Templates"}</a>
          <a href="#agenda">{"Agenda"}</a>
          <a href="#speakers">{"Speakers"}</a>
          <a href="#venue">{"Venue"}</a>
        </nav>
        <button
          onClick={(event) =>
            performAction(
              "showInfo('Launch registration')",
              event.currentTarget,
            )
          }
        >
          {"Register interest"}
        </button>
      </motion.header>
    </div>
  );
}
