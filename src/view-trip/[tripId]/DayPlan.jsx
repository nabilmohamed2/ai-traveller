import React from "react";
import { useSelector } from "react-redux";
import DayCard from "./DayCard";

function DayPlan() {
  // Normalize data in the component
  const tripData = useSelector((state) => state.travel.data.tripData);
  const days = tripData.itinerary?.days || tripData.Itinerary?.days || [];

  console.log(days);

  return (
    <div className="mt-8 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <h1 className="font-bold text-2xl sm:text-3xl text-gray-800 text-center mb-6">
        Places to Visit
      </h1>

      {/* Days Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {days.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <DayCard item={item} index={index} days={days} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayPlan;
