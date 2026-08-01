import { fetch } from "@/Services/fetchImg";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80";

const ResCard = ({items, index}) => {

  const [img, setImg] = useState(FALLBACK_IMAGE);
  useEffect(()=>{
    const fetchImg = async ( desc ) => {
      try {
        const image = await fetch(desc);
        if (image && image[0]?.links?.download) {
          setImg(image[0].links.download);
        }
      } catch (err) {
        console.error("Failed to fetch image for spot:", desc, err);
      }
    }
    if (items?.placeName) {
      fetchImg(items.placeName.trim());
    }
  },[items?.placeName])

  return (
    <div
      key={index}
      className="bg-white border border-zinc-200/60 shadow-sm hover:shadow-lg rounded-2xl p-4 flex gap-4 transition-all duration-300 transform hover:scale-[1.01]"
    >
      <img src={img} alt={items.placeName} className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-xl shadow-inner flex-shrink-0" />
      <div className="flex flex-col justify-between w-full min-w-0">
        <div>
          <h4 className="font-bold text-base sm:text-lg text-zinc-900 truncate">{items.placeName}</h4>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 line-clamp-2 leading-relaxed">{items.PlaceDetails}</p>
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-3 text-xs">
          <span className="bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md font-medium">⏱️ {items.Time}</span>
          <span className="bg-zinc-100 text-zinc-600 px-2.5 py-1 rounded-md font-medium">💵 {items.ticketPricing}</span>
        </div>
        <div className="flex justify-end mt-2">
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              encodeURIComponent(`${items.placeName}, ${items.PlaceDetails}`)
            }
            target="_blank"
            className="text-indigo-600 hover:text-indigo-800 transition-colors bg-indigo-50 p-2 rounded-lg"
            title="View on Google Maps"
          >
            <FaMapLocationDot className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
