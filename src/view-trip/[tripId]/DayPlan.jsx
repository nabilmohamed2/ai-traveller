import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import DayCard from "./DayCard";

function DayPlan() {
  const [days, setDays] = useState([]);

  try{
    const { days } = useSelector((state) => state.travel.data.tripData.itinerary);
    setDays(days);
  }
  catch(e){
    const { days } = useSelector((state) => state.travel.data.tripData.Itinerary);
    setDays(days);
  }
  console.log(days);

  return (
    <div className="">
      <h1 className='mt-8 font-semibold text-xl'>Places to visit</h1>
      {days.map((item, index) => {
        //
        return (
          <DayCard item={item} index={index} days={days}/>
        );
      })}
      {/*
       */}
    </div>
  );
}

export default DayPlan;
