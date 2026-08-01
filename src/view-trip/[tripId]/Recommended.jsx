import React, { useEffect, useState } from "react";
import { fetch } from "@/Services/fetchImg";
import { Link } from "react-router-dom";

const FALLBACK_HOTEL_IMAGE = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80";

const Recommended = ({ item, index }) => {
  const [img, setImg] = useState(FALLBACK_HOTEL_IMAGE);

  useEffect(()=>{
    const imgFetch = (item) => {
      if (!item?.HotelName) return;
      fetch(item.HotelName.trim()).then((data) => {
        if (data && data[0]?.links?.download) {
          setImg(data[0].links.download);
        }
      }).catch((err) => {
        console.error("Failed to fetch image for hotel:", item.HotelName, err);
      });
    };
    imgFetch(item);
  }, [item?.HotelName])
  return (
    <div className="h-full">
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          encodeURIComponent(`${item?.HotelName}, ${item?.HotelAddress}`)
        }
        target="_blank"
        className="block h-full"
      >
        <div
          className="bg-white border border-zinc-200/60 shadow-sm hover:shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 flex flex-col h-full cursor-pointer"
          key={index}
        >
          <div className="relative h-48 w-full overflow-hidden">
            <img className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={img} alt={item?.HotelName} />
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-700 shadow-sm">
              ⭐ {item?.Rating}
            </div>
          </div>
          <div className="p-5 flex flex-col justify-between flex-grow gap-2">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-zinc-900 line-clamp-1">{item?.HotelName}</h3>
              <p className="text-zinc-500 text-xs mt-1.5 flex items-center gap-1">
                📍 <span className="line-clamp-1">{item?.HotelAddress}</span>
              </p>
              <p className="text-zinc-600 text-sm mt-3 line-clamp-2 leading-relaxed font-normal">"{item?.Description}"</p>
            </div>
            <div className="border-t border-zinc-100 pt-3 mt-2 flex items-center justify-between">
              <span className="text-zinc-400 text-xs font-semibold">EST. PRICE</span>
              <span className="text-emerald-700 font-extrabold text-sm bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">{item?.Price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Recommended;
