import { create } from "@storybook/theming/create"

export default create({
  base: "light",
  brandTitle: "Cupcake Design System",
  brandUrl: "/",
  brandImage: "/placeholder.svg?height=30&width=200&text=Cupcake+Design+System",
  brandTarget: "_self",

  // UI
  appBg: "#F8F9FC",
  appContentBg: "#FFFFFF",
  appBorderColor: "#E2E8F0",
  appBorderRadius: 6,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#1A202C",
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#718096",
  barSelectedColor: "#1046DF",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#CBD5E0",
  inputTextColor: "#1A202C",
  inputBorderRadius: 4,
})
