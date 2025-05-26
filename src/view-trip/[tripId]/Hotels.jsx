import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Recommended from "./Recommended";

function Hotels() {
  const [hotel, setHotel] = useState([]);

  try{
    const hotel = useSelector((state) => state.travel.data.tripData.hotels);
    setHotel(hotel);
  }
  catch(e){
    const hotel = useSelector((state) => state.travel.data.tripData.Hotels);
    setHotel(hotel);
  }
  console.log(hotel);
  return (
    <div className="mt-8">
      {/* <img src="img" alt="dummy" /> */}
      <h2 className="font-semibold text-xl">Recommended Hotels</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3  gap-4 h-100">
        {hotel.map((item, index) => {

          return (
            <Recommended item={item} index={index}/>
            // <Link to={'https://www.google.com/maps/search/?api=1&query='+item?.HotelName+","+item?.HotelAddress} target="_blank">
            //   <div className="mt-2 hover:scale-105 transition-all cursor-pointer" key={index}>
            //   <img className="h-40 rounded-lg" src={img} alt="adv" />
            //     <div className="mt-3 mx-1 flex gap-1 flex-col">
            //       <h2 className="font-medium">{item?.HotelName}</h2>
            //       <p className="text-xs text-gray-500">📍 {item?.HotelAddress}</p>
            //       <p className="text-sm">🏷️ {item?.Price}</p>
            //       <p className="text-sm">⭐ {item?.Rating}</p>
            //     </div>
            //   </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
}

// Hotel address(pin):"31 Avenue George V, 75008 Paris, France"
// hotel image url(pin):"https://www.fourseasons.com/paris/images/hotel/hotel-exterior.jpg"
// geo coordinates(pin):"48.8629, 2.2958"
// descriptions(pin):"An iconic Parisian palace hotel known for its elegant rooms, Michelin-starred restaurant, and impeccable service."
// HotelName(pin):"Four Seasons Hotel George V"
// Price(pin):"$1,500 - $5,000 per night"
// rating(pin):5

export default Hotels;
