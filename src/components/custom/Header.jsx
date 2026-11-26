/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ onOpenBrief }) {
  const [hidden, setHidden] = useState(false);
  const [tone, setTone] = useState("dark");
  const navigate = useNavigate();

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      // Hide on scroll down after initial hero clearance, reveal immediately on scroll up
      if (currentY > 120 && currentY > lastY + 4) {
        setHidden(true);
      } else if (currentY < lastY - 4 || currentY <= 120) {
        setHidden(false);
      }
      lastY = currentY;

      // Detect if header sits over a light (#eee8e1) section
      const lightSections = document.querySelectorAll("[data-header-tone='light']");
      let isOverLight = false;
      const probeY = 36;
      lightSections.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          isOverLight = true;
        }
      });
      setTone(isOverLight ? "light" : "dark");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLight = tone === "light";

  const handleAction = () => {
    if (onOpenBrief) {
      onOpenBrief();
    } else {
      navigate("/create-trip");
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between pointer-events-none transition-all duration-500"
      style={{
        padding: "var(--head-y) var(--gutter)",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        opacity: hidden ? 0 : 1,
        color: isLight ? "var(--ink)" : "var(--bone)",
      }}
    >
      {/* Top gradient scrim (fades out on light sections) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -bottom-10 -z-10 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(4,4,4,0.35), rgba(4,4,4,0))",
          opacity: isLight ? 0 : 1,
        }}
      />

      {/* Left Wordmark */}
      <Link
        to="/"
        className="pointer-events-auto group inline-flex items-center gap-3 focus:outline-none"
        aria-label="AI Traveller Home"
      >
        <span
          className="inline-block w-2 h-2 rounded-full transition-colors duration-300"
          style={{ backgroundColor: isLight ? "var(--ink)" : "var(--bone)" }}
        />
        <span className="text-[13px] sm:text-[14px] font-medium tracking-[0.22em] uppercase transition-opacity duration-300 group-hover:opacity-70">
          AI Traveller
        </span>
      </Link>

      {/* Right Action */}
      <button
        type="button"
        onClick={handleAction}
        className="pointer-events-auto relative text-[11px] sm:text-[12px] font-medium tracking-[0.17em] uppercase pb-1 transition-colors duration-300 group"
      >
        <span>What’s your journey?</span>
        <span
          className="absolute left-0 right-0 bottom-0 h-[1px] transition-colors duration-300"
          style={{
            backgroundColor: isLight ? "var(--line-ink)" : "var(--line)",
          }}
        />
        <span
          className="absolute left-0 right-0 bottom-0 h-[1px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
          style={{ backgroundColor: "var(--bronze)" }}
        />
      </button>
    </header>
  );
}

export default Header;
