import { format } from "date-fns";

export const platformDateFormat = (date?: Date) =>
  date ? date.toISOString() : date;

export const monthDayAndYearFormat = (date?: Date) =>
  date ? format(date, "PPP") : date;
