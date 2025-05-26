import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Recommended from "./Recommended";

function Hotels() {
  // Safely select hotels from Redux state
  const hotels = useSelector(
    (state) => state.travel.data.tripData.hotels || state.travel.data.tripData.Hotels
  );

  const [hotel, setHotel] = useState([]);

  // Use useEffect to set the hotel data
  useEffect(() => {
    if (hotels) {
      setHotel(hotels); // Set hotels only if they exist
    }
  }, [hotels]); // Dependency array ensures this runs when hotels change

  console.log(hotel);

  return (
    <div className="mt-8">
      <h2 className="font-semibold text-xl">Recommended Hotels</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-100">
        {hotel.map((item, index) => (
          <Recommended item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
