const { motionPlugin, touchPlugin, orientationPlugin } = require("./lib/tailwind-plugins")
const { colors } = require("./lib/designTokens")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base shadcn colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Cupcake design system colors
        "alert-error": colors.error.DEFAULT,
        "alert-error-background": colors.error.light,
        "alert-error-foreground": colors.foreground.DEFAULT,

        "alert-info": colors.info.DEFAULT,
        "alert-info-background": colors.info.light,
        "alert-info-foreground": colors.foreground.DEFAULT,

        "alert-success": colors.success.DEFAULT,
        "alert-success-background": colors.success.light,
        "alert-success-foreground": colors.foreground.DEFAULT,

        "alert-warning": colors.warning.DEFAULT,
        "alert-warning-background": colors.warning.light,
        "alert-warning-foreground": colors.foreground.DEFAULT,

        // Avatar colors
        "avatar-text": colors.avatar.text,
        "avatar-placeholder": colors.avatar.placeholder,
        "avatar-ring": colors.avatar.ring,
        "avatar-tooltip-background": colors.avatar.tooltip.background,
        "avatar-tooltip-text": colors.avatar.tooltip.text,
        "avatar-remainder-background": colors.avatar.remainder.background,
        "avatar-remainder-text": colors.avatar.remainder.text,
        "avatar-background-default": colors.avatar.background.default,
        "avatar-background-red": colors.avatar.background.red,
        "avatar-background-orange": colors.avatar.background.orange,
        "avatar-background-yellow": colors.avatar.background.yellow,
        "avatar-background-lime": colors.avatar.background.lime,
        "avatar-background-cyan": colors.avatar.background.cyan,
        "avatar-background-blue": colors.avatar.background.blue,
        "avatar-background-purple": colors.avatar.background.purple,
        "avatar-background-pink": colors.avatar.background.pink,
        "avatar-background-rose": colors.avatar.background.rose,
        "avatar-background-green": colors.avatar.background.green,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      minHeight: {
        touch: "44px",
        "touch-lg": "48px",
      },
      minWidth: {
        touch: "44px",
        "touch-lg": "48px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), motionPlugin, touchPlugin, orientationPlugin],
}
