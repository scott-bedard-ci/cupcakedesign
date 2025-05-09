module.exports = {
  presets: [require("../tailwind.config.js")],
  content: [
    "../components/**/*.{js,ts,jsx,tsx}",
    "../app/**/*.{js,ts,jsx,tsx}",
    "../lib/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
}
