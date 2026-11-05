"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import brandDesignImg from "@/assets/images/brand-design.jpg";
import creativeWorkImg from "@/assets/images/creative-work.jpg";
import presentationsImg from "@/assets/images/presentations.jpg";
import webDesignImg from "@/assets/images/web-design.jpg";
interface TemplatesProps {
  className?: string;
}
export default function Templates({ className }: TemplatesProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section className="template-story" id="templates">
        <div className="template-pin">
          <h2>{"Find your next starting point."}</h2>
          <p className="template-section-description">
            {"Explore considered templates for the way you create."}
          </p>
          <div className="template-stage">
            <div className="template-copy">
              <article className="template-step selected">
                <h3>
                  <button
                    type="button"
                    className="template-choice"
                    aria-expanded="true"
                    aria-controls="template-detail-0"
                  >
                    {"Business & agency"}
                  </button>
                </h3>
                <div className="template-extra" id="template-detail-0">
                  <p>
                    {"A considered foundation for your next business website."}
                  </p>
                  <div>
                    <span>{"Company websites"}</span>
                    <span>{"Agency portfolios"}</span>
                    <span>{"Service pages"}</span>
                  </div>
                </div>
              </article>
              <article className="template-step ">
                <h3>
                  <button
                    type="button"
                    className="template-choice"
                    aria-expanded="false"
                    aria-controls="template-detail-1"
                  >
                    {"Creative portfolios"}
                  </button>
                </h3>
                <div className="template-extra" id="template-detail-1">
                  <p>{"Give your work the space and character it deserves."}</p>
                  <div>
                    <span>{"Design portfolios"}</span>
                    <span>{"Personal websites"}</span>
                    <span>{"Creative studios"}</span>
                  </div>
                </div>
              </article>
              <article className="template-step ">
                <h3>
                  <button
                    type="button"
                    className="template-choice"
                    aria-expanded="false"
                    aria-controls="template-detail-2"
                  >
                    {"Online stores"}
                  </button>
                </h3>
                <div className="template-extra" id="template-detail-2">
                  <p>
                    {"Build a clear path from first impression to discovery."}
                  </p>
                  <div>
                    <span>{"Product pages"}</span>
                    <span>{"Collections"}</span>
                    <span>{"Storefronts"}</span>
                  </div>
                </div>
              </article>
              <article className="template-step ">
                <h3>
                  <button
                    type="button"
                    className="template-choice"
                    aria-expanded="false"
                    aria-controls="template-detail-3"
                  >
                    {"Product landing pages"}
                  </button>
                </h3>
                <div className="template-extra" id="template-detail-3">
                  <p>{"Make your next idea feel ready for the world."}</p>
                  <div>
                    <span>{"Product stories"}</span>
                    <span>{"Feature pages"}</span>
                    <span>{"Launch pages"}</span>
                  </div>
                </div>
              </article>
            </div>
            <div className="template-photos">
              <img
                className="template-photo selected"
                src={webDesignImg.src}
                alt="Business & agency: professional creative workspace"
              />
              <img
                className="template-photo "
                src={brandDesignImg.src}
                alt="Creative portfolios: professional creative workspace"
              />
              <img
                className="template-photo "
                src={presentationsImg.src}
                alt="Online stores: professional creative workspace"
              />
              <img
                className="template-photo "
                src={creativeWorkImg.src}
                alt="Product landing pages: professional creative workspace"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
