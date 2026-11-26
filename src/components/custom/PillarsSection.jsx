import { Link } from "react-router-dom";

const PILLARS = [
  {
    title: "Experiences",
    tags: ["Itineraries", "Pacing", "Discovery"],
    copy: "We curate and pace it.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Stays",
    tags: ["Boutique", "Architecture", "Sanctuary"],
    copy: "We source and match it.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Culture",
    tags: ["Dining", "Heritage", "Local"],
    copy: "We uncover and map it.",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Intelligence",
    tags: ["Routes", "Timing", "Budgets"],
    copy: "We optimize and refine it.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80",
  },
];

function PillarsSection() {
  return (
    <section
      data-scroll-stop="pillars"
      className="relative flex flex-col justify-end"
      style={{
        minHeight: "calc(100svh - var(--foot-h))",
        backgroundColor: "var(--void)",
        color: "var(--bone)",
        padding: "clamp(3rem, 7vh, 5rem) var(--gutter) clamp(2.5rem, 5vh, 4rem)",
      }}
      aria-label="Capabilities"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 w-full">
        {PILLARS.map((pillar) => (
          <Link
            key={pillar.title}
            to="/create-trip"
            className="group relative flex flex-col justify-end overflow-hidden aspect-[3/4] lg:aspect-auto lg:h-[68svh] min-h-[380px] border transition-colors duration-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white focus-visible:outline-offset-4"
            style={{
              borderColor: "var(--line)",
              backgroundColor: "var(--void-raised)",
            }}
          >
            {/* B&W to Color image transition */}
            <img
              src={pillar.image}
              alt={pillar.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.68] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-[0.88] group-hover:scale-[1.04]"
            />

            {/* Editorial gradient shade */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,11,10,0.88) 0%, rgba(11,11,10,0.28) 52%, rgba(11,11,10,0.12) 100%)",
              }}
            />

            {/* Hairline corner accent on hover */}
            <div
              aria-hidden="true"
              className="absolute inset-3 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none"
            />

            {/* Card content */}
            <div className="relative z-10 p-6 sm:p-7 transition-transform duration-500 ease-out group-hover:-translate-y-2">
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3 text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--bone)]/70">
                {pillar.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <h3 className="m-0 font-light tracking-[-0.025em] leading-[1.02] text-[clamp(1.65rem,2.35vw,2.6rem)] text-[var(--bone)]">
                {pillar.title}
              </h3>

              <p className="mt-2.5 text-[13.5px] font-normal text-[var(--bone)]/75 leading-snug">
                {pillar.copy}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PillarsSection;
