import React from "react";
import { useSelector } from "react-redux";
import Recommended from "./Recommended";

function Hotels() {
  // Normalize data in the component
  const tripData = useSelector((state) => state.travel.data.tripData);
  const hotels = tripData.hotels || tripData.Hotels || [];

  console.log(hotels);

  return (
    <div className="mt-12 mb-16">
      {/* Heading */}
      <h2 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 mb-8 border-b border-zinc-200/60 pb-3 tracking-tight">
        Recommended Hotels
      </h2>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((item, index) => (
          <Recommended key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
