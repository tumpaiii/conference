"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import speakerPortrait1Img from "@/assets/images/speaker-portrait-1.jpg";
import speakerPortrait2Img from "@/assets/images/speaker-portrait-2.jpg";
import speakerPortrait3Img from "@/assets/images/speaker-portrait-3.jpg";
import speakerPortrait4Img from "@/assets/images/speaker-portrait-4.jpg";
import speakerPortrait5Img from "@/assets/images/speaker-portrait-5.jpg";
import speakerPortrait6Img from "@/assets/images/speaker-portrait-6.jpg";
interface SpeakersProps {
  className?: string;
}
export default function Speakers({ className }: SpeakersProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="speaker-section" id="speakers">
        <div className="speaker-heading">
          <h2>
            {"The minds behind"}
            <br />
            {"what comes next."}
          </h2>
          <p>{"Meet the people shaping the conversation."}</p>
        </div>
        <div className="speaker-strips">
          <button
            className="speaker-strip"
            aria-expanded="false"
            aria-label="View Alex Morgan details — sample profile"
            onClick={(event) =>
              performAction(
                "const open=this.classList.toggle('speaker-open');this.setAttribute('aria-expanded',String(open))",
                event.currentTarget,
              )
            }
          >
            <img
              src={speakerPortrait1Img.src}
              alt="Stock portrait illustrating a sample speaker profile"
            />
            <span className="speaker-details">
              <strong>{"Alex Morgan"}</strong>
              <span>{"Creative Director"}</span>
              <span>{"Northline Studio"}</span>
            </span>
          </button>
          <button
            className="speaker-strip"
            aria-expanded="false"
            aria-label="View Jordan Ellis details — sample profile"
            onClick={(event) =>
              performAction(
                "const open=this.classList.toggle('speaker-open');this.setAttribute('aria-expanded',String(open))",
                event.currentTarget,
              )
            }
          >
            <img
              src={speakerPortrait2Img.src}
              alt="Stock portrait illustrating a sample speaker profile"
            />
            <span className="speaker-details">
              <strong>{"Jordan Ellis"}</strong>
              <span>{"Head of Product Design"}</span>
              <span>{"Framewell"}</span>
            </span>
          </button>
          <button
            className="speaker-strip"
            aria-expanded="false"
            aria-label="View Taylor Brooks details — sample profile"
            onClick={(event) =>
              performAction(
                "const open=this.classList.toggle('speaker-open');this.setAttribute('aria-expanded',String(open))",
                event.currentTarget,
              )
            }
          >
            <img
              src={speakerPortrait3Img.src}
              alt="Stock portrait illustrating a sample speaker profile"
            />
            <span className="speaker-details">
              <strong>{"Taylor Brooks"}</strong>
              <span>{"Frontend Engineering Lead"}</span>
              <span>{"Buildcraft"}</span>
            </span>
          </button>
          <button
            className="speaker-strip"
            aria-expanded="false"
            aria-label="View Casey Bennett details — sample profile"
            onClick={(event) =>
              performAction(
                "const open=this.classList.toggle('speaker-open');this.setAttribute('aria-expanded',String(open))",
                event.currentTarget,
              )
            }
          >
            <img
              src={speakerPortrait4Img.src}
              alt="Stock portrait illustrating a sample speaker profile"
            />
            <span className="speaker-details">
              <strong>{"Casey Bennett"}</strong>
              <span>{"Founder & CEO"}</span>
              <span>{"Forma Works"}</span>
            </span>
          </button>
          <button
            className="speaker-strip"
            aria-expanded="false"
            aria-label="View Riley Parker details — sample profile"
            onClick={(event) =>
              performAction(
                "const open=this.classList.toggle('speaker-open');this.setAttribute('aria-expanded',String(open))",
                event.currentTarget,
              )
            }
          >
            <img
              src={speakerPortrait5Img.src}
              alt="Stock portrait illustrating a sample speaker profile"
            />
            <span className="speaker-details">
              <strong>{"Riley Parker"}</strong>
              <span>{"Design Systems Director"}</span>
              <span>{"Commonframe"}</span>
            </span>
          </button>
          <button
            className="speaker-strip"
            aria-expanded="false"
            aria-label="View Cameron Reed details — sample profile"
            onClick={(event) =>
              performAction(
                "const open=this.classList.toggle('speaker-open');this.setAttribute('aria-expanded',String(open))",
                event.currentTarget,
              )
            }
          >
            <img
              src={speakerPortrait6Img.src}
              alt="Stock portrait illustrating a sample speaker profile"
            />
            <span className="speaker-details">
              <strong>{"Cameron Reed"}</strong>
              <span>{"Brand Strategy Lead"}</span>
              <span>{"Fieldwork Creative"}</span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
