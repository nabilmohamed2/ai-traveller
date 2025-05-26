import React from "react";
import { useSelector } from "react-redux";
import DayCard from "./DayCard";

function DayPlan() {
  // Normalize data in the component
  const tripData = useSelector((state) => state.travel.data.tripData);
  const days = tripData.itinerary?.days || tripData.Itinerary?.days || [];

  console.log(days);

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <h1 className="mt-8 font-bold text-lg sm:text-xl lg:text-2xl text-gray-800">
        Places to Visit
      </h1>

      {/* Day Cards */}
      <div className="mt-6 space-y-6">
        {days.map((item, index) => (
          <DayCard key={index} item={item} index={index} days={days} />
        ))}
      </div>
    </div>
  );
}

export default DayPlan;
