import React from "react";
import { useSelector } from "react-redux";
import Recommended from "./Recommended";

function Hotels() {
  // Normalize data in the component
  const tripData = useSelector((state) => state.travel.data.tripData);
  const hotels = tripData.hotels || tripData.Hotels || [];

  console.log(hotels);

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-xl">Recommended Hotels</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-100">
        {hotels.map((item, index) => (
          <Recommended key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
