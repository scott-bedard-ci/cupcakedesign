"use client"

import { Button, ButtonGroup } from "../../components/Button"
import DemoLayout from "../../components/DemoLayout"

// Import icons
import { Search, Gift } from "lucide-react"

export default function ButtonDemo() {
  return (
    <DemoLayout>
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Button Component</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">Trigger actions and navigation</p>
      </header>

      <section className="mb-6 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Button Types</h2>
        <p className="text-gray-600 mb-4">The Button component has three types: Primary, Secondary, and Tertiary.</p>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="tertiary">Tertiary Button</Button>
        </div>
      </section>

      <section className="mb-6 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Button Sizes</h2>
        <p className="text-gray-600 mb-4">The Button component comes in three sizes: Small, Medium, and Large.</p>

        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-6 md:mb-8">
          <Button variant="primary" size="small">
            Small Button
          </Button>
          <Button variant="primary" size="medium">
            Medium Button
          </Button>
          <Button variant="primary" size="large">
            Large Button
          </Button>
        </div>
      </section>

      <section className="mb-6 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Button States</h2>
        <p className="text-gray-600 mb-4">
          Buttons can be enabled or disabled. Hover and pressed states are handled automatically.
        </p>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
          <Button variant="primary">Enabled</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section className="mb-6 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Button with Icons</h2>
        <p className="text-gray-600 mb-4">Buttons can have icons on the left, right, or can be icon-only.</p>

        <div className="flex flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
          <Button variant="primary" leftIcon={<Search />}>
            Left Icon
          </Button>
          <Button variant="primary" rightIcon={<Gift />}>
            Right Icon
          </Button>
          <Button variant="primary" leftIcon={<Search />} rightIcon={<Gift />}>
            Both Icons
          </Button>
          <Button variant="primary" leftIcon={<Search />} iconOnly aria-label="Search" />
        </div>
      </section>

      <section className="mb-6 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Button Group</h2>
        <p className="text-gray-600 mb-4">
          Related buttons can be grouped together. Groups should have a maximum of 2 buttons.
        </p>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Horizontal Group</h3>
            <ButtonGroup>
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
            </ButtonGroup>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Vertical Group</h3>
            <ButtonGroup vertical>
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
            </ButtonGroup>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Usage</h2>
        <div className="bg-gray-100 p-3 md:p-4 rounded-md">
          <div className="overflow-x-auto">
            <pre className="text-xs md:text-sm">
              {`// Basic Button
import { Button } from "@/components/Button"

<Button variant="primary">Click Me</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="tertiary">Delete</Button>

// Button with Icon
import { Search } from 'lucide-react'

<Button leftIcon={<Search />}>Search</Button>
<Button rightIcon={<Search />}>Search</Button>
<Button leftIcon={<Search />} iconOnly aria-label="Search" />

// Button Group
import { Button, ButtonGroup } from "@/components/Button"

<ButtonGroup>
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</ButtonGroup>`}
            </pre>
          </div>
        </div>
      </section>
    </DemoLayout>
  )
}
