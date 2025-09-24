"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function CenterLayout({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex  items-center justify-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}
