import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export function mergeClass(fixed: string, extra: string) {
  return twMerge(clsx(fixed, extra));
}
