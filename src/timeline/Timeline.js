import assignLanes from "../assignLanes"
import timelineItems from "../timelineItems"

export default function Timeline() {
  const lanes = assignLanes(timelineItems);


  return (
    <div>
      <h1>Timeline</h1>
      {lanes.map((lane, laneIndex) => 
        lanes.map((item, itemIndex) => <div><p>{`item ${itemIndex} in lane ${laneIndex}`}</p></div>)
      )}
    </div>
  )
}