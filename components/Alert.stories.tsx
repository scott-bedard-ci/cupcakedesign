import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "./Alert"
import { Info } from "lucide-react"

const meta: Meta<typeof Alert> = {
  title: "Cupcake/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["error", "informational", "success", "warning"],
      description: "The visual style of the alert",
      table: {
        defaultValue: { summary: "error" },
      },
    },
    title: {
      control: "text",
      description: "The title of the alert",
    },
    children: {
      control: "text",
      description: "The content of the alert",
    },
    showIcon: {
      control: "boolean",
      description: "Whether to show the icon",
      table: {
        defaultValue: { summary: true },
      },
    },
    showClose: {
      control: "boolean",
      description: "Whether to show the close button",
      table: {
        defaultValue: { summary: true },
      },
    },
    onDismiss: {
      action: "dismissed",
      description: "Function called when the alert is dismissed",
    },
    icon: {
      control: { disable: true },
      description: "Custom icon to display in the alert",
    },
    fill: {
      control: "boolean",
      description: "Whether the alert should fill the width of its container",
      table: {
        defaultValue: { summary: true },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "The alert component sits within the family of feedback, and can be used in forms, inline errors or even success.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    children: "There was an error processing your request. Please try again later.",
    showIcon: true,
    showClose: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Error alerts are used to communicate a problem that has occurred.",
      },
    },
  },
}

export const Informational: Story = {
  args: {
    variant: "informational",
    title: "Information",
    children: "Your account will be updated in 24 hours.",
    showIcon: true,
    showClose: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Informational alerts are used to communicate information that is not critical.",
      },
    },
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    children: "Your changes have been saved successfully.",
    showIcon: true,
    showClose: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Success alerts are used to communicate that an action was completed successfully.",
      },
    },
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "This action cannot be undone. Please make sure you want to proceed.",
    showIcon: true,
    showClose: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Warning alerts are used to communicate caution or a potential issue that doesn't block the user.",
      },
    },
  },
}

export const WithoutIcon: Story = {
  args: {
    variant: "error",
    title: "No Icon",
    children: "This alert doesn't display an icon.",
    showIcon: false,
    showClose: true,
  },
  name: "Without Icon",
  parameters: {
    docs: {
      description: {
        story: "Alerts can be displayed without an icon for a simpler appearance.",
      },
    },
  },
}

export const WithoutTitle: Story = {
  args: {
    variant: "error",
    children: "There was an error processing your request.",
    showIcon: true,
    showClose: true,
  },
  name: "Without Title",
  parameters: {
    docs: {
      description: {
        story: "Alerts can be displayed without a title for simpler messages.",
      },
    },
  },
}

export const WithoutClose: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    children: "This action cannot be undone.",
    showIcon: true,
    showClose: false,
  },
  name: "Without Close Button",
  parameters: {
    docs: {
      description: {
        story: "Alerts can be configured without a close button when the message must be acknowledged.",
      },
    },
  },
}

export const WithoutMessage: Story = {
  args: {
    variant: "success",
    title: "Success",
    showIcon: true,
    showClose: true,
  },
  name: "Without Message",
  parameters: {
    docs: {
      description: {
        story: "Alerts can be displayed with just a title for very simple messages.",
      },
    },
  },
}

export const CustomIcon: Story = {
  args: {
    variant: "informational",
    title: "Custom Icon",
    children: "This alert uses a custom icon instead of the default one.",
    icon: <Info className="w-5 h-5 text-[#0043ce]" />,
    showIcon: true,
    showClose: true,
  },
  name: "With Custom Icon",
  parameters: {
    docs: {
      description: {
        story: "You can provide a custom icon to replace the default icon for any alert variant.",
      },
    },
  },
}

export const InlineWidth: Story = {
  args: {
    variant: "error",
    title: "Inline Width",
    children: "This alert doesn't fill its container width.",
    showIcon: true,
    showClose: true,
    fill: false,
  },
  name: "Inline Width",
  parameters: {
    docs: {
      description: {
        story: "Alerts can be set to not fill the width of their container, taking only the space they need.",
      },
    },
  },
}

export const MinimalAlert: Story = {
  args: {
    variant: "error",
    children: "There was an error processing your request.",
    showIcon: true,
    showClose: false,
  },
  name: "Minimal Alert",
  parameters: {
    docs: {
      description: {
        story: "A minimal alert with just an icon and message.",
      },
    },
  },
}

export const LeaveDesignLab: Story = {
  args: {
    variant: "error",
    title: "Leave the Design Lab?",
    children: "Any unsaved changes will be lost",
    showIcon: true,
    showClose: true,
  },
  name: "Leave Design Lab Example",
  parameters: {
    docs: {
      description: {
        story: "Example from the design specification.",
      },
    },
  },
}

export const AllVariants: StoryObj<typeof Alert> = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="error" title="Error Alert">
        There was an error processing your request.
      </Alert>

      <Alert variant="informational" title="Information Alert">
        Your account will be updated in 24 hours.
      </Alert>

      <Alert variant="success" title="Success Alert">
        Your changes have been saved successfully.
      </Alert>

      <Alert variant="warning" title="Warning Alert">
        This action cannot be undone.
      </Alert>
    </div>
  ),
  name: "All Alert Variants",
  parameters: {
    docs: {
      description: {
        story: "This story showcases all alert variants in a single view.",
      },
    },
  },
}

export const AllConfigurations: StoryObj<typeof Alert> = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Standard Alert</h3>
      <Alert variant="error" title="Error" showIcon showClose>
        Standard alert with all elements
      </Alert>

      <h3 className="text-lg font-medium">Without Icon</h3>
      <Alert variant="error" title="Error" showIcon={false} showClose>
        Alert without an icon
      </Alert>

      <h3 className="text-lg font-medium">Without Title</h3>
      <Alert variant="error" showIcon showClose>
        Alert without a title
      </Alert>

      <h3 className="text-lg font-medium">Without Close Button</h3>
      <Alert variant="error" title="Error" showIcon showClose={false}>
        Alert without a close button
      </Alert>

      <h3 className="text-lg font-medium">Title Only</h3>
      <Alert variant="error" title="Error" showIcon showClose />

      <h3 className="text-lg font-medium">Inline Width</h3>
      <Alert variant="error" title="Error" showIcon showClose fill={false}>
        Inline width alert
      </Alert>
    </div>
  ),
  name: "All Configurations",
  parameters: {
    docs: {
      description: {
        story: "This story showcases all possible alert configurations.",
      },
    },
  },
}
