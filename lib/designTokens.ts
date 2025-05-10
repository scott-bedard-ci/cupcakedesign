export const colors = {
  // Brand colors
  primary: {
    DEFAULT: "#1046DF",
    light: "#EBF0FF",
    dark: "#0D3AB7",
    darker: "#0A2E92",
    text: "#FFFFFF",
  },
  secondary: {
    DEFAULT: "#FFFFFF",
    light: "#F8F9FC",
    dark: "#F1F5F9",
    darker: "#E2E8F0",
    text: "#1046DF",
  },

  // Semantic colors
  success: {
    DEFAULT: "#24a148",
    light: "#defbe6",
    dark: "#1e8a3c",
    darker: "#187432",
    text: "#FFFFFF",
  },
  error: {
    DEFAULT: "#da1e28",
    light: "#fff1f1",
    dark: "#b81922",
    darker: "#98151c",
    text: "#FFFFFF",
  },
  warning: {
    DEFAULT: "#f1c21b",
    light: "#fff8e1",
    dark: "#d9af18",
    darker: "#b89310",
    text: "#171717",
  },
  info: {
    DEFAULT: "#0043ce",
    light: "#edf5ff",
    dark: "#0036a5",
    darker: "#002a80",
    text: "#FFFFFF",
  },

  // UI colors
  background: {
    DEFAULT: "#FFFFFF",
    subtle: "#F8F9FC",
    muted: "#F1F5F9",
    disabled: "#E2E8F0",
  },
  foreground: {
    DEFAULT: "#1A202C",
    subtle: "#4A5568",
    muted: "#718096",
    disabled: "#A0AEC0",
  },
  border: {
    DEFAULT: "#E2E8F0",
    subtle: "#EDF2F7",
    focus: "#1046DF",
    disabled: "#CBD5E0",
  },

  // Alert-specific colors
  alert: {
    error: {
      DEFAULT: "#da1e28",
      background: "#fff1f1",
      foreground: "#171717",
    },
    info: {
      DEFAULT: "#0043ce",
      background: "#edf5ff",
      foreground: "#171717",
    },
    success: {
      DEFAULT: "#24a148",
      background: "#defbe6",
      foreground: "#171717",
    },
    warning: {
      DEFAULT: "#f1c21b",
      background: "#fff8e1",
      foreground: "#171717",
    },
  },

  // Avatar-specific colors
  avatar: {
    background: {
      default: "#e5e5e5",
      red: "#FFD6CC",
      orange: "#FFE8CC",
      yellow: "#FFFBCC",
      lime: "#E3FFCC",
      cyan: "#CCF5FF",
      blue: "#CCD9FF",
      purple: "#E5CCFF",
      pink: "#FFCCF8",
      rose: "#FFCCD6",
      green: "#D1F7C4",
    },
    text: "#181818",
    placeholder: "#6b7280",
    ring: "#FFFFFF",
    tooltip: {
      background: "#1f2937",
      text: "#FFFFFF",
    },
    remainder: {
      background: "#E3E3E3",
      text: "#181818",
    },
  },
}

// Spacing tokens
export const spacing = {
  0: "0",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
}

// Typography tokens
export const typography = {
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
}

// Border radius tokens
export const radii = {
  none: "0",
  sm: "0.125rem", // 2px
  DEFAULT: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
}

// Shadow tokens
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
}

// Z-index tokens
export const zIndices = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
  auto: "auto",
  dropdown: "1000",
  sticky: "1100",
  fixed: "1200",
  drawer: "1300",
  modal: "1400",
  popover: "1500",
  toast: "1600",
  tooltip: "1700",
}

// Animation tokens
export const animations = {
  durations: {
    fastest: "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    slowest: "500ms",
  },
  easings: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
}

// Breakpoint tokens
export const breakpoints = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Touch target tokens
export const touchTargets = {
  sm: "44px", // Minimum recommended size
  md: "48px", // Comfortable size
  lg: "56px", // Large, very touchable
}

// Component-specific tokens
export const componentTokens = {
  // Button tokens
  button: {
    // Size configuration
    sizes: {
      small: {
        padding: "py-1.5 px-3",
        fontSize: "text-sm",
        iconSize: "w-4 h-4",
        iconPadding: "p-1.5",
        touchTarget: "min-h-touch-sm min-w-touch-sm",
        gap: "gap-1.5",
        rounded: "rounded",
      },
      medium: {
        padding: "py-2 px-4",
        fontSize: "text-base",
        iconSize: "w-5 h-5",
        iconPadding: "p-2",
        touchTarget: "min-h-touch-md min-w-touch-md",
        gap: "gap-2",
        rounded: "rounded-md",
      },
      large: {
        padding: "py-2.5 px-5",
        fontSize: "text-base",
        iconSize: "w-5 h-5",
        iconPadding: "p-2.5",
        touchTarget: "min-h-touch-lg min-w-touch-lg",
        gap: "gap-2.5",
        rounded: "rounded-md",
      },
    },

    // Variant configuration
    variants: {
      primary: {
        base: "bg-primary text-white border border-transparent",
        hover: "hover:bg-primary-dark",
        active: "active:bg-primary-darker",
        disabled: "disabled:bg-background-disabled disabled:text-foreground-disabled disabled:border-transparent",
        focus: "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      },
      secondary: {
        base: "bg-white border border-primary text-primary",
        hover: "hover:bg-primary-light",
        active: "active:bg-primary-light/70",
        disabled: "disabled:bg-background-disabled disabled:text-foreground-disabled disabled:border-border-disabled",
        focus: "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      },
      tertiary: {
        base: "bg-white border border-error text-error",
        hover: "hover:bg-error-light",
        active: "active:bg-error-light/70",
        disabled: "disabled:bg-background-disabled disabled:text-foreground-disabled disabled:border-border-disabled",
        focus: "focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2",
      },
    },
  },

  // Alert tokens
  alert: {
    variants: {
      error: {
        container: "border-alert-error bg-alert-error-background text-alert-error-foreground",
        icon: "text-alert-error",
      },
      informational: {
        container: "border-alert-info bg-alert-info-background text-alert-info-foreground",
        icon: "text-alert-info",
      },
      success: {
        container: "border-alert-success bg-alert-success-background text-alert-success-foreground",
        icon: "text-alert-success",
      },
      warning: {
        container: "border-alert-warning bg-alert-warning-background text-alert-warning-foreground",
        icon: "text-alert-warning",
      },
    },
  },
}
