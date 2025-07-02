import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "./HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Cupcake/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title of the hero section",
    },
    subtitle: {
      control: "text",
      description: "The highlighted subtitle",
    },
    description: {
      control: "text",
      description: "The description text below the title",
    },
    primaryButtonText: {
      control: "text",
      description: "Text for the primary action button",
    },
    primaryButtonHref: {
      control: "text",
      description: "URL for the primary action button",
    },
    secondaryButtonText: {
      control: "text",
      description: "Text for the secondary action button",
    },
    secondaryButtonHref: {
      control: "text",
      description: "URL for the secondary action button",
    },
    imageSrc: {
      control: "text",
      description: "Source URL for the hero image",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the hero image",
    },
    imagePosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the image relative to the text content",
      table: {
        defaultValue: { summary: "right" },
      },
    },
    backgroundColor: {
      control: "text",
      description: "Background color class for the hero section",
      table: {
        defaultValue: { summary: "bg-[#FFF0F5]" },
      },
    },
    highlightColor: {
      control: "text",
      description: "Color class for the highlighted subtitle",
      table: {
        defaultValue: { summary: "text-[#FF69B4]" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A flexible hero section component that can display content with an image on either the left or right side. Perfect for landing pages and promotional sections.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    title: "Delicious Cupcakes Made with",
    subtitle: "Love",
    description:
      "Handcrafted cupcakes for every occasion. Made fresh daily with the finest ingredients.",
    primaryButtonText: "Order Now",
    primaryButtonHref: "/order",
    secondaryButtonText: "View Menu",
    secondaryButtonHref: "/menu",
    imageSrc: "/cupcake-display.png",
    imageAlt: "Assorted cupcakes",
    imagePosition: "right",
  },
  parameters: {
    docs: {
      description: {
        story: "Default hero section with image on the right side.",
      },
    },
  },
};

export const ImageLeft: Story = {
  args: {
    title: "Delicious Cupcakes Made with",
    subtitle: "Love",
    description:
      "Handcrafted cupcakes for every occasion. Made fresh daily with the finest ingredients.",
    primaryButtonText: "Order Now",
    primaryButtonHref: "/order",
    secondaryButtonText: "View Menu",
    secondaryButtonHref: "/menu",
    imageSrc: "/cupcake-display.png",
    imageAlt: "Assorted cupcakes",
    imagePosition: "left",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero section with image positioned on the left side.",
      },
    },
  },
};

export const CustomColors: Story = {
  args: {
    title: "Fresh Baked Daily with",
    subtitle: "Premium Ingredients",
    description:
      "Experience the difference that quality ingredients make in every bite of our artisanal cupcakes.",
    primaryButtonText: "Shop Now",
    primaryButtonHref: "/shop",
    secondaryButtonText: "Learn More",
    secondaryButtonHref: "/about",
    imageSrc: "/cupcake-display.png",
    imageAlt: "Premium cupcakes",
    imagePosition: "right",
    backgroundColor: "bg-gradient-to-r from-blue-50 to-purple-50",
    highlightColor: "text-purple-600",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero section with custom background and highlight colors.",
      },
    },
  },
};

export const MinimalContent: Story = {
  args: {
    title: "Welcome to",
    subtitle: "Sweet Bytes",
    description: "The best cupcakes in town.",
    primaryButtonText: "Get Started",
    primaryButtonHref: "/start",
    secondaryButtonText: "Contact",
    secondaryButtonHref: "/contact",
    imageSrc: "/cupcake-display.png",
    imageAlt: "Cupcake",
    imagePosition: "left",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero section with minimal content for a cleaner look.",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    title: "Artisanal Cupcakes Crafted with",
    subtitle: "Passion and Precision",
    description:
      "Every cupcake is a masterpiece, carefully crafted using traditional techniques passed down through generations. We source the finest ingredients from local suppliers and international partners to ensure each bite delivers an unforgettable experience that will keep you coming back for more.",
    primaryButtonText: "Explore Collection",
    primaryButtonHref: "/collection",
    secondaryButtonText: "Our Story",
    secondaryButtonHref: "/story",
    imageSrc: "/cupcake-display.png",
    imageAlt: "Artisanal cupcakes showcase",
    imagePosition: "right",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Hero section with longer content to test text wrapping and layout.",
      },
    },
  },
};

export const DarkTheme: Story = {
  args: {
    title: "Midnight Treats for",
    subtitle: "Sweet Dreams",
    description:
      "Indulge in our special after-hours collection of rich, decadent cupcakes.",
    primaryButtonText: "Order Tonight",
    primaryButtonHref: "/night-order",
    secondaryButtonText: "View Collection",
    secondaryButtonHref: "/midnight-menu",
    imageSrc: "/cupcake-display.png",
    imageAlt: "Dark chocolate cupcakes",
    imagePosition: "left",
    backgroundColor: "bg-gray-900",
    highlightColor: "text-yellow-400",
  },
  parameters: {
    docs: {
      description: {
        story: "Hero section with dark theme styling.",
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
};

export const AllVariants: StoryObj<typeof HeroSection> = {
  render: () => (
    <div className="space-y-8">
      <HeroSection
        title="Image on the Right"
        subtitle="Classic Layout"
        description="This is the traditional hero section layout with image on the right."
        primaryButtonText="Primary Action"
        primaryButtonHref="/primary"
        secondaryButtonText="Secondary"
        secondaryButtonHref="/secondary"
        imageSrc="/cupcake-display.png"
        imageAlt="Cupcakes on right"
        imagePosition="right"
      />

      <HeroSection
        title="Image on the Left"
        subtitle="Reversed Layout"
        description="This layout places the image on the left side for visual variety."
        primaryButtonText="Primary Action"
        primaryButtonHref="/primary"
        secondaryButtonText="Secondary"
        secondaryButtonHref="/secondary"
        imageSrc="/cupcake-display.png"
        imageAlt="Cupcakes on left"
        imagePosition="left"
        backgroundColor="bg-blue-50"
        highlightColor="text-blue-600"
      />
    </div>
  ),
  name: "All Layout Variants",
  parameters: {
    docs: {
      description: {
        story:
          "This story showcases both image positioning options in a single view.",
      },
    },
  },
};
