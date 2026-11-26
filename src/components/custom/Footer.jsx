/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Footer({ onOpenBrief }) {
  const footerRef = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative z-10 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 sm:gap-4"
      style={{
        minHeight: "var(--foot-h)",
        padding: "1.25rem var(--gutter)",
        backgroundColor: "var(--void)",
        color: "var(--bone)",
      }}
    >
      {/* Animated hairline slit */}
      <div
        aria-hidden="true"
        className={`absolute top-0 h-[1px] pointer-events-none ${drawn ? "footer-slit" : "scale-x-0"}`}
        style={{
          left: "var(--gutter)",
          right: "var(--gutter)",
          backgroundColor: "rgba(255, 255, 255, 0.22)",
        }}
      />

      {/* Subtle light spill */}
      <div
        aria-hidden="true"
        className={`absolute top-0 h-6 pointer-events-none ${drawn ? "footer-spill" : "opacity-0"}`}
        style={{
          left: "var(--gutter)",
          right: "var(--gutter)",
          background: "linear-gradient(to bottom, rgba(237,232,224,0.10), transparent)",
        }}
      />

      {/* Left link */}
      <div className="flex justify-center sm:justify-start">
        <Link
          to="/create-trip"
          className="text-[10.5px] font-medium tracking-[0.14em] uppercase text-[var(--mute)] hover:text-[var(--bone)] transition-colors duration-300"
        >
          Full Trip Planner
        </Link>
      </div>

      {/* Center signature */}
      <div className="text-center text-[10.5px] font-medium tracking-[0.14em] uppercase text-[var(--mute)]">
        AI Traveller · Crafted by Intelligence
      </div>

      {/* Right action */}
      <div className="flex justify-center sm:justify-end">
        <button
          type="button"
          onClick={onOpenBrief}
          className="text-[10.5px] font-medium tracking-[0.14em] uppercase text-[var(--mute)] hover:text-[var(--bronze)] transition-colors duration-300"
        >
          Start a Brief
        </button>
      </div>
    </footer>
  );
}

export default Footer;
