"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import brandDesignImg from "@/assets/images/brand-design.jpg";
import creativeWorkImg from "@/assets/images/creative-work.jpg";
interface AttendProps {
  className?: string;
}
export default function Attend({ className }: AttendProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="attend-section new-section" id="attend">
        <div className="audience-preface">
          <h2>{"Who should attend."}</h2>
          <p>
            {"Different skills. Shared ambition."}
            <br />
            {"Find your place in the next chapter of creating."}
          </p>
        </div>
        <div className="audience-scroll-stage">
          <div className="attend-reveal-sticky">
            <div
              className="audience-curtain audience-curtain-left"
              aria-hidden="true"
            >
              <img
                src={creativeWorkImg.src}
                alt="OFFGRID creative event visual"
              />
              <div className="audience-curtain-label">
                {"Different minds."}
                <br />
                {"Shared possibilities."}
              </div>
            </div>
            <div
              className="audience-curtain audience-curtain-right"
              aria-hidden="true"
            >
              <img
                src={brandDesignImg.src}
                alt="OFFGRID creative event visual"
              />
              <div className="audience-curtain-label">
                {"One place."}
                <br />
                {"Your next beginning."}
              </div>
            </div>
            <div className="attend-reveal-frame">
              <div className="new-heading centered">
                <h3>{"A place for every kind of creator."}</h3>
                <p>{"For designers, developers, agencies and founders."}</p>
              </div>
              <div className="attend-grid">
                <article tabIndex={0} className="attend-card phone-card">
                  <p className="attend-topline">
                    {"For designers "}
                    <i></i>
                  </p>
                  <img
                    className="audience-photo"
                    src={brandDesignImg.src}
                    alt="Designers discussing a creative project"
                  />
                  <div className="attend-card-copy">
                    <h3>{"Make room for creativity."}</h3>
                    <p>
                      {
                        "Start with a foundation and focus on the details that make it yours."
                      }
                    </p>
                  </div>
                </article>
                <article tabIndex={0} className="attend-card developer-card">
                  <div className="attend-card-copy">
                    <h3>{"For developers & builders"}</h3>
                    <p>
                      {
                        "Explore new directions for your next website and bring your own approach."
                      }
                    </p>
                  </div>
                  <img
                    className="audience-photo developer-photo"
                    src={creativeWorkImg.src}
                    alt="A development team collaborating around a laptop"
                  />
                  <div className="developer-caption">
                    {"A starting point. Your possibilities."}
                  </div>
                </article>
                <div className="attend-stack">
                  <article tabIndex={0} className="attend-card agency-card">
                    <h3>{"For agencies & teams"}</h3>
                    <p>
                      {"Bring a shared direction to your next client project."}
                    </p>
                    <div className="team-dots" aria-hidden="true">
                      <span>{"D"}</span>
                      <span>{"C"}</span>
                      <span>{"B"}</span>
                      <span>{"+"}</span>
                    </div>
                  </article>
                  <article tabIndex={0} className="attend-card founder-card">
                    <div className="infinity-art" aria-hidden="true">
                      {"∞"}
                    </div>
                    <div className="attend-card-copy">
                      <h3>{"For founders & businesses"}</h3>
                      <p>
                        {
                          "Give your next idea a place to begin, with less time spent on the blank canvas."
                        }
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
