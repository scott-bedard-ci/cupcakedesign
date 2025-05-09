import type { Meta, StoryObj } from "@storybook/react"
import { Avatar, AvatarGroup } from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "Cupcake/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    identifier: {
      control: "text",
      description: "The account name or email to display in the avatar",
    },
    src: {
      control: "text",
      description: "The image URL to display in the avatar",
    },
    alt: {
      control: "text",
      description: "The alt text for the avatar image",
      table: {
        defaultValue: { summary: "Avatar" },
      },
    },
    size: {
      control: "select",
      options: ["small", "large"],
      description: "The size of the avatar",
      table: {
        defaultValue: { summary: "small" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithName: Story = {
  args: {
    identifier: "John Doe",
  },
  name: "With Name",
  parameters: {
    docs: {
      description: {
        story: "Avatar with a name identifier displays the initials.",
      },
    },
  },
}

export const WithEmail: Story = {
  args: {
    identifier: "john.doe@example.com",
  },
  name: "With Email",
  parameters: {
    docs: {
      description: {
        story: "Avatar with an email identifier displays the initials from the email parts.",
      },
    },
  },
}

export const WithImage: Story = {
  args: {
    identifier: "John Doe",
    src: "/diverse-group.png",
    alt: "John Doe",
  },
  name: "With Image",
  parameters: {
    docs: {
      description: {
        story: "Avatar can display an image while maintaining the background color based on the identifier.",
      },
    },
  },
}

export const LargeAvatar: Story = {
  args: {
    identifier: "John Doe",
    size: "large",
  },
  name: "Large Size",
  parameters: {
    docs: {
      description: {
        story: "Avatars come in two sizes: small (default) and large.",
      },
    },
  },
}

export const Fallback: Story = {
  args: {},
  name: "Fallback (No Identifier)",
  parameters: {
    docs: {
      description: {
        story: "When no identifier or image is provided, the avatar displays a fallback question mark.",
      },
    },
  },
}

export const ImageError: Story = {
  args: {
    identifier: "John Doe",
    src: "/invalid-image.jpg",
  },
  name: "Image Error Fallback",
  parameters: {
    docs: {
      description: {
        story: "When an image fails to load, the avatar falls back to showing initials.",
      },
    },
  },
}

// Avatar Group stories
export const BasicAvatarGroup: StoryObj<typeof AvatarGroup> = {
  render: () => (
    <AvatarGroup>
      <Avatar identifier="John Doe" />
      <Avatar identifier="Jane Smith" />
      <Avatar identifier="Alex Johnson" />
      <Avatar identifier="Sarah Williams" />
    </AvatarGroup>
  ),
  name: "Basic Avatar Group",
  parameters: {
    docs: {
      description: {
        story: "Avatar groups display multiple avatars together with a slight overlap.",
      },
    },
  },
}

export const AvatarGroupWithMax: StoryObj<typeof AvatarGroup> = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar identifier="John Doe" />
      <Avatar identifier="Jane Smith" />
      <Avatar identifier="Alex Johnson" />
      <Avatar identifier="Sarah Williams" />
      <Avatar identifier="Michael Brown" />
    </AvatarGroup>
  ),
  name: "Avatar Group with Max",
  parameters: {
    docs: {
      description: {
        story:
          "Avatar groups can be limited to show a maximum number of avatars, with a +n indicator for additional avatars.",
      },
    },
  },
}

export const AvatarGroupWithImages: StoryObj<typeof AvatarGroup> = {
  render: () => (
    <AvatarGroup max={4}>
      <Avatar identifier="John Doe" src="/diverse-group.png" />
      <Avatar identifier="Jane Smith" />
      <Avatar identifier="Alex Johnson" src="/diverse-group.png" />
      <Avatar identifier="Sarah Williams" />
      <Avatar identifier="Michael Brown" />
    </AvatarGroup>
  ),
  name: "Avatar Group with Images",
  parameters: {
    docs: {
      description: {
        story: "Avatar groups can contain a mix of avatars with images and initials.",
      },
    },
  },
}

export const AllAvatarVariants: StoryObj<typeof Avatar> = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-2">Individual Avatars</h3>
        <div className="flex flex-wrap gap-4 items-end">
          <div className="flex flex-col items-center">
            <Avatar identifier="John Doe" size="small" />
            <span className="mt-2 text-sm">Small</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar identifier="Jane Smith" size="large" />
            <span className="mt-2 text-sm">Large</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar identifier="Alex" src="/diverse-group.png" />
            <span className="mt-2 text-sm">With Image</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar />
            <span className="mt-2 text-sm">Fallback</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Avatar Groups</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">Default (no max)</p>
            <AvatarGroup>
              <Avatar identifier="John Doe" />
              <Avatar identifier="Jane Smith" />
              <Avatar identifier="Alex Johnson" />
            </AvatarGroup>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">With max=3</p>
            <AvatarGroup max={3}>
              <Avatar identifier="John Doe" />
              <Avatar identifier="Jane Smith" />
              <Avatar identifier="Alex Johnson" />
              <Avatar identifier="Sarah Williams" />
              <Avatar identifier="Michael Brown" />
            </AvatarGroup>
          </div>
        </div>
      </div>
    </div>
  ),
  name: "All Avatar Variants",
  parameters: {
    docs: {
      description: {
        story: "This story showcases all avatar variants and groups in a single view.",
      },
    },
  },
}
