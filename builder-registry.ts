import { type RegisteredComponent } from "@builder.io/react";
import dynamic from "next/dynamic";

// Dynamic imports are REQUIRED for Builder.io components
const HeroSection = dynamic(() =>
  import("./components/HeroSection").then((mod) => ({
    default: mod.HeroSection,
  }))
);

const Button = dynamic(() =>
  import("./components/Button").then((mod) => ({
    default: mod.Button,
  }))
);

const ButtonGroup = dynamic(() =>
  import("./components/Button").then((mod) => ({
    default: mod.ButtonGroup,
  }))
);

const Alert = dynamic(() =>
  import("./components/Alert").then((mod) => ({
    default: mod.Alert,
  }))
);

const Avatar = dynamic(() =>
  import("./components/Avatar").then((mod) => ({
    default: mod.Avatar,
  }))
);

const AvatarGroup = dynamic(() =>
  import("./components/Avatar").then((mod) => ({
    default: mod.AvatarGroup,
  }))
);

const CupcakeCard = dynamic(() =>
  import("./components/CupcakeCard").then((mod) => ({
    default: mod.CupcakeCard,
  }))
);

const TestimonialCard = dynamic(() =>
  import("./components/TestimonialCard").then((mod) => ({
    default: mod.TestimonialCard,
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
  
  // Button Component
  {
    component: Button,
    name: "Button",
    inputs: [
      {
        name: "children",
        type: "string",
        defaultValue: "Click me",
        required: true,
      },
      {
        name: "variant",
        type: "string",
        enum: ["primary", "secondary", "tertiary"],
        defaultValue: "primary",
        helperText: "The visual style of the button",
      },
      {
        name: "size",
        type: "string",
        enum: ["small", "medium", "large"],
        defaultValue: "large",
        helperText: "The size of the button",
      },
      {
        name: "disabled",
        type: "boolean",
        defaultValue: false,
        helperText: "Whether the button is disabled",
      },
      {
        name: "iconOnly",
        type: "boolean",
        defaultValue: false,
        helperText: "Whether the button should only display an icon",
      },
      {
        name: "touchFeedback",
        type: "boolean",
        defaultValue: true,
        helperText: "Enable touch feedback for mobile devices",
      },
    ],
    canHaveChildren: false,
    defaultStyles: {
      display: "inline-flex",
    },
  },

  // ButtonGroup Component
  {
    component: ButtonGroup,
    name: "ButtonGroup",
    inputs: [
      {
        name: "vertical",
        type: "boolean",
        defaultValue: false,
        helperText: "Whether the buttons should be stacked vertically",
      },
    ],
    canHaveChildren: true,
    childRequirements: {
      message: "You can only put Button components in a ButtonGroup",
    },
    defaultStyles: {
      display: "flex",
      gap: "12px",
    },
  },

  // Alert Component
  {
    component: Alert,
    name: "Alert",
    inputs: [
      {
        name: "variant",
        type: "string",
        enum: ["error", "informational", "success", "warning"],
        defaultValue: "informational",
        helperText: "The visual style of the alert",
      },
      {
        name: "title",
        type: "string",
        defaultValue: "Alert Title",
        helperText: "The title of the alert",
      },
      {
        name: "children",
        type: "string",
        defaultValue: "This is an alert message.",
        helperText: "The content of the alert",
      },
      {
        name: "showIcon",
        type: "boolean",
        defaultValue: true,
        helperText: "Whether to show the icon",
      },
      {
        name: "showClose",
        type: "boolean",
        defaultValue: true,
        helperText: "Whether to show the close button",
      },
      {
        name: "fill",
        type: "boolean",
        defaultValue: true,
        helperText: "Whether the alert should fill the width of its container",
      },
    ],
    canHaveChildren: false,
    defaultStyles: {
      marginBottom: "16px",
    },
  },

  // Avatar Component
  {
    component: Avatar,
    name: "Avatar",
    inputs: [
      {
        name: "src",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        helperText: "The source URL for the avatar image",
      },
      {
        name: "identifier",
        type: "string",
        defaultValue: "John Doe",
        helperText: "The user identifier (used for initials if no image)",
      },
      {
        name: "alt",
        type: "string",
        defaultValue: "Avatar",
        helperText: "Alt text for the avatar image",
      },
      {
        name: "size",
        type: "string",
        enum: ["small", "medium", "large"],
        defaultValue: "small",
        helperText: "The size of the avatar",
      },
      {
        name: "touchFeedback",
        type: "boolean",
        defaultValue: true,
        helperText: "Enable touch feedback for mobile devices",
      },
    ],
    canHaveChildren: false,
    defaultStyles: {
      display: "inline-flex",
    },
  },

  // AvatarGroup Component
  {
    component: AvatarGroup,
    name: "AvatarGroup",
    inputs: [
      {
        name: "max",
        type: "number",
        helperText: "The maximum number of avatars to display",
      },
    ],
    canHaveChildren: true,
    childRequirements: {
      message: "You can only put Avatar components in an AvatarGroup",
    },
    defaultStyles: {
      display: "flex",
    },
  },

  // CupcakeCard Component
  {
    component: CupcakeCard,
    name: "CupcakeCard",
    inputs: [
      {
        name: "cupcake",
        type: "object",
        subFields: [
          {
            name: "id",
            type: "number",
            defaultValue: 1,
          },
          {
            name: "name",
            type: "string",
            defaultValue: "Vanilla Cupcake",
            required: true,
          },
          {
            name: "description",
            type: "string",
            defaultValue: "A classic vanilla cupcake with buttercream frosting",
            required: true,
          },
          {
            name: "price",
            type: "number",
            defaultValue: 4.99,
            required: true,
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
            defaultValue: "/vanilla-cupcake.png",
            required: true,
          },
        ],
        defaultValue: {
          id: 1,
          name: "Vanilla Cupcake",
          description: "A classic vanilla cupcake with buttercream frosting",
          price: 4.99,
          image: "/vanilla-cupcake.png",
        },
      },
    ],
    canHaveChildren: false,
    defaultStyles: {
      marginBottom: "16px",
    },
  },

  // TestimonialCard Component
  {
    component: TestimonialCard,
    name: "TestimonialCard",
    inputs: [
      {
        name: "testimonial",
        type: "object",
        subFields: [
          {
            name: "id",
            type: "number",
            defaultValue: 1,
          },
          {
            name: "name",
            type: "string",
            defaultValue: "Sarah Johnson",
            required: true,
          },
          {
            name: "quote",
            type: "string",
            defaultValue: "The best cupcakes I've ever had! The flavors are amazing and the quality is outstanding.",
            required: true,
          },
          {
            name: "avatar",
            type: "string",
            defaultValue: "Sarah Johnson",
            helperText: "User identifier for avatar (name or email)",
          },
        ],
        defaultValue: {
          id: 1,
          name: "Sarah Johnson",
          quote: "The best cupcakes I've ever had! The flavors are amazing and the quality is outstanding.",
          avatar: "Sarah Johnson",
        },
      },
    ],
    canHaveChildren: false,
    defaultStyles: {
      marginBottom: "16px",
    },
  },
];
