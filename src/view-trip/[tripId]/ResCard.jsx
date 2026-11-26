/* eslint-disable react/prop-types */
import { fetch } from "@/Services/fetchImg";
import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80";

const ResCard = ({ items }) => {
  const [img, setImg] = useState(FALLBACK_IMAGE);

  useEffect(() => {
    let active = true;
    const fetchImg = async (desc) => {
      try {
        const image = await fetch(desc);
        if (active && image?.[0]?.links?.download) {
          setImg(image[0].links.download);
        }
      } catch (err) {
        console.error("Failed to fetch image for spot:", desc, err);
      }
    };
    if (items?.placeName) {
      fetchImg(items.placeName.trim());
    }
    return () => {
      active = false;
    };
  }, [items?.placeName]);

  return (
    <div
      className="group relative border p-4 sm:p-5 flex gap-4 sm:gap-5 transition-all duration-500 hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--void-raised)",
        borderColor: "var(--line)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[1px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
        style={{ backgroundColor: "var(--bronze)" }}
      />

      <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden flex-shrink-0 border" style={{ borderColor: "var(--line)" }}>
        <img
          src={img}
          alt={items.placeName || "Place"}
          className="w-full h-full object-cover brightness-[0.94] transition-all duration-700 ease-out group-hover:brightness-100 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between w-full min-w-0">
        <div>
          <h4 className="m-0 font-normal text-base sm:text-lg tracking-tight text-[var(--bone)] truncate">
            {items.placeName}
          </h4>
          <p className="text-xs sm:text-sm text-[var(--mute)] mt-1.5 line-clamp-2 leading-relaxed">
            {items.PlaceDetails}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t" style={{ borderColor: "var(--line)" }}>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[var(--mute)]">
            {items.Time && (
              <span className="inline-flex items-center gap-1.5">
                <Clock strokeWidth={1.25} className="w-3 h-3 text-[var(--bronze)]" />
                <span>{items.Time}</span>
              </span>
            )}
            {items.ticketPricing && (
              <span className="inline-flex items-center gap-1.5">
                <Ticket strokeWidth={1.25} className="w-3 h-3 text-[var(--bronze)]" />
                <span>{items.ticketPricing}</span>
              </span>
            )}
          </div>

          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent(`${items.placeName}, ${items.PlaceDetails}`)
            }
            target="_blank"
            rel="noreferrer"
            title="View on Google Maps"
            className="inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.16em] uppercase text-[var(--bone)] hover:text-[var(--bronze)] transition-colors"
          >
            <span>Map</span>
            <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
