"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import platformTeamImg from "@/assets/images/platform-team.jpg";
import platformTeamVideo from "@/assets/videos/platform-team.mp4";
interface ClosingCtaProps {
  className?: string;
}
export default function ClosingCta({ className }: ClosingCtaProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="closing-cta new-section">
        <video
          className="closing-video"
          src={platformTeamVideo}
          poster={platformTeamImg.src}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          aria-hidden="true"
        ></video>
        <h2>
          {"Your next chapter"}
          <br />
          {"starts here."}
        </h2>
        <p>{"Be part of the official platform launch."}</p>
        <button
          className="button light"
          onClick={(event) =>
            performAction("showInfo('Join the launch')", event.currentTarget)
          }
        >
          {"Join the launch"}
        </button>
      </section>
    </div>
  );
}
