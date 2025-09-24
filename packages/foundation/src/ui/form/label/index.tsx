"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
import typographyTheme from "../../typograhy/theme";
import { VariantProps } from "class-variance-authority";

function Label({
  className,
  variant,
  size = "body1",
  weight,

  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> &
  VariantProps<typeof typographyTheme>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={typographyTheme({
        className: cn(
          "flex items-center gap-2  leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
          className
        ),
        weight,
        variant,
        size,
      })}
      {...props}
    />
  );
}

export { Label };
