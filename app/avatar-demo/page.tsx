import { Avatar, AvatarGroup } from "../../components/Avatar"
import DemoLayout from "../../components/DemoLayout"

export default function AvatarDemo() {
  return (
    <DemoLayout>
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Avatar Component</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">Display user profile images or initials</p>
      </header>

      <section className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Individual Avatars</h2>
        <p className="text-gray-600 mb-4">
          Avatar component can display 1-2 letters from account names or email addresses.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 md:mb-8">
          <div className="flex flex-col items-center">
            <Avatar identifier="John Doe" />
            <span className="mt-2 text-sm text-center">John Doe</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar identifier="jane.smith@example.com" />
            <span className="mt-2 text-sm text-center">jane.smith@example.com</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar identifier="Alex" />
            <span className="mt-2 text-sm text-center">Alex</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar />
            <span className="mt-2 text-sm text-center">No identifier</span>
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Avatar Sizes</h3>
        <p className="text-gray-600 mb-4">
          Avatars come in two sizes: small and large. Large avatars are never grouped.
        </p>

        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="flex flex-col items-center">
            <Avatar identifier="Small" size="small" />
            <span className="mt-2 text-sm">Small</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar identifier="Large" size="large" />
            <span className="mt-2 text-sm">Large</span>
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">With Image</h3>
        <p className="text-gray-600 mb-4">Avatars can display images while maintaining the background color.</p>

        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="flex flex-col items-center">
            <Avatar identifier="John Doe" src="/diverse-group.png" />
            <span className="mt-2 text-sm">With image</span>
          </div>
          <div className="flex flex-col items-center">
            <Avatar identifier="Jane Smith" src="/invalid-image.jpg" />
            <span className="mt-2 text-sm">Image error</span>
          </div>
        </div>

        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Hover for Tooltip</h3>
        <p className="text-gray-600 mb-4">Hover over an avatar to see the full account name or email address.</p>

        <div className="flex items-center gap-4">
          <Avatar identifier="john.doe@example.com" />
        </div>
      </section>

      <section className="mb-8 md:mb-12">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Avatar Groups</h2>
        <p className="text-gray-600 mb-4">Avatar groups can display multiple avatars with a customizable maximum.</p>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">No maximum (show all)</h3>
            <AvatarGroup>
              <Avatar identifier="John Doe" />
              <Avatar identifier="Jane Smith" />
              <Avatar identifier="Alex Johnson" />
              <Avatar identifier="Sarah Williams" />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Maximum of 3 avatars</h3>
            <AvatarGroup max={3}>
              <Avatar identifier="John Doe" />
              <Avatar identifier="Jane Smith" />
              <Avatar identifier="Alex Johnson" />
              <Avatar identifier="Sarah Williams" />
              <Avatar identifier="Michael Brown" />
            </AvatarGroup>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Maximum of 5 avatars</h3>
            <AvatarGroup max={5}>
              <Avatar identifier="John Doe" />
              <Avatar identifier="Jane Smith" />
              <Avatar identifier="Alex Johnson" />
              <Avatar identifier="Sarah Williams" />
              <Avatar identifier="Michael Brown" />
              <Avatar identifier="Emily Davis" />
              <Avatar identifier="David Miller" />
              <Avatar identifier="Olivia Wilson" />
            </AvatarGroup>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Usage</h2>
        <div className="bg-gray-100 p-3 md:p-4 rounded-md">
          <div className="overflow-x-auto">
            <pre className="text-xs md:text-sm">
              {`// Individual Avatar
import { Avatar } from "@/components/Avatar"

<Avatar identifier="John Doe" />
<Avatar identifier="john.doe@example.com" />
<Avatar src="/path/to/image.jpg" alt="John Doe" />
<Avatar identifier="John Doe" size="large" />

// Avatar Group
import { Avatar, AvatarGroup } from "@/components/Avatar"

<AvatarGroup max={5}>
  <Avatar identifier="John Doe" />
  <Avatar identifier="Jane Smith" />
  <Avatar identifier="Alex Johnson" />
  <Avatar identifier="Sarah Williams" />
  <Avatar identifier="Michael Brown" />
  <Avatar identifier="Emily Davis" />
</AvatarGroup>`}
            </pre>
          </div>
        </div>
      </section>
    </DemoLayout>
  )
}
