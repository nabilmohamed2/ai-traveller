import ResCard from "./ResCard";

const DayCard = ({ item, index, days }) => {
  return (
    <div key={index}>
      {/* Day Heading */}
      <h2 className="font-semibold text-base sm:text-lg">
        {item.day !== days[index - 1]?.day ? "Day " + item.day : ""}
      </h2>
      <h2 className="text-red-800 text-sm sm:text-base">
        Best time to visit: {item.bestTime}
      </h2>

      {/* Plan List */}
      <div className="flex gap-3 flex-col my-2">
        {item.plan.map((items, index) => {
          return (
            <ResCard
              items={{
                ...items,
                PlaceDetails: items.PlaceDetails.length > 100
                  ? items.PlaceDetails.slice(0, 100) + "..."
                  : items.PlaceDetails,
              }}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayCard;