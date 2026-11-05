import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "OFFGRID — The Official Platform Launch",
  description: "Discover your next starting point with OFFGRID.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
