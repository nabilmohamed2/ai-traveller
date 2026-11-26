import { db } from "@/Services/fireBase";
import { addTravelData } from "@/utils/travelSlice";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import Header from "@/components/custom/Header";
import PageCurtain from "@/components/custom/PageCurtain";
import Shimmer from "@/components/custom/Shimmer";
import { useSmoothPageScroll } from "@/hooks/useSmoothPageScroll";
import InformationSection from "./InformationSection";
import Hotels from "./Hotels";
import DayPlan from "./DayPlan";
import Footer from "./Footer";

function ViewTrip() {
  const { tripId } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useSmoothPageScroll({ enabled: !loading, duration: 1250 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tripId]);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "AiTrip", tripId);
      const docsnap = await getDoc(docRef);
      if (docsnap.exists()) {
        dispatch(addTravelData({ data: docsnap.data() }));
      } else {
        toast("No such document");
      }
      setLoading(false);
    };

    if (tripId) {
      getData();
    }
  }, [tripId, dispatch]);

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--void)", color: "var(--bone)" }}
    >
      <PageCurtain />
      <Header />
      <main
        className="flex-1 w-full max-w-6xl mx-auto"
        style={{ padding: "0 var(--gutter)" }}
      >
        <InformationSection />
        <Hotels />
        <DayPlan />
      </main>
      <Footer />
    </div>
  );
}

export default ViewTrip;
