const plugin = require("tailwindcss/plugin")

// Create a plugin for motion preferences
const motionPlugin = plugin(({ addVariant }) => {
  addVariant("motion-safe", "@media(prefers-reduced-motion: no-preference)")
  addVariant("motion-reduce", "@media(prefers-reduced-motion: reduce)")
})

// Create a plugin for touch interactions
const touchPlugin = plugin(({ addVariant, addUtilities }) => {
  // Touch-specific variants
  addVariant("touch", "@media(hover: none) and (pointer: coarse)")
  addVariant("stylus", "@media(hover: none) and (pointer: fine)")
  addVariant("mouse", "@media(hover: hover) and (pointer: fine)")

  // Touch feedback utilities
  addUtilities({
    ".touch-feedback": {
      "@media (hover: none) and (pointer: coarse)": {
        transition: "transform 150ms ease, opacity 150ms ease",
        "&:active": {
          transform: "scale(0.98)",
          opacity: "0.9",
        },
      },
    },
  })
})

// Create a plugin for orientation
const orientationPlugin = plugin(({ addVariant }) => {
  addVariant("portrait", "@media(orientation: portrait)")
  addVariant("landscape", "@media(orientation: landscape)")
})

module.exports = {
  motionPlugin,
  touchPlugin,
  orientationPlugin,
}
