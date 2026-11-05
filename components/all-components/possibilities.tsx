"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import webDesignImg from "@/assets/images/web-design.jpg";
interface PossibilitiesProps {
  className?: string;
}
export default function Possibilities({ className }: PossibilitiesProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section hidden={true} className="ad-workflow" id="possibilities">
        <div className="ad-workflow-heading reveal">
          <h2>
            {"Find your next"}
            <br />
            {"starting point."}
          </h2>
          <p>{"Explore the possibilities for your next website."}</p>
        </div>
        <div className="ad-services reveal">
          <div className="ad-services-label">{"Template categories"}</div>
          <div
            className="ad-services-list"
            role="tablist"
            aria-label="Explore the possibilities"
            aria-orientation="vertical"
          >
            <button
              className="ad-service active"
              role="tab"
              aria-selected="true"
              aria-controls="possibility-panel"
              id="possibility-0"
              data-service="0"
            >
              <span>{"01"}</span>
              {"Business & agency"}
            </button>
            <button
              className="ad-service"
              role="tab"
              aria-selected="false"
              aria-controls="possibility-panel"
              id="possibility-1"
              data-service="1"
            >
              <span>{"02"}</span>
              {"Creative portfolios"}
            </button>
            <button
              className="ad-service"
              role="tab"
              aria-selected="false"
              aria-controls="possibility-panel"
              id="possibility-2"
              data-service="2"
            >
              <span>{"03"}</span>
              {"Online stores"}
            </button>
            <button
              className="ad-service"
              role="tab"
              aria-selected="false"
              aria-controls="possibility-panel"
              id="possibility-3"
              data-service="3"
            >
              <span>{"04"}</span>
              {"Product landing pages"}
            </button>
            <button
              className="ad-service"
              role="tab"
              aria-selected="false"
              aria-controls="possibility-panel"
              id="possibility-4"
              data-service="4"
            >
              <span>{"05"}</span>
              {"Events & conferences"}
            </button>
          </div>
          <div
            className="ad-image-stack template-stage"
            id="possibility-panel"
            role="tabpanel"
            aria-labelledby="possibility-0"
          >
            <div className="preview-chrome">
              <span>
                <i></i>
                <i></i>
                <i></i>
              </span>
              <small>{"DESIGN PREVIEW"}</small>
              <span className="preview-device">{"DESKTOP"}</span>
            </div>
            <div className="template-pages">
              <div className="ad-service-image active template-page business-preview">
                <div className="mini-nav">
                  <b>{"MONO®"}</b>
                  <span>{"Our studio   Work   Contact"}</span>
                </div>
                <div className="business-layout">
                  <div>
                    <small>{"INDEPENDENT STRATEGY & DESIGN"}</small>
                    <h3>
                      {"Good business."}
                      <br />
                      {"Better by design."}
                    </h3>
                    <p>
                      {"Clear thinking. Considered design."}
                      <br />
                      {"A fresh perspective for what comes next."}
                    </p>
                    <span className="mini-cta">{"Meet the studio"}</span>
                  </div>
                  <img
                    src={webDesignImg.src}
                    alt="Business template with a collaborative workspace photograph"
                  />
                </div>
                <div className="mini-foot">
                  {"STRATEGY   /   IDENTITY   /   DIGITAL EXPERIENCES"}
                </div>
              </div>
              <div className="ad-service-image template-page portfolio-preview">
                <div className="mini-nav">
                  <b>{"Alex Morgan"}</b>
                  <span>{"Selected work   About   Let’s talk"}</span>
                </div>
                <small className="portfolio-kicker">
                  {"INDEPENDENT DESIGNER & ART DIRECTOR"}
                </small>
                <h3>
                  {"Ideas with"}
                  <br />
                  <em>{"an identity."}</em>
                </h3>
                <div className="portfolio-art">
                  <div className="portfolio-orb"></div>
                  <span>{"SELECTED WORK — 2026"}</span>
                  <div className="portfolio-type">{"Aa"}</div>
                </div>
              </div>
              <div className="ad-service-image template-page shop-preview">
                <div className="mini-nav">
                  <b>{"FORME"}</b>
                  <span>{"Collection   Our story   Bag (0)"}</span>
                </div>
                <div className="shop-layout">
                  <div>
                    <small>{"EVERYDAY, CONSIDERED."}</small>
                    <h3>
                      {"Objects for"}
                      <br />
                      {"a quieter life."}
                    </h3>
                    <span className="mini-cta">{"Explore the collection"}</span>
                  </div>
                  <div className="object-still">
                    <div className="vase"></div>
                    <div className="vase small-vase"></div>
                  </div>
                </div>
                <div className="mini-foot">
                  {"LESS, BUT BETTER.   DESIGNED TO BE KEPT."}
                </div>
              </div>
              <div className="ad-service-image template-page product-preview">
                <div className="mini-nav">
                  <b>{"gather."}</b>
                  <span>{"Product   Why gather   Get started"}</span>
                </div>
                <div className="product-layout">
                  <small>{"A LITTLE MORE CLARITY."}</small>
                  <h3>
                    {"Your ideas."}
                    <br />
                    {"All together."}
                  </h3>
                  <p>{"A calmer place to turn plans into progress."}</p>
                  <span className="mini-cta">
                    {"Make room for better work"}
                  </span>
                </div>
                <div className="dashboard-mini">
                  <div>
                    <b>{"Your workspace"}</b>
                    <span>{"Today   Projects   Notes"}</span>
                  </div>
                  <section>
                    <i>
                      <b>{"Plan the next chapter"}</b>
                      <small>{"Strategy · In progress"}</small>
                    </i>
                    <i>
                      <b>{"A fresh perspective"}</b>
                      <small>{"Design · Ready to review"}</small>
                    </i>
                    <i>
                      <b>{"Bring it all together"}</b>
                      <small>{"Launch · This week"}</small>
                    </i>
                  </section>
                </div>
              </div>
              <div className="ad-service-image template-page event-preview">
                <div className="mini-nav">
                  <b>{"ASSEMBLY"}</b>
                  <span>{"The event   Speakers   Register"}</span>
                </div>
                <div className="event-preview-body">
                  <small>{"A MEETING OF MINDS."}</small>
                  <h3>
                    {"Great ideas"}
                    <br />
                    {"start "}
                    <em>{"together."}</em>
                  </h3>
                  <div className="event-orbits">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <div className="event-preview-meta">
                    <span>{"DESIGN · TECHNOLOGY · CULTURE"}</span>
                    <span>{"JOIN THE CONVERSATION"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="template-disclaimer">
          {"Illustrative designs · Sample template designs for this preview."}
        </p>
        <div
          className="ad-ticker"
          aria-label="For designers, developers, creators, agencies, and founders"
        >
          <div className="ad-ticker-track">
            <span>{"Designers"}</span>
            <i>{"✦"}</i>
            <span>{"Developers"}</span>
            <i>{"✦"}</i>
            <span>{"Creators"}</span>
            <i>{"✦"}</i>
            <span>{"Agencies"}</span>
            <i>{"✦"}</i>
            <span>{"Founders"}</span>
            <i>{"✦"}</i>
            <span aria-hidden="true">{"Designers"}</span>
            <i aria-hidden="true">{"✦"}</i>
            <span aria-hidden="true">{"Developers"}</span>
            <i aria-hidden="true">{"✦"}</i>
            <span aria-hidden="true">{"Creators"}</span>
            <i aria-hidden="true">{"✦"}</i>
            <span aria-hidden="true">{"Agencies"}</span>
            <i aria-hidden="true">{"✦"}</i>
            <span aria-hidden="true">{"Founders"}</span>
            <i aria-hidden="true">{"✦"}</i>
          </div>
        </div>
        <div className="ad-preview-controls">
          <button
            className="replay"
            onClick={(event) => performAction("replay()", event.currentTarget)}
          >
            {"Replay intro"}
          </button>
          <button
            className="replay"
            id="cycle-control"
            onClick={(event) =>
              performAction("toggleCycle(this)", event.currentTarget)
            }
          >
            {"Pause showcase"}
          </button>
        </div>
      </section>
    </div>
  );
}
