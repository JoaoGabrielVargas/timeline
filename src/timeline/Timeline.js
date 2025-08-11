import { useState } from "react";

import assignLanes from "../assignLanes"
import timelineItems from "../timelineItems"
import { dateToX, calculateWidthPerDays } from "../utils/daysUtils";

import Timebar from "./Timebar";

export default function Timeline() {
  const lanes = assignLanes(timelineItems);
  const [dayWidth, setDayWidth] = useState(20);

  console.log("lanes", lanes)

  const allDates = timelineItems.flatMap(item => [item.start, item.end]);
  const minDate = new Date(Math.min(...allDates.map(d => new Date(d))));
  const maxDate = new Date(Math.max(...allDates.map(d => new Date(d))));

  const laneHeight = 40;
  const minItemWidth = 60;

  return (
    <div>
      <h1>Tasks Timeline</h1>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => setDayWidth(dw => dw + 5)}>Zoom In</button>
        <button onClick={() => setDayWidth(dw => Math.max(dw - 5, 5))}>
          Zoom Out
        </button>
      </div>
      <div
        style={{
          position: "relative",
          border: "1px solid #ccc",
          overflowX: "auto",
          whiteSpace: "nowrap",
          height: lanes.length * laneHeight + 40
        }}
      >

        {/* ARRAY FOR BACKGROUND GRID */}
        {Array.from(
          { length: Math.ceil((maxDate - minDate) / (1000 * 60 * 60 * 24)) },
          (_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: i * 20,
                top: 0,
                bottom: 0,
                width: dayWidth,
                borderLeft: "1px solid #eee"
              }}
            />
          )
        )}

        {lanes.map((lane, laneIndex) =>
          lane.map((item) => {
            const width = calculateWidthPerDays(item.end, item.start, dayWidth)
            return (
              <Timebar
                key={item.id}
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
    </div>
  )
}