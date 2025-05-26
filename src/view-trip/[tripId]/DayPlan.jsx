import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DayCard from "./DayCard";

function DayPlan() {
  const itinerary = useSelector((state) => state.travel.data.tripData.itinerary || state.travel.data.tripData.Itinerary); // Safely select itinerary
  const [days, setDays] = useState([]);

  // Use useEffect to fetch and set the days data
  useEffect(() => {
    if (itinerary && itinerary.days) {
      setDays(itinerary.days); // Set days only if itinerary exists
    }
  }, [itinerary]); // Dependency array ensures this runs when itinerary changes

  console.log(days);

  return (
    <div className="">
      <h1 className="mt-8 font-semibold text-xl">Places to visit</h1>
      {days.map((item, index) => (
        <DayCard item={item} index={index} days={days} key={index} />
      ))}
    </div>
  );
}

export default DayPlan;
