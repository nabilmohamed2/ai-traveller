/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function HorizontalCarousel({ children, itemCount, label, compact = false }) {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(maxScroll > 4 && el.scrollLeft < maxScroll - 4);
    setProgress(maxScroll > 0 ? Math.min(1, Math.max(0, el.scrollLeft / maxScroll)) : 1);
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [itemCount]);

  const scrollByStep = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = Math.min(440, el.clientWidth * 0.75);
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const hasOverflow = canLeft || canRight;

  return (
    <div className="relative">
      {/* Top-right scroll hint & arrow controls */}
      {hasOverflow && (
        <div className="flex items-center justify-end gap-3 mb-3">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--bronze)]">
            Scroll left / right
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={!canLeft}
              onClick={() => scrollByStep(-1)}
              aria-label={`Scroll ${label} left`}
              className={`border flex items-center justify-center transition-colors duration-300 ${
                compact ? "w-8 h-8" : "w-9 h-9"
              } ${
                canLeft
                  ? "text-[var(--bone)] border-[var(--bone)]/35 hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
                  : "text-[var(--mute)]/35 border-[var(--line)] cursor-not-allowed"
              }`}
            >
              <ArrowLeft strokeWidth={1.35} className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              disabled={!canRight}
              onClick={() => scrollByStep(1)}
              aria-label={`Scroll ${label} right`}
              className={`border flex items-center justify-center transition-colors duration-300 ${
                compact ? "w-8 h-8" : "w-9 h-9"
              } ${
                canRight
                  ? "text-[var(--bone)] border-[var(--bone)]/35 hover:border-[var(--bronze)] hover:text-[var(--bronze)]"
                  : "text-[var(--mute)]/35 border-[var(--line)] cursor-not-allowed"
              }`}
            >
              <ArrowRight strokeWidth={1.35} className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Horizontal scroll container with subtle edge fades */}
      <div className="relative">
        {canLeft && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-2 w-10 z-10"
            style={{
              background: "linear-gradient(to right, var(--void), transparent)",
            }}
          />
        )}
        {canRight && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-2 w-12 z-10"
            style={{
              background: "linear-gradient(to left, var(--void), transparent)",
            }}
          />
        )}

        <div
          ref={scrollerRef}
          onScroll={updateScrollState}
          className="no-scrollbar flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2"
        >
          {children}
        </div>
      </div>

      {/* Hairline scroll progress track */}
      {hasOverflow && (
        <div
          aria-hidden="true"
          className="mt-3 h-[2px] w-full overflow-hidden"
          style={{ backgroundColor: "var(--line)" }}
        >
          <div
            className="h-full transition-all duration-200"
            style={{
              width: `${Math.max(18, progress * 100)}%`,
              backgroundColor: "var(--bronze)",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default HorizontalCarousel;
