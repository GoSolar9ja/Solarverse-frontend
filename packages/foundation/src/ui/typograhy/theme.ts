import { cva, VariantProps } from "class-variance-authority";

const typographyTheme = cva("transition-all duration-300", {
  variants: {
    variant: {
      primary: "text-primary",
      secondary: "text-secondary",
      primary100: "text-primary-100",
      success: "text-success",
      error: "text-error",
      fadedLight: "text-faded-light",
      fadedDark: "text-faded-dark",
    },
    size: {
      h1: "text-h1-mobile md:text-h1-tablet lg:!text-h1",
      h2: "text-h2-mobile md:text-h2-tablet lg:!text-h2 leading-[32px] md:leading-[40px] lg:!leading-12",
      h3: "text-h3-mobile md:text-h3-tablet lg:!text-h3 leading-[28px] md:leading-[36px] lg:!leading-[44px]",
      h4: "text-h4-mobile md:text-h4-tablet lg:!text-h4",
      h5: "text-h5-mobile md:text-h5-tablet lg:!text-h5",
      h6: "text-h6-mobile md:text-h6-tablet lg:!text-h6",
      body1:
        "text-body1-mobile md:text-body1-tablet lg:!text-body1 lg:!leading-[28px] md:leading-[26px] leading-[24px]",
      body2: "text-body2-mobile md:text-body2-tablet lg:!text-body2",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    // weight: "regular",
  },
});

export default typographyTheme;

export type TypographyThemeProps = VariantProps<typeof typographyTheme>;
