import ResCard from "./ResCard";

const DayCard = ({ item, index, days }) => {
  return (
    <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Day Heading */}
      <h2 className="font-bold text-lg sm:text-xl text-gray-800">
        {item.day !== days[index - 1]?.day ? "Day " + item.day : ""}
      </h2>
      <h3 className="text-sm sm:text-base text-red-800 mt-1">
        Best time to visit: {item.bestTime}
      </h3>

      {/* Plan List */}
      <div className="flex flex-col gap-4 mt-4">
        {item.plan.map((items, index) => (
          <ResCard key={index} items={items} />
        ))}
      </div>
    </div>
  );
};

export default DayCard;