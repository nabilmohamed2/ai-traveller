import { useSelector } from "react-redux";
import HorizontalCarousel from "@/components/custom/HorizontalCarousel";
import Recommended from "./Recommended";

function Hotels() {
  const tripData = useSelector((state) => state.travel.data.tripData);
  const hotels = tripData?.hotels || tripData?.Hotels || [];

  return (
    <section
      data-scroll-stop="view-hotels"
      className="animate-editorial-rise min-h-[100svh] flex flex-col justify-center"
      style={{
        animationDelay: "0.65s",
        paddingTop: "calc(var(--head-h) + 1rem)",
        paddingBottom: "2.5rem",
      }}
    >
      <div className="mb-4">
        <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--mute)] mb-2">
          01 / Sanctuary
        </p>
        <h2 className="m-0 font-light tracking-[-0.028em] text-[clamp(1.65rem,3vw,2.5rem)] text-[var(--bone)]">
          Recommended Stays
        </h2>
      </div>

      <HorizontalCarousel itemCount={hotels.length} label="stays">
        {hotels.map((item, index) => (
          <div
            key={index}
            className="w-[82vw] sm:w-[340px] lg:w-[360px] flex-shrink-0 snap-start"
          >
            <Recommended item={item} />
          </div>
        ))}
      </HorizontalCarousel>
    </section>
  );
}

export default Hotels;
