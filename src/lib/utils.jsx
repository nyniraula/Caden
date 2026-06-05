import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function mergeClass(fixed, extra) {
  return twMerge(clsx(fixed, extra));
}
