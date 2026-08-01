import { fetch } from "@/Services/fetchImg";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function InformationSection() {
  const { budget, noOfPeople, destination, noOfDays } = useSelector(
    (state) => state.travel.data.userSelection
  );
  const [cityImg, setCityImg] = useState("");

  useEffect(()=>{
    const fetchImg = async(city) => {
      const image = await fetch(city);
      console.log(image[0].links.download);
      setCityImg(image[0].links.download);
    }
    fetchImg(destination)
  },[])

  return (
    <div className="bg-white border border-zinc-200/60 p-6 rounded-2xl shadow-md mb-8">
      <img
        src={cityImg || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"}
        alt="Destination Photo"
        className="h-[360px] w-full object-cover rounded-xl shadow-inner mb-6"
      />
      <div>
        <h2 className="mb-4 mt-2 font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight">{destination}</h2>
        <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
          <div className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-2 rounded-full font-semibold shadow-sm flex items-center gap-2">
            🗓️ {noOfDays} Days
          </div>
          <div className="bg-amber-50 text-amber-700 border border-amber-100 px-4 py-2 rounded-full font-semibold shadow-sm flex items-center gap-2">
            💰 {budget} Budget
          </div>
          <div className="bg-purple-50 text-purple-700 border border-purple-100 px-4 py-2 rounded-full font-semibold shadow-sm flex items-center gap-2">
            🍻 Traveller Type: {noOfPeople}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
