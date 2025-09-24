"use client";
import typographyTheme, { TypographyThemeProps } from "./theme";
import React from "react";

export interface BaseTypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  variant?: TypographyThemeProps["variant"];
  size?: TypographyThemeProps["size"];
  weight?: TypographyThemeProps["weight"];
  inline?: boolean;
}
const BaseTypography = ({
  as,
  children,
  className,
  variant,
  size,
  weight,
  inline,
  ...props
}: BaseTypographyProps) => {
  const Component = inline ? "span" : as;
  return (
    <Component
      className={typographyTheme({
        className,
        variant,
        weight,
        size,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default BaseTypography;
