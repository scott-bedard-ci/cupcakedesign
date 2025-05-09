export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

// Fluid typography utility
export function fluidTypography(
  minSize: number,
  maxSize: number,
  minBreakpoint: number = breakpoints.sm,
  maxBreakpoint: number = breakpoints.xl,
): string {
  const minSizeRem = minSize / 16
  const maxSizeRem = maxSize / 16

  return `text-[${minSizeRem}rem] md:text-[calc(${minSizeRem}rem+${maxSizeRem - minSizeRem}*(100vw-${minBreakpoint}px)/(${maxBreakpoint}-${minBreakpoint}))] lg:text-[${maxSizeRem}rem]`
}

// Responsive spacing utility
export function responsiveSpacing(
  property: "margin" | "padding",
  direction: "top" | "right" | "bottom" | "left" | "x" | "y" | "all",
  mobileSize: number,
  tabletSize: number,
  desktopSize: number,
): string {
  const prop = property.charAt(0)

  let directionAbbr = ""
  if (direction === "all") {
    directionAbbr = ""
  } else if (direction === "x") {
    directionAbbr = "x"
  } else if (direction === "y") {
    directionAbbr = "y"
  } else {
    directionAbbr = direction.charAt(0)
  }

  const baseClass = `${prop}${directionAbbr}-${mobileSize}`
  const tabletClass = `md:${prop}${directionAbbr}-${tabletSize}`
  const desktopClass = `lg:${prop}${directionAbbr}-${desktopSize}`

  return `${baseClass} ${tabletClass} ${desktopClass}`
}

// Touch target utility
export function touchTargetClasses(size: "small" | "medium" | "large"): string {
  const baseClasses = {
    small: "min-w-[44px] min-h-[44px]",
    medium: "min-w-[48px] min-h-[48px]",
    large: "min-w-[52px] min-h-[52px]",
  }

  return baseClasses[size]
}

// Responsive text utility
export function responsiveText(variant: "heading" | "subheading" | "body" | "caption"): string {
  const textClasses = {
    heading: "text-xl md:text-2xl lg:text-3xl font-bold",
    subheading: "text-lg md:text-xl lg:text-2xl font-semibold",
    body: "text-sm md:text-base lg:text-lg",
    caption: "text-xs md:text-sm",
  }

  return textClasses[variant]
}
