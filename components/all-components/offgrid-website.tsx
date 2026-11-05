"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { siteRuntime } from "@/lib/site-runtime";
import Intro from "./intro";
import Navbar from "./navbar";
import Footer from "./footer";
import RegistrationForm from "./registration-form";
import Home from "./home";
import Platform from "./platform";
import Possibilities from "./possibilities";
import Templates from "./templates";
import Reveal from "./reveal";
import Agenda from "./agenda";
import Attend from "./attend";
import Speakers from "./speakers";
import Venue from "./venue";
import Pricing from "./pricing";
import PricingRibbons from "./pricing-ribbons";
import Faq from "./faq";
import ClosingCta from "./closing-cta";
interface OffgridWebsiteProps {
  className?: string;
}
export default function OffgridWebsite({ className }: OffgridWebsiteProps) {
  useEffect(() => {
    if (document.getElementById("offgrid-runtime")) return;
    const script = document.createElement("script");
    script.id = "offgrid-runtime";
    script.textContent = siteRuntime;
    document.body.appendChild(script);
  }, []);
  return (
    <div className={cn("offgrid-website", className)}>
      <Intro />
      <Navbar />
      <main>
        <Home />
        <Platform />
        <Possibilities />
        <Templates />
        <Reveal />
        <Agenda />
        <Attend />
        <Speakers />
        <Venue />
        <Pricing />
        <PricingRibbons />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <RegistrationForm />
    </div>
  );
}
