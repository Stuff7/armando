export function getYearRange(startDate: Date, endDate?: Option<Date>) {
  return `${startDate.getFullYear()} - ${endDate ? endDate.getFullYear() : "Present"}`;
}

export function getYearsElapsed(start: Date, end?: Option<Date>) {
  const elapsedTime = (end || new Date()).getTime() - start.getTime();
  return Math.round(elapsedTime / 31104000000);
}
