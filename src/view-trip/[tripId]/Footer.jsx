import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="relative z-10 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 sm:gap-4 mt-12"
      style={{
        minHeight: "var(--foot-h)",
        padding: "1.5rem var(--gutter)",
        backgroundColor: "var(--void)",
        color: "var(--bone)",
      }}
    >
      <div
        aria-hidden="true"
        className="footer-slit absolute top-0 h-[1px] pointer-events-none"
        style={{
          left: "var(--gutter)",
          right: "var(--gutter)",
          backgroundColor: "rgba(255, 255, 255, 0.22)",
        }}
      />

      <div className="flex justify-center sm:justify-start">
        <Link
          to="/create-trip"
          className="text-[10.5px] font-medium tracking-[0.14em] uppercase text-[var(--mute)] hover:text-[var(--bone)] transition-colors duration-300"
        >
          Plan Another Trip
        </Link>
      </div>

      <div className="text-center text-[10.5px] font-medium tracking-[0.14em] uppercase text-[var(--mute)]">
        Curated by <span className="text-[var(--bone)]">Nabil Mohamed</span> · 2026
      </div>

      <div className="flex justify-center sm:justify-end">
        <Link
          to="/"
          className="text-[10.5px] font-medium tracking-[0.14em] uppercase text-[var(--mute)] hover:text-[var(--bronze)] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
