import { db } from "@/Services/fireBase";
import { addTravelData } from "@/utils/travelSlice";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InformationSection from "./InformationSection";
import Shimmer from "@/components/custom/Shimmer";
import Hotels from "./Hotels";
import DayPlan from "./DayPlan";
import Footer from "./Footer";

function ViewTrip() {
  const { tripId } = useParams();
  const [loading, setLoading] = useState(true);
  console.log("Inside" + tripId);
  useEffect(() => {
    console.log(tripId);
    tripId && getData();
  }, [tripId]);

  const dispatch = useDispatch();
  const getData = async () => {
    const docRef = doc(db, "AiTrip", tripId);
    const docsnap = await getDoc(docRef);
    if (docsnap.exists()) {
      console.log("Document data: ", docsnap.data());
      dispatch(addTravelData({ data: docsnap.data() }));
    } else {
      toast("No such document");
    }
    setLoading(false);
  };

  return loading ? (
    <Shimmer />
  ) : (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information section */}
      <InformationSection />

      {/* Hotels */}
      <Hotels />
      {/* Daily plan */}
      <DayPlan />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ViewTrip;
