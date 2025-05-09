import type { Size } from "./types"

/**
 * Get the appropriate classes for a given size
 * @param size The size to get classes for
 * @param classes An object mapping sizes to classes
 * @returns The classes for the given size
 */
export function getSizeClasses<T extends Record<Size, string>>(size: Size, classes: T): string {
  return classes[size]
}

/**
 * Get the appropriate size value for a given size
 * @param size The size to get a value for
 * @param values An object mapping sizes to values
 * @returns The value for the given size
 */
export function getSizeValue<T>(size: Size, values: Record<Size, T>): T {
  return values[size]
}

/**
 * Size mappings for common component properties
 */
export const sizeMappings = {
  padding: {
    small: "p-1.5",
    medium: "p-2",
    large: "p-2.5",
  },
  fontSize: {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  },
  iconSize: {
    small: 16,
    medium: 20,
    large: 24,
  },
  touchTarget: {
    small: "min-h-touch min-w-touch",
    medium: "min-h-touch min-w-touch",
    large: "min-h-touch-lg min-w-touch-lg",
  },
}
