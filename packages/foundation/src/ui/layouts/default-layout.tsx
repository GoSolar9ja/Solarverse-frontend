"use client";

import { cn } from "@/lib/utils";
import React from "react";

const DefaultLayout = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "max-w-[1440px] md:!px-[60px] px-5 mx-auto relative",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { DefaultLayout };
