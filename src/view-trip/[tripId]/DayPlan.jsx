import { useSelector } from "react-redux";
import DayCard from "./DayCard";

function DayPlan() {
  const tripData = useSelector((state) => state.travel.data.tripData);

  const getDaysArray = (data) => {
    if (!data) return [];
    const itinerary = data.itinerary || data.Itinerary;
    if (Array.isArray(itinerary)) {
      return itinerary;
    }
    if (itinerary && Array.isArray(itinerary.days)) {
      return itinerary.days;
    }
    if (Array.isArray(data.days)) {
      return data.days;
    }
    return [];
  };

  const days = getDaysArray(tripData);

  return (
    <section
      data-scroll-stop="view-places"
      data-free-scroll="true"
      className="animate-editorial-rise pb-12"
      style={{
        animationDelay: "0.8s",
        paddingTop: "calc(var(--head-h) + 1.5rem)",
      }}
    >
      <div className="mb-10 border-b pb-5" style={{ borderColor: "var(--line)" }}>
        <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[var(--mute)] mb-2">
          02 / Daily Pacing
        </p>
        <h2 className="m-0 font-light tracking-[-0.028em] text-[clamp(1.65rem,3vw,2.5rem)] text-[var(--bone)]">
          Places to Visit
        </h2>
      </div>

      <div className="space-y-12">
        {days.map((item, index) => (
          <DayCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default DayPlan;
