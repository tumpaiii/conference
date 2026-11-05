"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import brandDesignImg from "@/assets/images/brand-design.jpg";
interface HomeProps {
  className?: string;
}
export default function Home({ className }: HomeProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="offgrid-hero oxnod-hero" id="home">
        <div className="ox-backdrop" aria-hidden="true">
          <img
            className="ox-creative-photo"
            src={brandDesignImg.src}
            alt="OFFGRID creative event visual"
          />
          <div className="ox-wash"></div>
          <div className="ox-flow flow-one"></div>
          <div className="ox-flow flow-two"></div>
        </div>
        <div className="ox-guides" aria-hidden="true">
          <i></i>
          <i></i>
        </div>
        <div className="ox-side-copy">
          <h1>
            {"A new starting point"}
            <br />
            {"for your next big idea."}
          </h1>
          <p>
            {"Ready-made templates."}
            <br />
            {"More time to create."}
          </p>
          <button
            onClick={(event) =>
              performAction(
                "showInfo('Launch registration')",
                event.currentTarget,
              )
            }
            className="ox-text-button"
          >
            {"Be part of the reveal"}
            <span aria-hidden="true">{"⌝"}</span>
          </button>
        </div>
        <a className="ox-preview-link" href="#templates">
          <span className="ox-mini-template" aria-hidden="true">
            <i></i>
            <b>
              {"Make"}
              <br />
              {"it yours."}
            </b>
          </span>
          <span>{"EXPLORE OFFGRID"}</span>
          <span aria-hidden="true">{"＋"}</span>
        </a>
        <div className="ox-center-mark" aria-hidden="true">
          <span className="ox-square"></span>
          <span className="ox-circle"></span>
          <span className="ox-dot"></span>
        </div>
        <div className="ox-event-meta">
          <span>{"NEW YORK"}</span>
          <i aria-hidden="true"></i>
          <span>{"NOV 13 ’26"}</span>
        </div>
        <div className="ox-crosshairs" aria-hidden="true">
          <span>{"+"}</span>
          <span>{"+"}</span>
          <span>{"+"}</span>
          <span>{"+"}</span>
        </div>
        <div className="ox-bottom">
          <div className="ox-wordmark" aria-hidden="true">
            {"OFFGRID"}
          </div>
          <div className="ox-categories">
            <span>{"WEBSITE TEMPLATES"}</span>
            <span>{"CREATIVE PORTFOLIOS"}</span>
            <span>{"BUSINESS WEBSITES"}</span>
            <span>{"PRODUCT LANDING PAGES"}</span>
            <a href="#platform">{"DISCOVER THE PLATFORM"}</a>
          </div>
        </div>
        <button
          className="ox-pause"
          onClick={(event) =>
            performAction(
              "const h=document.querySelector('#home');const paused=h.classList.toggle('ox-paused');this.textContent=paused?'Resume motion':'Pause motion';this.setAttribute('aria-pressed',String(paused))",
              event.currentTarget,
            )
          }
          aria-pressed="false"
        >
          {"Pause motion"}
        </button>
      </section>
    </div>
  );
}
