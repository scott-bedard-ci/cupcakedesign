import { cn } from "./utils"

export type StyleCondition = Record<string, boolean | undefined>

export function conditionalClasses(
  baseClasses: string,
  conditions: StyleCondition,
  additionalClasses?: string,
): string {
  const conditionalClasses = Object.entries(conditions)
    .filter(([_, condition]) => condition)
    .map(([className]) => className)
    .join(" ")

  return cn(baseClasses, conditionalClasses, additionalClasses)
}
