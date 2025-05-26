import React from "react";
import { useSelector } from "react-redux";
import Recommended from "./Recommended";

function Hotels() {
  // Normalize data in the component
  const tripData = useSelector((state) => state.travel.data.tripData);
  const hotels = tripData.hotels || tripData.Hotels || [];

  console.log(hotels);

  return (
    <div className="mt-8 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="font-bold text-2xl sm:text-3xl text-gray-800 text-center mb-6">
        Recommended Hotels
      </h2>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Recommended item={item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
