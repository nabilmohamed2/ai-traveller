import ResCard from "./ResCard";

const DayCard = ({item, index, days}) => {

  return (
    <div key={index}>
            <h2 className="font-semibold text-lg">{item.day !== days[index - 1]?.day ? "Day "+item.day : ""}</h2>
            <h2 className="text-red-800">Best time to visit: {item.bestTime}</h2>
            <div className="flex gap-3 flex-col my-2">
              {item.plan.map((items, index) => {
                return (
                  <ResCard items={items} index={index}/>
                );
              })}
            </div>
          </div>

  )
}

export default DayCard