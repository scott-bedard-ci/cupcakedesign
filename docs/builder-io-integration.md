# Builder.io Integration Documentation

## Overview

This project is integrated with Builder.io to allow visual editing of components through their drag-and-drop interface. The integration follows the [Builder.io custom components setup documentation](https://www.builder.io/c/docs/custom-components-setup).

## Registered Components

The following custom components are registered with Builder.io and available in the Visual Editor:

### 1. HeroSection
A flexible hero section component for landing pages and promotional content.

**Inputs:**
- `title` (string, required): Main title text
- `subtitle` (string, required): Highlighted subtitle text
- `description` (string, required): Description text
- `primaryButtonText` (string, required): Primary button label
- `primaryButtonHref` (string, required): Primary button URL
- `secondaryButtonText` (string, required): Secondary button label
- `secondaryButtonHref` (string, required): Secondary button URL
- `imageSrc` (file, required): Hero image
- `imageAlt` (string, required): Image alt text
- `imagePosition` (enum: left/right): Image position
- `backgroundColor` (string): Tailwind CSS background class
- `highlightColor` (string): Tailwind CSS text color class

### 2. Button
A customizable button component with multiple variants and sizes.

**Inputs:**
- `children` (string, required): Button text
- `variant` (enum: primary/secondary/tertiary): Visual style
- `size` (enum: small/medium/large): Button size
- `disabled` (boolean): Disabled state
- `touchFeedback` (boolean): Enable touch feedback

### 3. ButtonGroup
A container for grouping related buttons.

**Inputs:**
- `vertical` (boolean): Stack buttons vertically
- Can contain child Button components

### 4. Alert
A notification component for displaying important messages.

**Inputs:**
- `variant` (enum: error/informational/success/warning): Alert type
- `title` (string): Alert title
- `children` (string): Alert content
- `showIcon` (boolean): Show/hide icon
- `showClose` (boolean): Show/hide close button
- `fill` (boolean): Fill container width

### 5. Avatar
A user avatar component with image and fallback support.

**Inputs:**
- `src` (file): Avatar image
- `identifier` (string): User identifier for initials
- `alt` (string): Image alt text
- `size` (enum: small/medium/large): Avatar size
- `touchFeedback` (boolean): Enable touch feedback

### 6. AvatarGroup
A container for displaying multiple avatars with overflow handling.

**Inputs:**
- `max` (number): Maximum avatars to display
- Can contain child Avatar components

### 7. CupcakeCard
A product card component specifically for cupcakes.

**Inputs:**
- `cupcake` (object): Cupcake data with fields:
  - `id` (number): Cupcake ID
  - `name` (string, required): Cupcake name
  - `description` (string, required): Description
  - `price` (number, required): Price
  - `image` (file, required): Product image

### 8. TestimonialCard
A card component for displaying customer testimonials.

**Inputs:**
- `testimonial` (object): Testimonial data with fields:
  - `id` (number): Testimonial ID
  - `name` (string, required): Customer name
  - `quote` (string, required): Testimonial text
  - `avatar` (string): Avatar identifier

## Setup Files

### 1. `builder-registry.ts`
Contains the component registrations using the `RegisteredComponent` interface from Builder.io SDK. This file uses dynamic imports as required by Builder.io.

### 2. `lib/builder-registration.ts`
Contains the actual `Builder.registerComponent()` calls that register each component with Builder.io. This file is imported in the app layout to ensure components are registered on app startup.

### 3. `components/builder.tsx`
The main Builder.io rendering component that handles displaying Builder.io content with the registered custom components.

## Usage in Builder.io

1. **Access the Visual Editor**: Log into your Builder.io account and navigate to your project
2. **Create/Edit Content**: Create a new page or edit existing content
3. **Use Custom Components**: In the Insert tab, you'll find a "Custom Components" section containing all registered components
4. **Configure Components**: Select any component and use the Options tab to configure its properties
5. **Preview & Publish**: Use Builder.io's preview and publishing features

## Environment Setup

Make sure you have the following environment variable set:

```
NEXT_PUBLIC_BUILDER_API_KEY=your_builder_api_key_here
```

## Component Development Guidelines

When creating new components for Builder.io:

1. **Use Dynamic Imports**: Always use `dynamic()` imports in `builder-registry.ts`
2. **Define Clear Inputs**: Provide comprehensive input definitions with helpful text
3. **Set Default Values**: Include sensible default values for all inputs
4. **Consider Child Components**: Use `canHaveChildren` appropriately
5. **Add Default Styles**: Provide default styles for better UX
6. **Test in Builder.io**: Always test components in the Builder.io Visual Editor

## Troubleshooting

### Components Not Appearing
- Ensure the component is properly registered in both files
- Check that the dynamic import path is correct
- Verify the component is exported correctly

### Type Errors
- Ensure you're using compatible Builder.io SDK versions
- Check that input types match Builder.io's expected format

### Runtime Errors
- Verify all required props have default values
- Check that the component handles all possible prop combinations

## Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Custom Components Setup](https://www.builder.io/c/docs/custom-components-setup)
- [Builder.io React SDK](https://github.com/BuilderIO/builder) 