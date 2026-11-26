/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Hero({ onOpenBrief }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle scale & fade as user scrolls through the sticky runway
  const mediaScale = 1 + progress * 0.06;
  const textOpacity = Math.max(0, 1 - progress * 1.45);
  const textTranslateY = -progress * 28;
  const paperVeilOpacity = Math.max(0, (progress - 0.55) / 0.45);

  return (
    <section
      ref={sectionRef}
      data-scroll-stop="hero"
      className="relative h-[185svh] bg-[var(--void)]"
      aria-label="Introduction"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden isolate bg-[var(--void)]">
        {/* Background Atmospheric Travel Visual */}
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            transform: `scale(${mediaScale})`,
            transition: "transform 80ms linear",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2400&q=85"
            alt="Editorial travel horizon"
            className="w-full h-full object-cover brightness-[0.52] contrast-[1.06]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(11,11,10,0.18) 0%, rgba(11,11,10,0.68) 100%)",
            }}
          />
        </div>

        {/* Monumental Editorial Statement */}
        <div
          className="relative z-10 h-full flex flex-col justify-between"
          style={{
            padding: "calc(var(--head-h) + 1.5rem) var(--gutter) clamp(2rem, 6svh, 4.5rem)",
            opacity: textOpacity,
            transform: `translate3d(0, ${textTranslateY}px, 0)`,
          }}
        >
          <div className="my-auto max-w-[92vw]">
            <h1 className="m-0 font-light uppercase tracking-[-0.035em] leading-[0.95] text-[var(--bone)]">
              <span className="block text-[clamp(1.9rem,4.6vw,5.5rem)]">
                AI Traveller is an independent
              </span>
              <span className="block text-[clamp(1.9rem,4.6vw,5.5rem)]">
                curator built around
              </span>
              <span className="block mt-2 sm:mt-3 text-[clamp(1.25rem,3.05vw,3.6rem)] leading-[0.98] tracking-[-0.03em] text-[var(--bone)]/90">
                Experiences, Stays, Culture &amp; Intelligence.
              </span>
            </h1>
          </div>

          {/* Lower Stage Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenBrief}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 border border-white/60 bg-[#080808]/30 text-[var(--bone)] backdrop-blur-sm hover:bg-white hover:text-[#111] hover:border-white"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--bronze)]" />
                <span>Quick Trip Brief</span>
              </button>

              <Link
                to="/create-trip"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--bone)]/80 hover:text-[var(--bronze)] transition-colors duration-300"
              >
                <span>Open Full Planner</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <span className="text-[10.5px] font-medium tracking-[0.2em] uppercase text-[var(--bone)]/60">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* Warm Paper Transition Veil into EditorialPane */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            backgroundColor: "var(--paper)",
            opacity: paperVeilOpacity,
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
