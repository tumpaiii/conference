"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import formoraMarkIcon from "@/assets/icons/formora-mark.svg";
interface FooterProps {
  className?: string;
}
export default function Footer({ className }: FooterProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <div className="footer-reveal">
        <footer className="site-footer">
          <div className="footer-card">
            <div className="footer-main">
              <div>
                <a className="footer-brand" href="#" aria-label="OFFGRID home">
                  <img
                    className="formora-mark"
                    src={formoraMarkIcon}
                    alt="OFFGRID logo"
                  />
                  <span>{"OFFGRID"}</span>
                </a>
                <p>
                  {"A new starting point for the ideas"}
                  <br />
                  {"you’re ready to bring to life."}
                </p>
                <small>{"New York, NY, USA"}</small>
              </div>
              <div className="footer-links">
                <div>
                  <b>{"The launch"}</b>
                  <a href="#reveal">{"Official reveal"}</a>
                  <a href="#agenda">{"Programme"}</a>
                  <a href="#venue">{"Venue"}</a>
                </div>
                <div>
                  <b>{"Explore"}</b>
                  <a href="#platform">{"Our story"}</a>
                  <a href="#templates">{"Templates"}</a>
                  <a href="#attend">{"Who should attend"}</a>
                </div>
                <div>
                  <b>{"Information"}</b>
                  <a href="#faq">{"FAQ"}</a>
                  <button
                    onClick={(event) =>
                      performAction(
                        "showInfo('Registration information')",
                        event.currentTarget,
                      )
                    }
                  >
                    {"Registration"}
                  </button>
                  <button
                    onClick={(event) =>
                      performAction("replay()", event.currentTarget)
                    }
                  >
                    {"Replay intro"}
                  </button>
                </div>
              </div>
            </div>
            <div className="footer-legal">
              <span>{"© 2026 OFFGRID. All rights reserved."}</span>
              <a href="#">{"Back to top"}</a>
            </div>
          </div>
          <div className="footer-word" aria-hidden="true">
            {"OFFGRID."}
          </div>
        </footer>
      </div>
    </div>
  );
}
