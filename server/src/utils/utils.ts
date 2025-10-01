


export function addDays(date: Date | string | number, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days); // calendar-aware, preserves local time-of-day
  return d;
}