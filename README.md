# Cupcake Design System

Cupcake is a delightful design system built with TypeScript, React, and Tailwind CSS. It provides a set of reusable components to help maintain consistency and improve user experience across your applications.

![Cupcake Design System](https://placeholder.svg?height=200&width=600&text=Cupcake+Design+System)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Alert](#alert)
  - [Avatar](#avatar)
  - [Button](#button)
- [Utilities](#utilities)
- [Testing](#testing)
- [Design Principles](#design-principles)
- [Contributing](#contributing)
- [License](#license)

## Installation

\`\`\`bash
npm install cupcake-design-system
# or
yarn add cupcake-design-system
\`\`\`

## Usage

Import the components you need from the Cupcake design system:

\`\`\`tsx
import { Alert, Avatar, Button } from 'cupcake-design-system';

function MyComponent() {
  return (
    <div>
      <Alert 
        variant="error" 
        title="Error" 
        onDismiss={() => console.log("Alert dismissed")}
      >
        There was an error processing your request.
      </Alert>
      
      <Avatar identifier="John Doe" />
      
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
\`\`\`

## Components

[Component documentation remains the same]

## Utilities

Cupcake provides several utilities to help with component development:

### createComponent

A factory function for creating components with consistent props and data attributes.

\`\`\`tsx
import { createComponent } from "@/lib/createComponent"

const MyComponent = createComponent<MyComponentProps>("MyComponent", (props, ref) => {
  // Component implementation
})
\`\`\`

### getSizeClasses

A utility for getting size-specific classes.

\`\`\`tsx
import { getSizeClasses } from "@/lib/sizeUtils"

const sizeClasses = getSizeClasses(size, {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
})
\`\`\`

### getColorClasses

A utility for getting color-specific classes based on intent, variant, and state.

\`\`\`tsx
import { getColorClasses } from "@/lib/colorSystem"

const colorClasses = getColorClasses("primary", "solid", "default")
\`\`\`

### conditionalClasses

A utility for applying classes conditionally.

\`\`\`tsx
import { conditionalClasses } from "@/lib/styleUtils"

const classes = conditionalClasses("base-class", {
  "active-class": isActive,
  "disabled-class": isDisabled,
})
\`\`\`

## Testing

[Testing documentation remains the same]

## Design Principles

Cupcake is built on the following principles:

1. **Simplicity** - Components should be easy to use and understand
2. **Consistency** - Components should follow consistent patterns and behaviors
3. **Accessibility** - Components should be accessible to all users
4. **Flexibility** - Components should be customizable to meet specific needs
5. **Performance** - Components should be optimized for performance
6. **DRY (Don't Repeat Yourself)** - Code should be reused and shared across components

## Contributing

We welcome contributions to the Cupcake design system! Please read our contributing guidelines before submitting a pull request.

## License

Cupcake is licensed under the MIT License.
\`\`\`
