import { cva } from "class-variance-authority";

export const inputTheme = cva(
  "rounded-lg overflow-hidden relative text-xs md:text-base h-[44px] overflow-hidden transition-all duration-300  flex items-center ",
  {
    variants: {
      variant: {
        primary: "bg-background border border-[#1312124D]",
        secondary: "bg-white border-[#1312121A] border",
      },
      rounded: {
        full: "rounded-full",
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
        xs: "rounded-xs",
      },
      fieldError: {
        true: "border-red-500   outline-red-500/10 outline-4",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);
