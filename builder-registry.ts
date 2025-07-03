import { type RegisteredComponent } from "@builder.io/sdk-react";
import dynamic from "next/dynamic";

// Dynamic import is REQUIRED
const HeroSection = dynamic(() =>
  import("./components/HeroSection").then((mod) => ({
    default: mod.HeroSection,
  }))
);

export const customComponents: RegisteredComponent[] = [
  {
    component: HeroSection,
    name: "HeroSection",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "Delicious Cupcakes Made with",
        required: true,
      },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Love",
        required: true,
      },
      {
        name: "description",
        type: "string",
        defaultValue:
          "Handcrafted cupcakes for every occasion. Made fresh daily with the finest ingredients.",
        required: true,
      },
      {
        name: "primaryButtonText",
        type: "string",
        defaultValue: "Order Now",
        required: true,
      },
      {
        name: "primaryButtonHref",
        type: "string",
        defaultValue: "/order",
        required: true,
      },
      {
        name: "secondaryButtonText",
        type: "string",
        defaultValue: "View Menu",
        required: true,
      },
      {
        name: "secondaryButtonHref",
        type: "string",
        defaultValue: "/menu",
        required: true,
      },
      {
        name: "imageSrc",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        defaultValue: "/cupcake-display.png",
        required: true,
      },
      {
        name: "imageAlt",
        type: "string",
        defaultValue: "Assorted cupcakes",
        required: true,
      },
      {
        name: "imagePosition",
        type: "string",
        enum: ["left", "right"],
        defaultValue: "right",
        helperText:
          "Choose whether to display the image on the left or right side",
      },
      {
        name: "backgroundColor",
        type: "string",
        defaultValue: "bg-[#FFF0F5]",
        helperText: "Tailwind CSS background color class",
      },
      {
        name: "highlightColor",
        type: "string",
        defaultValue: "text-[#FF69B4]",
        helperText: "Tailwind CSS text color class for the subtitle highlight",
      },
    ],
    canHaveChildren: false,
  },
];
