import type { Meta, StoryObj } from "@storybook/react"
import { cn } from "./utils"
import { getSizeClasses } from "./sizeUtils"
import { conditionalClasses } from "./styleUtils"

const meta: Meta = {
  title: "Cupcake/Utilities",
}

export default meta

export const ConditionalClassesUtility: StoryObj = {
  render: () => {
    // Example usage of conditionalClasses
    const isActive = true
    const isDisabled = false

    const classes = conditionalClasses(
      "base-class",
      {
        "active-class": isActive,
        "disabled-class": isDisabled,
      },
      "additional-class",
    )

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">conditionalClasses Utility</h2>
        <p>This utility helps apply classes conditionally based on component state.</p>

        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm">
            {`
// Example usage:
const isActive = true;
const isDisabled = false;

const classes = conditionalClasses(
  "base-class", 
  {
    "active-class": isActive,
    "disabled-class": isDisabled,
  },
  "additional-class"
);

// Result: "base-class active-class additional-class"
            `}
          </pre>
        </div>

        <div>
          <p>Result:</p>
          <code className="bg-gray-100 px-2 py-1 rounded">{classes}</code>
        </div>
      </div>
    )
  },
  name: "conditionalClasses Utility",
}

export const GetSizeClassesUtility: StoryObj = {
  render: () => {
    // Example usage of getSizeClasses
    const smallClasses = getSizeClasses("small", {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-3",
      large: "text-lg py-3 px-4",
    })

    const mediumClasses = getSizeClasses("medium", {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-3",
      large: "text-lg py-3 px-4",
    })

    const largeClasses = getSizeClasses("large", {
      small: "text-sm py-1 px-2",
      medium: "text-base py-2 px-3",
      large: "text-lg py-3 px-4",
    })

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">getSizeClasses Utility</h2>
        <p>This utility helps apply size-specific classes consistently across components.</p>

        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm">
            {`
// Example usage:
const sizeClasses = getSizeClasses(size, {
  small: "text-sm py-1 px-2",
  medium: "text-base py-2 px-3",
  large: "text-lg py-3 px-4",
});
            `}
          </pre>
        </div>

        <div className="space-y-2">
          <div>
            <p>Small:</p>
            <code className="bg-gray-100 px-2 py-1 rounded">{smallClasses}</code>
          </div>
          <div>
            <p>Medium:</p>
            <code className="bg-gray-100 px-2 py-1 rounded">{mediumClasses}</code>
          </div>
          <div>
            <p>Large:</p>
            <code className="bg-gray-100 px-2 py-1 rounded">{largeClasses}</code>
          </div>
        </div>

        <div className="flex gap-4">
          <button className={`bg-blue-500 text-white rounded ${smallClasses}`}>Small Button</button>
          <button className={`bg-blue-500 text-white rounded ${mediumClasses}`}>Medium Button</button>
          <button className={`bg-blue-500 text-white rounded ${largeClasses}`}>Large Button</button>
        </div>
      </div>
    )
  },
  name: "getSizeClasses Utility",
}

export const CnUtility: StoryObj = {
  render: () => {
    // Example usage of cn
    const classes1 = cn("base-class", "additional-class")
    const classes2 = cn("base-class", { "conditional-class": true, "not-applied": false })
    const classes3 = cn("base-class", undefined, null, "valid-class")

    return (
      <div className="space-y-4">
        <h2 className="text-xl font-bold">cn Utility</h2>
        <p>This utility combines class names conditionally using clsx and tailwind-merge.</p>

        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-sm">
            {`
// Example usage:
import { cn } from "@/lib/utils";

// Basic usage
const classes1 = cn("base-class", "additional-class");

// With conditions
const classes2 = cn("base-class", { 
  "conditional-class": true, 
  "not-applied": false 
});

// Handling undefined/null
const classes3 = cn("base-class", undefined, null, "valid-class");
            `}
          </pre>
        </div>

        <div className="space-y-2">
          <div>
            <p>Basic:</p>
            <code className="bg-gray-100 px-2 py-1 rounded">{classes1}</code>
          </div>
          <div>
            <p>With conditions:</p>
            <code className="bg-gray-100 px-2 py-1 rounded">{classes2}</code>
          </div>
          <div>
            <p>Handling undefined/null:</p>
            <code className="bg-gray-100 px-2 py-1 rounded">{classes3}</code>
          </div>
        </div>
      </div>
    )
  },
  name: "cn Utility",
}
