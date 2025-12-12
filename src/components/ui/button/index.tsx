import { clsx as cn } from "clsx";
import styles from "./button.module.css";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(styles.button, {
  variants: {
    variant: {
      default: styles.button,
      outline: styles.buttonOutline,
      circle: styles.buttonCircle,
      ghost: styles.buttonGhost,
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export function Button({
  children,
  className,
  variant,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof button>) {
  return (
    <button {...props} className={cn(button({ variant }), className)}>{children}</button>
  )
}