import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 terminal-text",
  {
    variants: {
      variant: {
        default:
          "border-[var(--sleeper-logo)] bg-[var(--sleeper-logo)]/20 text-[var(--sleeper-logo)] hover:bg-[var(--sleeper-logo)]/30",
        secondary:
          "border-[var(--brand-highlight)] bg-[var(--brand-highlight)]/20 text-[var(--brand-highlight)] hover:bg-[var(--brand-highlight)]/30",
        destructive:
          "border-red-400 bg-red-400/20 text-red-400 hover:bg-red-400/30",
        outline: "border-[var(--mecha-outline)] text-[var(--mecha-outline)] hover:bg-[var(--mecha-outline)]/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }