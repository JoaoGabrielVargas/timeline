export const calculateWidthPerDays = (dateEnd, dateStart, dayWidth) => {
  const width = ((new Date(dateEnd) - new Date(dateStart)) /
    (1000 * 60 * 60 * 24) +
    1) * dayWidth;
  
  return width;
}

export const dateToX = (date, minDate, dayWidth) => ((new Date(date) - minDate) / (1000 * 60 * 60 * 24)) * dayWidth;