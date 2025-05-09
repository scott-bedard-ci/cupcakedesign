export type ColorIntent = "primary" | "secondary" | "success" | "error" | "warning" | "info"
export type ColorVariant = "solid" | "outline" | "ghost"
export type ColorState = "default" | "hover" | "active" | "disabled"

export const colorIntents: Record<
  ColorIntent,
  {
    base: string
    light: string
    dark: string
    darker: string
    text: string
    border: string
  }
> = {
  primary: {
    base: "bg-[#1046DF]",
    light: "bg-[#EBF0FF]",
    dark: "bg-[#0D3AB7]",
    darker: "bg-[#0A2E92]",
    text: "text-white",
    border: "border-[#1046DF]",
  },
  secondary: {
    base: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-100",
    darker: "bg-gray-200",
    text: "text-gray-800",
    border: "border-gray-300",
  },
  success: {
    base: "bg-[#24a148]",
    light: "bg-[#24a148]/10",
    dark: "bg-[#1e8a3c]",
    darker: "bg-[#187432]",
    text: "text-white",
    border: "border-[#24a148]",
  },
  error: {
    base: "bg-[#da1e28]",
    light: "bg-[#da1e28]/10",
    dark: "bg-[#b81922]",
    darker: "bg-[#98151c]",
    text: "text-white",
    border: "border-[#da1e28]",
  },
  warning: {
    base: "bg-[#f1c21b]",
    light: "bg-[#f1c21b]/10",
    dark: "bg-[#d9af18]",
    darker: "bg-[#b89310]",
    text: "text-black",
    border: "border-[#f1c21b]",
  },
  info: {
    base: "bg-[#0043ce]",
    light: "bg-[#0043ce]/10",
    dark: "bg-[#0036a5]",
    darker: "bg-[#002a80]",
    text: "text-white",
    border: "border-[#0043ce]",
  },
}

export function getColorClasses(
  intent: ColorIntent,
  variant: ColorVariant = "solid",
  state: ColorState = "default",
): string {
  const colors = colorIntents[intent]

  if (variant === "solid") {
    if (state === "disabled") {
      return "bg-[#CCCCCC] text-[#666666]"
    }

    return `${colors.base} ${colors.text} ${
      state === "hover" ? `hover:${colors.dark}` : state === "active" ? `active:${colors.darker}` : ""
    }`
  }

  if (variant === "outline") {
    if (state === "disabled") {
      return "bg-white border border-[#CCCCCC] text-[#666666]"
    }

    return `bg-white border ${colors.border} text-[${intent === "secondary" ? "#1046DF" : intent}] ${
      state === "hover" ? `hover:${colors.light}` : state === "active" ? `active:${colors.dark}` : ""
    }`
  }

  // Ghost variant
  if (state === "disabled") {
    return "text-[#666666]"
  }

  return `bg-transparent text-[${intent}] ${
    state === "hover" ? `hover:${colors.light}` : state === "active" ? `active:${colors.dark}` : ""
  }`
}
