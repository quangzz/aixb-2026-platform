import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge tailwind classes cleanly, removing duplicates Contextually.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
