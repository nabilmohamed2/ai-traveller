/* eslint-disable react/prop-types */
import { Sun } from "lucide-react";
import HorizontalCarousel from "@/components/custom/HorizontalCarousel";
import ResCard from "./ResCard";

const DayCard = ({ item }) => {
  const places = item.plan || [];

  return (
    <div
      className="border-l pl-5 sm:pl-7 ml-1.5"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="relative mb-4">
        <div
          aria-hidden="true"
          className="absolute -left-[25px] sm:-left-[33px] top-2 w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: "var(--bronze)" }}
        />
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="m-0 font-light tracking-[-0.02em] text-xl sm:text-2xl text-[var(--bone)]">
            Day {item.day}
          </h3>
          {item.bestTime && (
            <p className="m-0 text-[var(--mute)] text-xs flex items-center gap-1.5 tracking-wide">
              <Sun strokeWidth={1.25} className="w-3.5 h-3.5 text-[var(--bronze)]" />
              <span>
                Recommended:{" "}
                <span className="text-[var(--bone)]">{item.bestTime}</span>
              </span>
            </p>
          )}
        </div>
      </div>

      <HorizontalCarousel
        itemCount={places.length}
        label={`day ${item.day} places`}
      >
        {places.map((items, idx) => (
          <div
            key={idx}
            className="w-[82vw] sm:w-[420px] lg:w-[460px] flex-shrink-0 snap-start"
          >
            <ResCard
              items={{
                ...items,
                PlaceDetails:
                  items.PlaceDetails?.length > 130
                    ? items.PlaceDetails.slice(0, 130) + "..."
                    : items.PlaceDetails,
              }}
            />
          </div>
        ))}
      </HorizontalCarousel>
    </div>
  );
};

export default DayCard;
