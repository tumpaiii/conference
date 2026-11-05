"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";
import businessWorkImg from "@/assets/images/business-work.jpg";
import creativeWorkImg from "@/assets/images/creative-work.jpg";
import webDesignImg from "@/assets/images/web-design.jpg";
interface PlatformProps {
  className?: string;
}
export default function Platform({ className }: PlatformProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <section
        className="platform-story"
        id="platform"
        aria-label="About the platform"
      >
        <div className="story-sticky">
          <div className="story-track">
            <div className="story-panel story-first">
              <div className="story-intro-content">
                <h2>{"A new beginning."}</h2>
                <p>
                  {
                    "Every great project begins with an idea. Bringing it to life should feel inspiring, not overwhelming. We’re introducing a platform of ready-made templates that makes it easier to find your starting point, simplify your work, and spend more time creating. The next chapter begins on November 13."
                  }
                </p>
              </div>
            </div>
            <div className="story-panel story-second">
              <div className="story-image-content">
                <div className="story-image-frame">
                  <img
                    src={webDesignImg.src}
                    alt="A creative team bringing ideas together around a laptop"
                    loading="lazy"
                  />
                </div>
                <p>
                  {
                    "Built for the way you create, our platform brings fresh possibilities to your next project. Join the official launch and discover a simpler way to turn an idea into something real."
                  }
                </p>
              </div>
            </div>
            <div className="story-panel">
              <div className="story-image-content">
                <div className="story-image-frame">
                  <img
                    src={creativeWorkImg.src}
                    alt="Creative professionals collaborating on a website project"
                    loading="lazy"
                  />
                </div>
                <h3>{"More room for your ideas."}</h3>
                <p>
                  {
                    "Discover creative directions for portfolios, products and business websites. Begin with a considered foundation and make every detail your own."
                  }
                </p>
              </div>
            </div>
            <div className="story-panel">
              <div className="story-image-content">
                <div className="story-image-frame">
                  <img
                    src={businessWorkImg.src}
                    alt="Creative professionals collaborating on a website project"
                    loading="lazy"
                  />
                </div>
                <h3>{"Create together. Move forward."}</h3>
                <p>
                  {
                    "Bring your team, your next brief and your own perspective. OFFGRID gives your next project a clear place to begin."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
