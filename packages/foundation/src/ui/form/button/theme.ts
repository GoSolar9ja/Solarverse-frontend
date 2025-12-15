import { cva, VariantProps } from "class-variance-authority";

const buttonTheme = cva(
  "lg:!px-8 px-4 border font-medium flex items-center justify-center gap-2 transition-all duration-500 disabled:opacity-80 cursor-pointer",
  {
    variants: {
      variant: {
        primarySolid:
          "bg-primary border-primary text-white active:bg-primary-200 disabled:bg-primary-100 disabled:border-primary-100 ",
        secondarySolid:
          "bg-secondary border-secondary text-white active:bg-secondary-100 disabled:bg-secondary-100 disabled:border-secondary-100",
        primaryOutline:
          "bg-transparent text-primary  border-primary-100 active:opacity-50",
        primaryBrightOutline:
          "bg-[#FBFBFB] text-primary-200  border-primary-200 active:bg-primary active:text-white shadow-lg shadow-[#0000000F] focus:bg-primary-200 focus:text-white",
        successSolid:
          "bg-success text-white border-success active:bg-green-400",
        successOutline:
          "bg-transparent text-success  border-success active:border-green-400 active:opacity-50",
        errorSolid: "bg-error text-white border-error active:bg-red-400 ",
        errorOutline:
          "bg-transparent text-error  border-error active:border-red-400 active:opacity-50",
        tertiarySolid:
          "active:bg-[#C1C6C5] disabled:bg-[#C1C6C5]/30 disabled:border-[#C1C6C5]/30 text-black border-[#C1C6C5]/50! bg-[#F5F5F5]",
      },
      rounded: {
        full: "rounded-full",

        lg: "rounded-lg",
        /* 8px */
        md: "rounded-md",
        /* 6px */
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },

      size: {
        xl: "text-h3-mobile md:text-h3-tablet lg:!text-h3 lg:!py-8 py-4 ",
        md: "text-h3-mobile md:text-h3-tablet lg:!text-h3 lg:!py-4 py-2 ",
        sm: "text-h5-mobile md:text-h5-tablet lg:!text-h5 py-1.5",
        xs: "text-xs sm:text-sm py-2",
      },
    },
    defaultVariants: {
      variant: "primarySolid",
      size: "sm",
      rounded: "full",
    },
  }
);

const buttonSpinnerTheme = cva(
  "w-4 h-4 border-2  border-t-transparent rounded-full animate-spin ",
  {
    variants: {
      variant: {
        primarySolid: "border-white text-white ",
        secondarySolid: "border-secondary text-secondary ",
        primaryOutline: "text-primary  border-primary",
        successSolid: "text-white border-white",
        successOutline: "text-success  border-success",
        errorSolid: "text-white border-white",
        errorOutline: "text-error  border-error",
        primaryBrightOutline: "text-primary-200  border-primary-200 ",
        tertiarySolid: "text-black border-[#C1C6C5]/50! bg-[#F5F5F5]",
      },
      size: {
        xl: "w-6 h-6 border-2",
        md: "w-4 h-4 border-1",
        sm: "w-2 h-2 border-0.5",
        xs: "w-2 h-2 border-0.5",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);
export { buttonTheme, buttonSpinnerTheme };

export type ButtonThemeProps = VariantProps<typeof buttonTheme>;
