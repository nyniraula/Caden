import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function mergeClass(fixed: string, extra: string) {
  return twMerge(clsx(fixed, extra));
}

export function getCurrencySymbol(currency: string): string {
  switch (currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "NPR":
      return "रु";
    default:
      return "$";
  }
}
