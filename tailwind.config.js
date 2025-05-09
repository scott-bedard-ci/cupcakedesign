module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1046DF",
          foreground: "#FFFFFF",
          hover: "#0D3AB7",
          active: "#0A2E92",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#1046DF",
          hover: "#EBF0FF",
          active: "#D1DFFF",
        },
        destructive: {
          DEFAULT: "#da1e28",
          foreground: "#FFFFFF",
          hover: "#b81922",
          active: "#98151c",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  safelist: [
    // Add button-related classes to safelist to ensure they're included in production builds
    "bg-[#1046DF]",
    "text-white",
    "hover:bg-[#0D3AB7]",
    "active:bg-[#0A2E92]",
    "bg-white",
    "border-[#1046DF]",
    "text-[#1046DF]",
    "hover:bg-[#EBF0FF]",
    "active:bg-[#D1DFFF]",
    "border-[#da1e28]",
    "text-[#da1e28]",
    "hover:bg-[#fff1f1]",
    "active:bg-[#ffd7d9]",
    "disabled:bg-[#CCCCCC]",
    "disabled:text-[#666666]",
    "disabled:border-[#CCCCCC]",
  ],
  plugins: [],
}
