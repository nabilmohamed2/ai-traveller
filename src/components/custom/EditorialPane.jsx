import { useEffect, useRef, useState } from "react";

const DESTINATIONS = [
  "PARIS",
  "LONDON",
  "NEW YORK",
  "DUBAI",
  "TOKYO",
  "ROME",
  "SINGAPORE",
  "BALI",
  "SWITZERLAND",
  "MALDIVES",
];

function EditorialPane() {
  const sectionRef = useRef(null);
  const [phase, setPhase] = useState("travellers"); // "travellers" -> "journeys"
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / total));

      setPhase(p < 0.45 ? "travellers" : "journeys");
      setShowGrid(p >= 0.35);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTravellers = phase === "travellers";

  return (
    <section
      ref={sectionRef}
      data-scroll-stop="editorial"
      data-header-tone="light"
      className="relative h-[260svh]"
      style={{
        backgroundColor: "var(--paper)",
        color: "var(--ink)",
      }}
      aria-label="Philosophy"
    >
      <div
        className="sticky top-0 h-[100svh] min-h-[420px] flex flex-col items-center justify-center overflow-hidden"
        style={{ padding: "0 var(--gutter)" }}
      >
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          {/* Scroll-driven contrast headline */}
          <h2 className="m-0 font-light tracking-[-0.028em] leading-[1.05] text-[clamp(1.75rem,min(5.6vw,9.5svh),5.75rem)]">
            <span className="block whitespace-nowrap">
              <span className="text-[var(--soft)]">Crafted for </span>
              <span
                className="transition-colors duration-700"
                style={{
                  transitionTimingFunction: "var(--ease-color)",
                  color: isTravellers ? "var(--ink)" : "var(--dim)",
                }}
              >
                Curious Travellers
              </span>
            </span>
            <span className="block whitespace-nowrap mt-1">
              <span className="text-[var(--soft)]">and </span>
              <span
                className="transition-colors duration-700"
                style={{
                  transitionTimingFunction: "var(--ease-color)",
                  color: !isTravellers ? "var(--ink)" : "var(--dim)",
                }}
              >
                Bespoke Journeys.
              </span>
            </span>
          </h2>

          {/* Subtle Statement Caption */}
          <p
            className="mt-6 text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-700"
            style={{
              color: "var(--soft)",
              opacity: showGrid ? 1 : 0.35,
              transform: showGrid ? "translateY(0)" : "translateY(6px)",
            }}
          >
            NO TEMPLATES. ALWAYS TAILORED.
          </p>

          {/* Monochrome Curated Destinations Strip */}
          <div
            className="mt-10 sm:mt-14 w-full max-w-4xl grid grid-cols-2 sm:grid-cols-5 gap-y-4 gap-x-6 border-t pt-8 transition-all duration-700"
            style={{
              borderColor: "var(--line-ink)",
              opacity: showGrid ? 1 : 0,
              transform: showGrid ? "translateY(0)" : "translateY(14px)",
            }}
          >
            {DESTINATIONS.map((city) => (
              <div
                key={city}
                className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-[var(--dim)] hover:text-[var(--ink)] transition-colors duration-300 select-none"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialPane;
