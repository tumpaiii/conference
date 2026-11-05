"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";

interface FaqProps {
  className?: string;
}
export default function Faq({ className }: FaqProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="faq-section new-section" id="faq">
        <div className="faq-sticky">
          <span className="faq-label">{"FAQ"}</span>
          <h2>
            {"A few things"}
            <br />
            {"you might "}
            <em>{"ask."}</em>
          </h2>
          <p>{"Everything you need to know about the platform launch."}</p>
        </div>
        <div className="faq-list">
          <details open={true}>
            <summary>
              {"What is being launched?"}
              <span></span>
            </summary>
            <p>
              {
                "A platform of ready-made templates designed to simplify creative work and help you get your next project started."
              }
            </p>
          </details>
          <details>
            <summary>
              {"When is the launch?"}
              <span></span>
            </summary>
            <p>
              {
                "The launch is planned for November 13, 2026. The session schedule and event time will be shared once confirmed."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Where will the event take place?"}
              <span></span>
            </summary>
            <p>
              {
                "New York, NY, USA. The exact venue and street address are still to be announced."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Who is the launch for?"}
              <span></span>
            </summary>
            <p>
              {
                "Designers, developers, agencies, founders, and businesses interested in a simpler starting point for their next website."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Will there be a platform demonstration?"}
              <span></span>
            </summary>
            <p>
              {
                "The proposed programme includes an official reveal, a platform walkthrough, and a live Q&A. Final programme details will be confirmed before the event."
              }
            </p>
          </details>
          <details>
            <summary>
              {"How can I register?"}
              <span></span>
            </summary>
            <p>
              {
                "Registration details will be added here once booking is available. The current registration buttons open an information notice."
              }
            </p>
          </details>
          <details>
            <summary>
              {"Are the template previews final?"}
              <span></span>
            </summary>
            <p>
              {
                "The showcase contains sample designs to demonstrate this website’s layout. The platform’s actual templates will be presented at launch."
              }
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
