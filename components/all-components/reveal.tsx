"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import newYorkImg from "@/assets/images/new-york.jpg";
interface RevealProps {
  className?: string;
}
export default function Reveal({ className }: RevealProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="launch-countdown" id="reveal">
        <img
          src={newYorkImg.src}
          alt="Manhattan skyline and the Hudson River in New York City"
          loading="lazy"
        />
        <div className="countdown-shade"></div>
        <div className="countdown-content">
          <div className="countdown-top">
            <span>{"THE OFFICIAL PLATFORM REVEAL"}</span>
            <span>{"OFFGRID / 2026"}</span>
          </div>
          <h2>
            {"A new beginning."}
            <br />
            {"In "}
            <em>{"New York."}</em>
          </h2>
          <div className="countdown-number">
            <strong id="days-left">{"08"}</strong>
            <span>
              {"DAYS"}
              <br />
              {"TO GO"}
            </span>
          </div>
          <div className="countdown-details">
            <div>
              <small>{"THE DATE"}</small>
              <b>{"November 13, 2026"}</b>
            </div>
            <div>
              <small>{"THE CITY"}</small>
              <b>{"New York, NY, USA"}</b>
            </div>
            <div>
              <small>{"THE VENUE"}</small>
              <b>{"To be announced"}</b>
            </div>
            <button
              className="button light"
              onClick={(event) =>
                performAction(
                  "showInfo('Launch registration')",
                  event.currentTarget,
                )
              }
            >
              {"Join the launch"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
