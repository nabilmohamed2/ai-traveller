/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetch } from "@/Services/fetchImg";
import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";

const FALLBACK_HOTEL_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";

const Recommended = ({ item }) => {
  const [img, setImg] = useState(FALLBACK_HOTEL_IMAGE);

  useEffect(() => {
    let active = true;
    if (!item?.HotelName) return;
    fetch(item.HotelName.trim())
      .then((data) => {
        if (active && data?.[0]?.links?.download) {
          setImg(data[0].links.download);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch image for hotel:", item.HotelName, err);
      });
    return () => {
      active = false;
    };
  }, [item?.HotelName]);

  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(`${item?.HotelName}, ${item?.HotelAddress}`)
      }
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col h-full border overflow-hidden transition-all duration-500 hover:-translate-y-0.5"
      style={{
        backgroundColor: "var(--void-raised)",
        borderColor: "var(--line)",
      }}
    >
      {/* Animated bronze bottom hairline */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[1px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 z-10"
        style={{ backgroundColor: "var(--bronze)" }}
      />

      <div className="relative h-52 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover brightness-[0.94] transition-all duration-700 ease-out group-hover:brightness-100 group-hover:scale-[1.04]"
          src={img}
          alt={item?.HotelName || "Hotel"}
        />
        <div
          className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 border text-[11px] font-medium tracking-wider backdrop-blur-sm"
          style={{
            backgroundColor: "rgba(11, 11, 10, 0.72)",
            borderColor: "var(--line)",
            color: "var(--bone)",
          }}
        >
          <Star strokeWidth={1.25} className="w-3 h-3 text-[var(--bronze)]" />
          <span>{item?.Rating}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow gap-4">
        <div>
          <h3 className="m-0 font-normal text-lg tracking-tight text-[var(--bone)] line-clamp-1">
            {item?.HotelName}
          </h3>
          <p className="text-[var(--mute)] text-xs mt-2 flex items-center gap-1.5">
            <MapPin strokeWidth={1.25} className="w-3.5 h-3.5 text-[var(--bronze)] flex-shrink-0" />
            <span className="line-clamp-1">{item?.HotelAddress}</span>
          </p>
          <p className="text-[var(--mute)] text-xs sm:text-sm mt-3 line-clamp-2 leading-relaxed">
            {item?.Description}
          </p>
        </div>

        <div
          className="border-t pt-3.5 flex items-center justify-between"
          style={{ borderColor: "var(--line)" }}
        >
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[var(--mute)]">
            Est. Rate
          </span>
          <span className="text-xs font-medium tracking-wide text-[var(--bronze)]">
            {item?.Price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Recommended;
