import type { Meta, StoryObj } from "@storybook/react"
import { Icon } from "./Icon"
import { Search, Bell, User, Settings, Mail } from "lucide-react"

const meta: Meta<typeof Icon> = {
  title: "Cupcake/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { disable: true },
      description: "The icon to display",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the icon",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    position: {
      control: "select",
      options: ["left", "right", undefined],
      description: "The position of the icon (adds appropriate spacing)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const SmallIcon: Story = {
  args: {
    icon: <Search />,
    size: "small",
  },
  name: "Small Size",
}

export const MediumIcon: Story = {
  args: {
    icon: <Bell />,
    size: "medium",
  },
  name: "Medium Size",
}

export const LargeIcon: Story = {
  args: {
    icon: <User />,
    size: "large",
  },
  name: "Large Size",
}

export const LeftPositionIcon: Story = {
  args: {
    icon: <Search />,
    position: "left",
  },
  name: "Left Position",
  parameters: {
    docs: {
      description: {
        story: "When used with position='left', the icon adds right margin for proper spacing.",
      },
    },
  },
}

export const RightPositionIcon: Story = {
  args: {
    icon: <Search />,
    position: "right",
  },
  name: "Right Position",
  parameters: {
    docs: {
      description: {
        story: "When used with position='right', the icon adds left margin for proper spacing.",
      },
    },
  },
}

export const CustomClassIcon: Story = {
  args: {
    icon: <Settings />,
    className: "text-[#1046DF]",
  },
  name: "With Custom Class",
  parameters: {
    docs: {
      description: {
        story: "Icons can be styled with custom classes.",
      },
    },
  },
}

export const AllIcons: StoryObj<typeof Icon> = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Icon Sizes</h3>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <Icon icon={<Search />} size="small" />
            <span className="mt-2 text-sm">Small</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon icon={<Search />} size="medium" />
            <span className="mt-2 text-sm">Medium</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon icon={<Search />} size="large" />
            <span className="mt-2 text-sm">Large</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Icon Positions</h3>
        <div className="flex items-center gap-8">
          <div className="flex items-center border border-gray-300 rounded p-2">
            <Icon icon={<Search />} position="left" />
            <span>Left Position</span>
          </div>
          <div className="flex items-center border border-gray-300 rounded p-2">
            <span>Right Position</span>
            <Icon icon={<Search />} position="right" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Icon Examples</h3>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <Icon icon={<Search />} size="medium" />
            <span className="mt-2 text-sm">Search</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon icon={<Bell />} size="medium" />
            <span className="mt-2 text-sm">Bell</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon icon={<User />} size="medium" />
            <span className="mt-2 text-sm">User</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon icon={<Settings />} size="medium" />
            <span className="mt-2 text-sm">Settings</span>
          </div>
          <div className="flex flex-col items-center">
            <Icon icon={<Mail />} size="medium" />
            <span className="mt-2 text-sm">Mail</span>
          </div>
        </div>
      </div>
    </div>
  ),
  name: "All Icon Variants",
  parameters: {
    docs: {
      description: {
        story: "This story showcases all icon sizes and positions in a single view.",
      },
    },
  },
}
