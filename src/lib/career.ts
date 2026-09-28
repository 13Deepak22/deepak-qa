/** First day as a QA engineer (year-month-day). Every "N+ years" on the site counts from here. */
export const careerStart = "2023-07-06";

const IST_OFFSET_MS = 330 * 60_000;
const WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

/** Completed years since the career start, counted on the India calendar. */
export function experienceYears(now: Date = new Date()) {
  const [startYear, startMonth, startDay] = careerStart.split("-").map(Number);
  const today = new Date(now.getTime() + IST_OFFSET_MS);
  const month = today.getUTCMonth() + 1;
  const day = today.getUTCDate();
  let years = today.getUTCFullYear() - startYear;
  if (month < startMonth || (month === startMonth && day < startDay)) years -= 1;
  return Math.max(years, 1);
}

/** "3+" style label for headlines and summaries. */
export function experienceLabel(now?: Date) {
  return `${experienceYears(now)}+`;
}

/** "three" style word for prose. */
export function experienceWords(now?: Date) {
  const years = experienceYears(now);
  return WORDS[years] ?? String(years);
}
