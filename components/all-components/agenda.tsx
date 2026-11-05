"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import businessWorkImg from "@/assets/images/business-work.jpg";
import creativeWorkImg from "@/assets/images/creative-work.jpg";
import presentationsImg from "@/assets/images/presentations.jpg";
import webDesignImg from "@/assets/images/web-design.jpg";
interface AgendaProps {
  className?: string;
}
export default function Agenda({ className }: AgendaProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="launch-agenda new-section" id="agenda">
        <div className="new-heading">
          <h2>
            {"A first look."}
            <br />
            {"A fresh perspective."}
          </h2>
          <p>
            {
              "The launch experience, from the official reveal to your questions."
            }
            <br />
            <small>
              {"Programme preview · Session times to be announced."}
            </small>
          </p>
        </div>
        <div className="agenda-rows">
          <article className="agenda-row">
            <img
              src={presentationsImg.src}
              alt="Colleagues sharing a presentation"
              loading="lazy"
            />
            <div>
              <small>{"OPENING SESSION"}</small>
              <h3>{"The official reveal"}</h3>
              <p>
                {
                  "Discover the platform and the idea behind a better starting point."
                }
              </p>
            </div>
            <span className="agenda-tag">{"REVEAL"}</span>
          </article>
          <article className="agenda-row alternate">
            <img
              src={webDesignImg.src}
              alt="Team gathered around a project"
              loading="lazy"
            />
            <span className="agenda-tag">{"EXPLORE"}</span>
            <div>
              <small>{"PLATFORM WALKTHROUGH"}</small>
              <h3>{"See it in action"}</h3>
              <p>
                {"A closer look at finding a template and making it your own."}
              </p>
            </div>
          </article>
          <article className="agenda-row">
            <img
              src={creativeWorkImg.src}
              alt="Creative team at work"
              loading="lazy"
            />
            <div>
              <small>{"BEHIND THE PLATFORM"}</small>
              <h3>{"Meet the thinking"}</h3>
              <p>{"Explore the creative decisions shaping the product."}</p>
            </div>
            <span className="agenda-tag">{"CONNECT"}</span>
          </article>
          <article className="agenda-row alternate">
            <img
              src={businessWorkImg.src}
              alt="Team discussing their next steps"
              loading="lazy"
            />
            <span className="agenda-tag">{"ASK"}</span>
            <div>
              <small>{"OPEN CONVERSATION"}</small>
              <h3>{"Your questions, live"}</h3>
              <p>{"Bring your ideas and ask what matters to your workflow."}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
