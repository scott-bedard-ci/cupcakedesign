# Cupcake Design System

Cupcake is a delightful design system built with TypeScript, React, and Tailwind CSS. It provides a set of reusable components to help maintain consistency and improve user experience across your applications.

![Cupcake Design System]

## Overview

Cupcake Design System is a comprehensive UI toolkit designed for building modern web applications. It focuses on providing accessible, responsive, and mobile-optimized components with a consistent visual language.

## Technologies

- **React**: UI component library
- **TypeScript**: Type safety and developer experience
- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework
- **Storybook**: Component documentation and testing
- **Jest**: Unit and integration testing

## Project Structure

The project is organized as follows:

\`\`\`
cupcake/
├── app/                  # Next.js application pages
├── components/           # Custom Cupcake components
│   ├── ui/               # Shadcn UI components (legacy)
│   └── ...               # Core Cupcake components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
└── test/                 # Test utilities
\`\`\`

### Component Organization

The project currently maintains two component systems:

1. **Cupcake Components** (`components/*.tsx`):
   - Custom-built components specific to the Cupcake design system
   - Follow PascalCase naming convention (e.g., `Button.tsx`)
   - Implement the full Cupcake design language
   - Include mobile-optimized features and responsive design

2. **Shadcn UI Components** (`components/ui/*.tsx`):
   - These components are from the shadcn/ui library
   - Follow kebab-case naming convention (e.g., `button.tsx`)
   - Currently used in some parts of the application
   - We're gradually migrating away from these to use our custom components exclusively

## Component Usage Guidelines

When developing new features:

- Use components from the `components/` directory (e.g., `import { Button } from "@/components/Button"`)
- Avoid using components from `components/ui/` in new code
- If you need to modify an existing feature using shadcn components, consider migrating to Cupcake components

## Core Components

### Alert

The Alert component is used to display important messages to users.

\`\`\`tsx
import { Alert } from '@/components/Alert';

<Alert 
  variant="error" 
  title="Error" 
  onDismiss={() => console.log("Alert dismissed")}
>
  There was an error processing your request.
</Alert>
\`\`\`

### Avatar

The Avatar component displays a user's profile image or their initials as a fallback.

\`\`\`tsx
import { Avatar } from '@/components/Avatar';

<Avatar identifier="John Doe" />
\`\`\`

### Button

The Button component is used for actions and navigation.

\`\`\`tsx
import { Button } from '@/components/Button';

<Button variant="primary" size="medium">
  Click Me
</Button>
\`\`\`

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

## Mobile Optimization

Cupcake components are designed with mobile users in mind:

- Touch-friendly target sizes (minimum 44x44px)
- Swipe gestures for interactive components
- Responsive layouts that adapt to different screen sizes
- Device orientation awareness
- Mobile-specific component variants

## Design Tokens

Cupcake uses a design token system to maintain consistency:

- Colors are defined as tokens in the Tailwind configuration
- Spacing, typography, and other visual properties use standardized values
- Components reference these tokens instead of hardcoded values

## Getting Started

### Installation

\`\`\`bash
npm install cupcake-design-system
# or
yarn add cupcake-design-system
\`\`\`

### Usage

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

## Development

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open Storybook: `npm run storybook`

### Testing

Run tests with:

\`\`\`bash
npm test
\`\`\`

## Design Principles

Cupcake is built on the following principles:

1. **Simplicity** - Components should be easy to use and understand
2. **Consistency** - Components should follow consistent patterns and behaviors
3. **Accessibility** - Components should be accessible to all users
4. **Flexibility** - Components should be customizable to meet specific needs
5. **Performance** - Components should be optimized for performance
6. **Mobile-First** - Components should work well on all devices, especially mobile
7. **DRY (Don't Repeat Yourself)** - Code should be reused and shared across components

## Contributing

We welcome contributions to the Cupcake design system! Please read our contributing guidelines before submitting a pull request.

## License

Cupcake is licensed under the MIT License.
