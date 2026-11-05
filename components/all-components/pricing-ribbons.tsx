"use client";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";

interface PricingRibbonsProps {
  className?: string;
}
export default function PricingRibbons({ className }: PricingRibbonsProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <div
        className="pricing-ribbons"
        aria-label="Your next beginning. Create with OFFGRID. Be part of the reveal."
      >
        <div className="pricing-ribbon " aria-hidden="true">
          <div className="ribbon-flow">
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
          </div>
        </div>
        <div className="pricing-ribbon diagonal" aria-hidden="true">
          <div className="ribbon-flow">
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
            <span className="ribbon-copy">
              {"Your next beginning "}
              <b>{"✦"}</b>
              {" Create with OFFGRID "}
              <b>{"✦"}</b>
              {" Be part of the reveal "}
              <b>{"✦"}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
