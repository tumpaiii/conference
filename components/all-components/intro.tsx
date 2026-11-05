"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";

interface IntroProps {
  className?: string;
}
export default function Intro({ className }: IntroProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <div
        className="intro offgrid-intro"
        id="intro"
        aria-label="OFFGRID introduction"
      >
        <div className="intro-center">
          <div className="intro-letter" aria-hidden="true">
            {"O"}
          </div>
          <div className="intro-word offgrid-word" aria-hidden="true">
            <span>{"O"}</span>
            <span>{"F"}</span>
            <span>{"F"}</span>
            <span>{"G"}</span>
            <span>{"R"}</span>
            <span>{"I"}</span>
            <span>{"D"}</span>
          </div>
          <p className="intro-description">
            {"A new starting point."}
            <br />
            {"For the ideas you’re ready to bring to life."}
          </p>
          <button
            className="intro-enter"
            onClick={(event) =>
              performAction("closeIntro()", event.currentTarget)
            }
          >
            {"Enter OFFGRID"}
          </button>
        </div>
        <span className="intro-caption">{"NEW YORK · NOVEMBER 13, 2026"}</span>
      </div>
    </div>
  );
}
