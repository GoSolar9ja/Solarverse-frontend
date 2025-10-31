import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { USER_TYPE } from "../constants";

// const twMergeCustom = extendTailwindMerge({
//   extend: {
//     classGroups: {
//       // ✅ text is an existing group — we’re adding to it
//       "font-size": [
//         // just raw classes here
//         "text-[var(--text-h1)]",
//         "text-[var(--text-h2)]",
//         "text-[var(--text-h3)]",
//         "text-[var(--text-h4)]",
//         "text-[var(--text-body1)]",
//         "text-[var(--text-body2)]",
//       ],
//     },
//   },
// });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const platformDateFormat = (date?: Date) =>
  date ? date.toISOString() : date;

export const monthDayAndYearFormat = (date?: Date) =>
  date ? format(date, "PPP") : date;

export const fileToBase64 = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const resolveTermsHref = (href: string) => {
  if (typeof window !== "undefined") {
    return href
      .replace(window.location.protocol + "//" + window.location.hostname, "")
      .replace(`:${window.location.port}`, "");
  }
  return href;
};

export const formatPhoneNumber = (phoneNumber: string) => {
  return (
    "+234" +
    (phoneNumber.length > 10 ? phoneNumber.replace(/^\d/, "") : phoneNumber)
  );
};

export const routeManager = (userType?: USER_TYPE) => {
  if (userType === USER_TYPE.HOME_OWNER) return "/home-owner";
  if (userType === USER_TYPE.INSTALLER) return "/installer";
  return "";
};
