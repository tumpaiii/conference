"use client";
import { X } from "lucide-react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { performAction } from "@/lib/site-actions";

interface RegistrationFormProps {
  className?: string;
}
export default function RegistrationForm({ className }: RegistrationFormProps) {
  return (
    <div
      className={cn("section-component", className)}
      style={{ display: "contents" }}
    >
      <dialog
        id="modal"
        className="registration-dialog"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="registration-close"
          aria-label="Close registration"
          onClick={(event) =>
            performAction(
              "document.getElementById('modal').close()",
              event.currentTarget,
            )
          }
        >
          <X size={20} aria-hidden="true" />
        </button>
        <div id="registration-body">
          <h2 id="modal-title">{"Join the OFFGRID reveal."}</h2>
          <p className="registration-intro">
            {"November 13, 2026 · New York, USA"}
            <br />
            {"Tell us a little about yourself."}
          </p>
          <form id="registration-form">
            <div className="registration-grid">
              <label>
                {"Full name"}
                <span aria-hidden="true">{" *"}</span>
                <input
                  name="fullName"
                  autoComplete="name"
                  required={true}
                  maxLength={100}
                  placeholder="Your full name"
                />
              </label>
              <label>
                {"Email address"}
                <span aria-hidden="true">{" *"}</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required={true}
                  maxLength={160}
                  placeholder="you@company.com"
                />
              </label>
              <label>
                {"Company"}
                <input
                  name="company"
                  autoComplete="organization"
                  maxLength={120}
                  placeholder="Company or independent"
                />
              </label>
              <label>
                {"Your role"}
                <span aria-hidden="true">{" *"}</span>
                <select name="role" required={true}>
                  <option value="">{"Select your role"}</option>
                  <option>{"Designer"}</option>
                  <option>{"Developer"}</option>
                  <option>{"Agency or creative team"}</option>
                  <option>{"Founder or business owner"}</option>
                  <option>{"Other"}</option>
                </select>
              </label>
              <label className="registration-wide">
                {"Pass preference"}
                <span aria-hidden="true">{" *"}</span>
                <select name="pass" id="registration-pass" required={true}>
                  <option value="individual">
                    {"Individual · $49 USD / person"}
                  </option>
                  <option value="team">{"Team · $199 USD / 5 people"}</option>
                </select>
              </label>
              <label className="registration-wide">
                {"Anything you’d like to ask?"}
                <textarea
                  name="question"
                  rows={3}
                  maxLength={1000}
                  placeholder="Optional"
                ></textarea>
              </label>
            </div>
            <p className="registration-note">
              {
                "This form prepares your registration details on this device. It is not connected to the organiser yet. No payment is collected and no seat is reserved."
              }
            </p>
            <button className="registration-submit" type="submit">
              {"Prepare registration"}
            </button>
            <p id="registration-error" role="alert"></p>
          </form>
        </div>
        <div id="registration-success" hidden={true} tabIndex={-1}>
          <div className="registration-check" aria-hidden="true">
            {"✓"}
          </div>
          <h2>{"Details ready."}</h2>
          <p>
            {
              "Your registration details are ready to download. They have not been sent to the organiser, and your seat is not confirmed."
            }
          </p>
          <dl id="registration-summary"></dl>
          <button
            className="registration-submit"
            id="registration-download"
            type="button"
          >
            {"Download my details"}
          </button>
          <button
            className="registration-edit"
            type="button"
            onClick={(event) =>
              performAction(
                "document.getElementById('registration-success').hidden=true;document.getElementById('registration-body').hidden=false;document.querySelector('#registration-form input').focus()",
                event.currentTarget,
              )
            }
          >
            {"Edit details"}
          </button>
        </div>
      </dialog>
    </div>
  );
}
