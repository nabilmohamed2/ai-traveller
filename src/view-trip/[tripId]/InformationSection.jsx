import { fetch } from "@/Services/fetchImg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Calendar, Coins, Users } from "lucide-react";

const FALLBACK_HERO =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85";

function InformationSection() {
  const { budget, noOfPeople, destination, noOfDays } = useSelector(
    (state) => state.travel.data.userSelection
  );
  const [cityImg, setCityImg] = useState("");

  useEffect(() => {
    let active = true;
    const fetchImg = async (city) => {
      if (!city) return;
      try {
        const image = await fetch(city);
        if (active && image?.[0]?.links?.download) {
          setCityImg(image[0].links.download);
        }
      } catch (err) {
        console.error("Failed to fetch destination image:", err);
      }
    };
    fetchImg(destination);
    return () => {
      active = false;
    };
  }, [destination]);

  return (
    <section
      data-scroll-stop="view-info"
      className="animate-editorial-rise relative min-h-[100svh] flex flex-col justify-center"
      style={{
        animationDelay: "0.45s",
        paddingTop: "calc(var(--head-h) + 1rem)",
        paddingBottom: "2.5rem",
      }}
    >
      {/* Editorial Hero Frame */}
      <div
        className="relative w-full h-[260px] sm:h-[360px] overflow-hidden border mb-7"
        style={{ borderColor: "var(--line)", backgroundColor: "var(--void-raised)" }}
      >
        <img
          src={cityImg || FALLBACK_HERO}
          alt={destination || "Destination"}
          className="w-full h-full object-cover brightness-[0.82] contrast-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(11,11,10,0.72) 0%, rgba(11,11,10,0.08) 55%, transparent 100%)",
          }}
        />
      </div>

      <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--bronze)] mb-3">
        Curated Itinerary
      </p>
      <h1 className="m-0 font-light tracking-[-0.035em] leading-[1.02] text-[clamp(2.2rem,5vw,4.5rem)] text-[var(--bone)]">
        {destination}
      </h1>

      <div className="flex flex-wrap gap-3 mt-6">
        <div
          className="inline-flex items-center gap-2.5 border px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--bone)]"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--void-raised)" }}
        >
          <Calendar strokeWidth={1.25} className="w-3.5 h-3.5 text-[var(--bronze)]" />
          <span>{noOfDays} Days</span>
        </div>

        <div
          className="inline-flex items-center gap-2.5 border px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--bone)]"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--void-raised)" }}
        >
          <Coins strokeWidth={1.25} className="w-3.5 h-3.5 text-[var(--bronze)]" />
          <span>{budget} Budget</span>
        </div>

        <div
          className="inline-flex items-center gap-2.5 border px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase text-[var(--bone)]"
          style={{ borderColor: "var(--line)", backgroundColor: "var(--void-raised)" }}
        >
          <Users strokeWidth={1.25} className="w-3.5 h-3.5 text-[var(--bronze)]" />
          <span>{noOfPeople}</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="animate-hairline absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ backgroundColor: "var(--line)", animationDelay: "0.7s" }}
      />
    </section>
  );
}

export default InformationSection;
