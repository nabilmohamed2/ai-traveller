import React from "react";
import { useSelector } from "react-redux";
import DayCard from "./DayCard";

function DayPlan() {
  // Normalize data in the component
  const tripData = useSelector((state) => state.travel.data.tripData);
  const days = tripData.itinerary?.days || tripData.Itinerary?.days || [];

  console.log(days);

  return (
    <div className="">
      <h1 className="mt-8 font-semibold text-xl">Places to visit</h1>
      {days.map((item, index) => (
        <DayCard key={index} item={item} index={index} days={days} />
      ))}
    </div>
  );
}

export default DayPlan;
