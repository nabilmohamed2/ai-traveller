import { fetch } from "@/Services/fetchImg";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ResCard = ({items, index}) => {

  const [img, setImg] = useState();
  useEffect(()=>{
    const fetchImg = async ( desc ) => {
        const image = await fetch(desc);
        console.log()
        setImg(image[0].links.download);
    }
    fetchImg(items.placeName.trim());
  },[])

  return (
    <div
      key={index}
      className="flex gap-3 align-middle border shadow-xl p-4 w-12/12 rounded-xl"
    >
      <img src={img} alt="photo" className="w-32 h-35 rounded-lg" />
      <div className="flex flex-col gap-1 w-full h-2/3">
        <h2 className="font-semibold ">{items.placeName}</h2>
        <p className="text-sm text-gray-600">🖊️ {items.PlaceDetails}</p>
        <p className="text-sm">⏰ {items.Time}</p>
        <div className="flex justify-between w-full pr-4">
          <p className="text-sm">💵 {items.ticketPricing}</p>
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              items.placeName +
              "," +
              items.PlaceDetails
            }
            target="_blank"
          >
            <FaMapLocationDot className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
