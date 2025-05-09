import { Alert } from "../../components/Alert"
import DemoLayout from "../../components/DemoLayout"

export default function AlertDemo() {
  return (
    <DemoLayout>
      <header className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Alert Component</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
          Display important messages to users in forms, inline errors, or success messages
        </p>
      </header>

      <section className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Alert Variants</h2>
        <div className="space-y-3 md:space-y-4">
          <Alert variant="error" title="Error">
            There was an error processing your request.
          </Alert>

          <Alert variant="warning" title="Warning">
            This action cannot be undone.
          </Alert>

          <Alert variant="success" title="Success">
            Your changes have been saved successfully.
          </Alert>

          <Alert variant="informational" title="Information">
            Your account will be updated in 24 hours.
          </Alert>
        </div>
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Alert Configurations</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Without Icon</h3>
            <Alert variant="error" title="No Icon" showIcon={false}>
              This alert doesn't display an icon.
            </Alert>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Without Title</h3>
            <Alert variant="warning">This alert doesn't have a title.</Alert>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Without Close Button</h3>
            <Alert variant="success" title="No Close Button" showClose={false}>
              This alert doesn't have a close button.
            </Alert>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Title Only</h3>
            <Alert variant="informational" title="Title Only" />
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Inline Width</h3>
            <div className="overflow-x-auto">
              <Alert variant="error" title="Inline Width" fill={false}>
                This alert doesn't fill its container width.
              </Alert>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Real-World Examples</h2>
        <div className="space-y-3 md:space-y-4">
          <Alert variant="error" title="Leave the Design Lab?">
            Any unsaved changes will be lost
          </Alert>

          <Alert variant="success">Your design has been saved successfully.</Alert>

          <Alert variant="informational" title="Information" showClose={false}>
            The system will be undergoing maintenance in 24 hours.
          </Alert>
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Usage</h2>
        <div className="bg-gray-100 p-3 md:p-4 rounded-md">
          <div className="overflow-x-auto">
            <pre className="text-xs md:text-sm">
              {`import { Alert } from "@/components/Alert"

// Basic Alert
<Alert variant="error" title="Error">
  There was an error processing your request.
</Alert>

// Alert without icon
<Alert variant="warning" title="Warning" showIcon={false}>
  This action cannot be undone.
</Alert>

// Alert without title
<Alert variant="success">
  Your changes have been saved successfully.
</Alert>

// Alert without close button
<Alert variant="informational" title="Information" showClose={false}>
  Your account will be updated in 24 hours.
</Alert>

// Alert with inline width
<Alert variant="error" title="Error" fill={false}>
  This alert doesn't fill its container width.
</Alert>`}
            </pre>
          </div>
        </div>
      </section>
    </DemoLayout>
  )
}
