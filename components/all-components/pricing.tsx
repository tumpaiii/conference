"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";

interface PricingProps {
  className?: string;
}
export default function Pricing({ className }: PricingProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="formora-pricing" id="pricing">
        <div className="pricing-watermark" aria-hidden="true">
          {"PRICING"}
        </div>
        <div className="pricing-content">
          <div className="pricing-intro">
            <h2>
              {"Your place at"}
              <br />
              {"the next beginning."}
            </h2>
            <p className="pricing-section-description">
              {"Choose how you and your team will join the OFFGRID reveal."}
            </p>
          </div>
          <div className="pricing-pair">
            <article className="conference-pass">
              <div>
                <h3>{"Individual pass"}</h3>
                <p>{"For independent minds ready to discover OFFGRID."}</p>
              </div>
              <div className="pass-price">
                {"$49"}
                <small>{"USD / person"}</small>
              </div>
              <ul>
                <li>{"The official product reveal"}</li>
                <li>{"Platform walkthrough"}</li>
                <li>{"Behind-the-product session"}</li>
                <li>{"Live questions and conversation"}</li>
              </ul>
              <button
                className="pass-button"
                onClick={(event) =>
                  performAction(
                    "showInfo('Individual pass registration')",
                    event.currentTarget,
                  )
                }
              >
                {"Register your interest"}
              </button>
            </article>
            <article className="conference-pass dark-pass">
              <div>
                <h3>{"Team pass"}</h3>
                <p>
                  {"A shared starting point for agencies and creative teams."}
                </p>
              </div>
              <div className="pass-price">
                {"$199"}
                <small>{"USD / team of 5"}</small>
              </div>
              <ul>
                <li>{"Experience the reveal together"}</li>
                <li>{"Explore the platform as a team"}</li>
                <li>{"Discover ideas for your workflow"}</li>
                <li>{"Join the live conversation"}</li>
              </ul>
              <button
                className="pass-button"
                onClick={(event) =>
                  performAction(
                    "showInfo('Team pass registration')",
                    event.currentTarget,
                  )
                }
              >
                {"Enquire about team access"}
              </button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
