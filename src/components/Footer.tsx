"use client";

import { Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = 2026; // Setting year corresponding to environment metadata

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="w-full border-t border-border/60 bg-muted/20 py-12 px-4 md:px-8 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal size={16} />
          <span className="font-mono text-xs md:text-sm">
            [balaji-portfolio ~] &copy; {currentYear} &middot; Built with Next.js &amp; R3F
          </span>
        </div>

        {/* Center: Quick Sitemap */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["home", "about", "skills", "timeline", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item)}
              className="text-xs font-semibold text-muted-foreground hover:text-foreground capitalize transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right: Signature */}
        <p className="text-[10px] md:text-xs text-muted-foreground">
          Designed &amp; Engineered with &hearts;
        </p>
      </div>
    </footer>
  );
}
