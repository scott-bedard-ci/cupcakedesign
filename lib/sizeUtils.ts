import type { Size } from "./types"

export const getSizeClasses = (size: Size, sizeMap: Record<Size, string>): string => {
  return sizeMap[size] || sizeMap.medium
}
