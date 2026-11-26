import { useEffect, useRef } from "react";

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/**
 * Controlled, slow-paced one-stop-at-a-time vertical page scrolling.
 * Releases scroll lock inside `[data-free-scroll]` sections so multi-day
 * itineraries scroll freely and naturally.
 */
export function useSmoothPageScroll({ enabled = true, duration = 950 } = {}) {
  const isAnimatingRef = useRef(false);
  const currentStopRef = useRef(0);
  const rafRef = useRef(null);
  const touchStartYRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const getStops = () => {
      const els = Array.from(document.querySelectorAll("[data-scroll-stop]"));
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

      const stops = [];
      els.forEach((el) => {
        const type = el.getAttribute("data-scroll-stop");
        const top = el.offsetTop;
        if (type === "editorial") {
          stops.push(Math.min(top, maxScroll));
          const mid = top + Math.max(0, el.offsetHeight - window.innerHeight) * 0.65;
          stops.push(Math.min(Math.round(mid), maxScroll));
        } else {
          stops.push(Math.min(top, maxScroll));
        }
      });

      return Array.from(new Set(stops)).sort((a, b) => a - b);
    };

    const isFreeScroll = (direction) => {
      const freeEl = document.querySelector("[data-free-scroll]");
      if (!freeEl) return false;
      const freeTop = freeEl.offsetTop;
      const y = window.scrollY;

      // Once at or past the free-scroll section, allow natural downward scrolling;
      // when scrolling up, allow natural scrolling until back near the top of the section.
      if (direction > 0 && y >= freeTop - 4) return true;
      if (direction < 0 && y > freeTop + 12) return true;
      return false;
    };

    const syncNearestStop = () => {
      if (isAnimatingRef.current) return;
      const stops = getStops();
      const y = window.scrollY;
      let nearestIdx = 0;
      let minDist = Infinity;
      stops.forEach((stopY, idx) => {
        const d = Math.abs(stopY - y);
        if (d < minDist) {
          minDist = d;
          nearestIdx = idx;
        }
      });
      currentStopRef.current = nearestIdx;
    };

    const scrollToStop = (targetIdx) => {
      const stops = getStops();
      if (stops.length === 0) return;

      const clampedIdx = Math.max(0, Math.min(stops.length - 1, targetIdx));
      const targetY = stops[clampedIdx];
      const startY = window.scrollY;

      if (Math.abs(targetY - startY) < 2) {
        currentStopRef.current = clampedIdx;
        return;
      }

      currentStopRef.current = clampedIdx;
      isAnimatingRef.current = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + (targetY - startY) * eased);

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          window.scrollTo(0, targetY);
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 140);
        }
      };

      rafRef.current = requestAnimationFrame(step);
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      if (isFreeScroll(direction)) return;

      e.preventDefault();
      if (isAnimatingRef.current) return;
      if (Math.abs(e.deltaY) < 8) return;

      syncNearestStop();
      scrollToStop(currentStopRef.current + direction);
    };

    const onTouchStart = (e) => {
      touchStartYRef.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e) => {
      if (touchStartYRef.current === null) return;
      const currentY = e.touches[0]?.clientY ?? touchStartYRef.current;
      const direction = touchStartYRef.current - currentY > 0 ? 1 : -1;
      if (isFreeScroll(direction)) return;
      e.preventDefault();
    };

    const onTouchEnd = (e) => {
      if (touchStartYRef.current === null || isAnimatingRef.current) return;
      const endY = e.changedTouches[0]?.clientY ?? touchStartYRef.current;
      const diff = touchStartYRef.current - endY;
      touchStartYRef.current = null;

      if (Math.abs(diff) < 28) return;
      const direction = diff > 0 ? 1 : -1;
      if (isFreeScroll(direction)) return;

      syncNearestStop();
      scrollToStop(currentStopRef.current + direction);
    };

    const onKeyDown = (e) => {
      if (isAnimatingRef.current) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        if (isFreeScroll(1)) return;
        e.preventDefault();
        syncNearestStop();
        scrollToStop(currentStopRef.current + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        if (isFreeScroll(-1)) return;
        e.preventDefault();
        syncNearestStop();
        scrollToStop(currentStopRef.current - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [enabled, duration]);
}
