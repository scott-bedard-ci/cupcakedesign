import type { Meta, StoryObj } from "@storybook/react"
import { colorIntents, getColorClasses, type ColorIntent, type ColorVariant, type ColorState } from "./colorSystem"

interface ColorSwatchProps {
  intent: ColorIntent
  variant: ColorVariant
  state?: ColorState
  label?: string
}

const ColorSwatch = ({ intent, variant, state = "default", label }: ColorSwatchProps) => {
  const colorClass = getColorClasses(intent, variant, state)
  return (
    <div className="flex flex-col items-center">
      <div className={`${colorClass} w-24 h-24 rounded-md flex items-center justify-center border`}>
        {label || `${intent}`}
      </div>
      <div className="mt-2 text-sm text-center">{`${intent} (${variant})`}</div>
      <div className="text-xs text-gray-500">{state}</div>
    </div>
  )
}

const meta: Meta = {
  title: "Cupcake/Color System",
  component: ColorSwatch,
}

export default meta
type Story = StoryObj<typeof ColorSwatch>

export const SolidVariants: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Solid Variants</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.keys(colorIntents).map((intent) => (
          <ColorSwatch key={intent} intent={intent as ColorIntent} variant="solid" />
        ))}
      </div>
    </div>
  ),
  name: "Solid Variants",
  parameters: {
    docs: {
      description: {
        story: "Solid color variants are used for primary actions and emphasis.",
      },
    },
  },
}

export const OutlineVariants: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Outline Variants</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.keys(colorIntents).map((intent) => (
          <ColorSwatch key={intent} intent={intent as ColorIntent} variant="outline" />
        ))}
      </div>
    </div>
  ),
  name: "Outline Variants",
  parameters: {
    docs: {
      description: {
        story: "Outline variants are used for secondary actions and less emphasis.",
      },
    },
  },
}

export const GhostVariants: Story = {
  render: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Ghost Variants</h2>
      <div className="flex flex-wrap gap-4">
        {Object.keys(colorIntents).map((intent) => (
          <ColorSwatch key={intent} intent={intent as ColorIntent} variant="ghost" />
        ))}
      </div>
    </div>
  ),
  name: "Ghost Variants",
  parameters: {
    docs: {
      description: {
        story: "Ghost variants are used for tertiary actions and minimal emphasis.",
      },
    },
  },
}

export const StateVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Primary Intent States</h2>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch intent="primary" variant="solid" state="default" />
          <ColorSwatch intent="primary" variant="solid" state="hover" />
          <ColorSwatch intent="primary" variant="solid" state="active" />
          <ColorSwatch intent="primary" variant="solid" state="disabled" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Error Intent States</h2>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch intent="error" variant="solid" state="default" />
          <ColorSwatch intent="error" variant="solid" state="hover" />
          <ColorSwatch intent="error" variant="solid" state="active" />
          <ColorSwatch intent="error" variant="solid" state="disabled" />
        </div>
      </div>
    </div>
  ),
  name: "State Variants",
  parameters: {
    docs: {
      description: {
        story: "Colors have different states: default, hover, active, and disabled.",
      },
    },
  },
}

export const AllColorVariants: Story = {
  render: () => (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Solid Variants</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.keys(colorIntents).map((intent) => (
            <ColorSwatch key={intent} intent={intent as ColorIntent} variant="solid" />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Outline Variants</h2>
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.keys(colorIntents).map((intent) => (
            <ColorSwatch key={intent} intent={intent as ColorIntent} variant="outline" />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Ghost Variants</h2>
        <div className="flex flex-wrap gap-4">
          {Object.keys(colorIntents).map((intent) => (
            <ColorSwatch key={intent} intent={intent as ColorIntent} variant="ghost" />
          ))}
        </div>
      </div>
    </div>
  ),
  name: "All Color Variants",
  parameters: {
    docs: {
      description: {
        story: "This story showcases all color variants in a single view.",
      },
    },
  },
}
