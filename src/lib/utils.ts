import { clsx, type ClassValue } from "clsx"

/**
 * Merge class names with proper Tailwind CSS handling
 * @param classes - Class names to merge
 * @returns Merged class name string
 */
export function cn(...classes: ClassValue[]) {
  return clsx(classes)
}
