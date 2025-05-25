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
    <div>
      <img
        src={cityImg}
        alt="adv"
        className="h-[340px] w-full object-cover rounded-lg "
      />
      <div>
        <h2 className="mb-2 mt-3 font-bold text-3xl">{destination}</h2>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <p className="bg-gray-300 px-2 py-1 rounded-lg">🗓️ {noOfDays} days</p>
          <p className="bg-gray-300 px-2 py-1 rounded-lg">💰 {budget} budget</p>
          <p className="bg-gray-300 px-2 py-1 rounded-lg">🍻Traveller type : {noOfPeople}</p>
        </div>
      </div>
    </div>
  );
}

export default InformationSection;
