import ResCard from "./ResCard";

const DayCard = ({ item, index, days }) => {
  const showDayHeader = item.day !== days[index - 1]?.day;

  return (
    <div key={index} className={showDayHeader ? "mt-6 border-l-2 border-indigo-100 pl-6 ml-2" : "pl-6 ml-2"}>
      {/* Day Heading */}
      {showDayHeader && (
        <div className="relative">
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-md"></div>
          <h3 className="font-extrabold text-xl text-zinc-900 tracking-tight flex items-center gap-2">
            Day {item.day}
          </h3>
          <p className="text-zinc-500 text-xs sm:text-sm mt-1 mb-4 flex items-center gap-1.5">
            🌅 Recommended Time: <span className="font-semibold text-indigo-600">{item.bestTime}</span>
          </p>
        </div>
      )}

      {/* Plan List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-4">
        {item.plan.map((items, idx) => {
          return (
            <ResCard
              items={{
                ...items,
                PlaceDetails: items.PlaceDetails.length > 120
                  ? items.PlaceDetails.slice(0, 120) + "..."
                  : items.PlaceDetails,
              }}
              key={idx}
              index={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DayCard;