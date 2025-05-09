import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonGroup } from "./Button"
import { Search, ArrowRight } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Cupcake/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "The visual style of the button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the button",
      table: {
        defaultValue: { summary: "large" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        defaultValue: { summary: false },
      },
    },
    leftIcon: {
      control: { disable: true },
      description: "Icon to display on the left side of the button",
    },
    rightIcon: {
      control: { disable: true },
      description: "Icon to display on the right side of the button",
    },
    iconOnly: {
      control: "boolean",
      description: "Whether the button should only display an icon",
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      control: "text",
      description: "The content of the button",
    },
    onClick: {
      action: "clicked",
      description: "Function called when the button is clicked",
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
}

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
}

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
}

export const Medium: Story = {
  args: {
    size: "medium",
    children: "Medium Button",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
}

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Search />,
    children: "Button with Left Icon",
  },
}

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ArrowRight />,
    children: "Button with Right Icon",
  },
}

export const WithBothIcons: Story = {
  args: {
    leftIcon: <Search />,
    rightIcon: <ArrowRight />,
    children: "Button with Both Icons",
  },
}

export const IconOnly: Story = {
  args: {
    leftIcon: <Search />,
    iconOnly: true,
    "aria-label": "Search",
  },
}

// Button Group stories
export const ButtonGroupHorizontal: StoryObj<typeof ButtonGroup> = {
  render: () => (
    <ButtonGroup>
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
    </ButtonGroup>
  ),
  name: "Button Group (Horizontal)",
  parameters: {
    docs: {
      description: {
        story: "Button groups allow you to group related actions together. By default, they are arranged horizontally.",
      },
    },
  },
}

export const ButtonGroupVertical: StoryObj<typeof ButtonGroup> = {
  render: () => (
    <ButtonGroup vertical>
      <Button variant="primary">Primary Action</Button>
      <Button variant="secondary">Secondary Action</Button>
      <Button variant="tertiary">Tertiary Action</Button>
    </ButtonGroup>
  ),
  name: "Button Group (Vertical)",
  parameters: {
    docs: {
      description: {
        story: "Button groups can also be arranged vertically using the `vertical` prop.",
      },
    },
  },
}

export const AllVariants: StoryObj<typeof Button> = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Primary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="primary" size="medium">
            Medium
          </Button>
          <Button variant="primary" size="large">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Secondary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary" size="small">
            Small
          </Button>
          <Button variant="secondary" size="medium">
            Medium
          </Button>
          <Button variant="secondary" size="large">
            Large
          </Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Tertiary Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="tertiary" size="small">
            Small
          </Button>
          <Button variant="tertiary" size="medium">
            Medium
          </Button>
          <Button variant="tertiary" size="large">
            Large
          </Button>
          <Button variant="tertiary" disabled>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
  name: "All Button Variants",
  parameters: {
    docs: {
      description: {
        story: "This story showcases all button variants, sizes, and states in a single view.",
      },
    },
  },
}
