const Timebar = ({item, laneIndex, laneHeight, left, width, minItemWidth}) => {
  
  return (
    <div
      style={{
        position: "absolute",
        top: 15 + laneIndex * laneHeight,
        left: left,
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

export default Timebar;