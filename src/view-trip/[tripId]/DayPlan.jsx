import React from "react";
import { useSelector } from "react-redux";
import DayCard from "./DayCard";

function DayPlan() {
  // Normalize data in the component
  const tripData = useSelector((state) => state.travel.data.tripData);
  
  const getDaysArray = (data) => {
    if (!data) return [];
    const itinerary = data.itinerary || data.Itinerary;
    if (Array.isArray(itinerary)) {
      return itinerary;
    }
    if (itinerary && Array.isArray(itinerary.days)) {
      return itinerary.days;
    }
    if (Array.isArray(data.days)) {
      return data.days;
    }
    return [];
  };

  const days = getDaysArray(tripData);

  console.log(days);

  return (
    <div className="mt-12">
      {/* Heading */}
      <h2 className="font-extrabold text-2xl sm:text-3xl text-zinc-900 mb-8 border-b border-zinc-200/60 pb-3 tracking-tight">
        Places to Visit
      </h2>

      {/* Day Cards */}
      <div className="mt-6 space-y-10">
        {days.map((item, index) => (
          <DayCard key={index} item={item} index={index} days={days} />
        ))}
      </div>
    </div>
  );
}

export default DayPlan;
