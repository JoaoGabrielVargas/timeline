import assignLanes from "../assignLanes"
import timelineItems from "../timelineItems"
import { dateToX, calculateWidthPerDays } from "../utils/daysUtils";

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
            <div
              key={item.id}
              style={{
                position: "absolute",
                top: 120 + laneIndex * laneHeight,
                left: dateToX(item.start, minDate),
                width: Math.max(width, minItemWidth),
                height: laneHeight - 10,
                background: "#4e79a7",
                color: "white",
                borderRadius: 8,
                padding: '8px',
                boxSizing: 'border-box',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: "nowrap",
                fontSize: 12,
              }}
              title={`${item.name} (${item.start} → ${item.end})`}
            >
              {item.name}
            </div>
          )
        }
        )
      )}
    </div>
  )
}