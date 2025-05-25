import React, { useEffect, useState } from "react";
import { fetch } from "@/Services/fetchImg";
import { Link } from "react-router-dom";

const Recommended = ({ item, index }) => {
  const [img, setImg] = useState();

  useEffect(()=>{
    const imgFetch = (item) => {
        fetch(item?.HotelName.trim()).then((data) => {
          const image = data[0].links.download;
          console.log(image);
          setImg(image)
        });
      };
    imgFetch(item);
  },[])
  return (
    <div>
      <Link
        to={
          "https://www.google.com/maps/search/?api=1&query=" +
          item?.HotelName +
          "," +
          item?.HotelAddress
        }
        target="_blank"
      >
        <div
          className="mt-2 hover:scale-105 transition-all cursor-pointer"
          key={index}
        >
          <img className="h-40 rounded-lg" src={img} alt="alt" />
          <div className="mt-3 mx-1 flex gap-1 flex-col">
            <h2 className="font-medium">{item?.HotelName}</h2>
            <p className="text-xs text-gray-500">📍 {item?.HotelAddress}</p>
            <p className="text-sm">🏷️ {item?.Price}</p>
            <p className="text-sm">⭐ {item?.Rating}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Recommended;
