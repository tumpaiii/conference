"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import newYorkVenueImg from "@/assets/images/new-york-venue.jpg";
import newYorkImg from "@/assets/images/new-york.jpg";
interface VenueProps {
  className?: string;
}
export default function Venue({ className }: VenueProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="venue-poster" id="venue">
        <img
          className="venue-wash"
          src={newYorkImg.src}
          alt="OFFGRID creative event visual"
        />
        <div className="venue-poster-content">
          <svg
            className="venue-letter-art"
            viewBox="0 0 900 610"
            role="img"
            aria-label="New York skyline filling large outlined letters and seven hanging photo strips"
          >
            <defs>
              <clipPath id="new-york-poster-mask">
                <text x="90" y="145" textAnchor="middle">
                  {"N"}
                </text>
                <rect x="35" y="145" width="110" height="360"></rect>
                <text x="210" y="145" textAnchor="middle">
                  {"E"}
                </text>
                <rect x="155" y="145" width="110" height="290"></rect>
                <text x="330" y="145" textAnchor="middle">
                  {"W"}
                </text>
                <rect x="275" y="145" width="110" height="380"></rect>
                <text x="450" y="145" textAnchor="middle">
                  {"Y"}
                </text>
                <rect x="395" y="145" width="110" height="430"></rect>
                <text x="570" y="145" textAnchor="middle">
                  {"O"}
                </text>
                <rect x="515" y="145" width="110" height="320"></rect>
                <text x="690" y="145" textAnchor="middle">
                  {"R"}
                </text>
                <rect x="635" y="145" width="110" height="385"></rect>
                <text x="810" y="145" textAnchor="middle">
                  {"K"}
                </text>
                <rect x="755" y="145" width="110" height="340"></rect>
              </clipPath>
            </defs>
            <image
              href={newYorkVenueImg.src}
              x="0"
              y="0"
              width="900"
              height="610"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#new-york-poster-mask)"
            ></image>
            <g className="venue-outlines">
              <text x="90" y="145" textAnchor="middle">
                {"N"}
              </text>
              <rect x="35" y="145" width="110" height="360"></rect>
              <text x="210" y="145" textAnchor="middle">
                {"E"}
              </text>
              <rect x="155" y="145" width="110" height="290"></rect>
              <text x="330" y="145" textAnchor="middle">
                {"W"}
              </text>
              <rect x="275" y="145" width="110" height="380"></rect>
              <text x="450" y="145" textAnchor="middle">
                {"Y"}
              </text>
              <rect x="395" y="145" width="110" height="430"></rect>
              <text x="570" y="145" textAnchor="middle">
                {"O"}
              </text>
              <rect x="515" y="145" width="110" height="320"></rect>
              <text x="690" y="145" textAnchor="middle">
                {"R"}
              </text>
              <rect x="635" y="145" width="110" height="385"></rect>
              <text x="810" y="145" textAnchor="middle">
                {"K"}
              </text>
              <rect x="755" y="145" width="110" height="340"></rect>
            </g>
          </svg>
          <h2 className="venue-city-label">{"NEW YORK"}</h2>
          <p>
            {"Where creative minds meet"}
            <br />
            {"and new possibilities begin."}
          </p>
          <div className="venue-address">
            {"New York, NY, United States."}
            <br />
            {"Exact venue and address to be announced."}
          </div>
          <a
            className="button light"
            href="https://www.google.com/maps/search/?api=1&query=New+York+NY+USA"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"View New York on map"}
          </a>
        </div>
      </section>
    </div>
  );
}
