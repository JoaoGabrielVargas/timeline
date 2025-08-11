import assignLanes from "../assignLanes"
import timelineItems from "../timelineItems"
import { dateToX, calculateWidthPerDays } from "../utils/daysUtils";
import Timebar from "./Timebar";

export default function Timeline() {
  const lanes = assignLanes(timelineItems);

  console.log("lanes", lanes)

  const allDates = timelineItems.flatMap(item => [item.start, item.end]);
  const minDate = new Date(Math.min(...allDates.map(d => new Date(d))));
  
  const laneHeight = 40;
  const minItemWidth = 60;

  return (
    <div>
      <h1>Tasks Timeline</h1>
      {lanes.map((lane, laneIndex) =>
        lane.map((item) => {
          const width = calculateWidthPerDays(item.end, item.start, 20)
          
          return (
            <Timebar 
              item={item} 
              laneIndex={laneIndex}
              laneHeight={laneHeight}
              width={width}
              minItemWidth={minItemWidth}
              left={dateToX(item.start, minDate)}
            />
          )
        }
        )
      )}
    </div>
  )
}