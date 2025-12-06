import { ReactNode } from "react";
import { BaseAvatar, BaseAvatarFallback, BaseAvatarImage } from "./base-avatar";
import { cn } from "@/lib/utils";

const avatarSizes = {
  xs: "size-[24px]",
  sm: "size-[32px]",
  md: "size-[40px]",
  lg: "size-[48px]",
  xl: "size-[56px]",
  "2xl": "size-[64px]",
} as const;

const avatarDotSizes = {
  xs: "size-[6px]",
  sm: "size-[8px]",
  md: "size-[10px]",
  lg: "size-[10px]",
  xl: "size-[12px] ",
  "2xl": "size-[14px] border-2",
} as const;

export function Avatar({
  fallBack,
  src,
  size = "md",
}: {
  fallBack: ReactNode;
  src: string;
  size?: keyof typeof avatarSizes;
}) {
  return (
    <div className="relative w-fit h-fit">
      <BaseAvatar className={cn(avatarSizes[size])}>
        <BaseAvatarFallback>{fallBack}</BaseAvatarFallback>
        <BaseAvatarImage src={src} />
      </BaseAvatar>
      <div
        className={cn(
          "bg-primary rounded-full bottom-0 right-0 absolute border border-white",
          avatarDotSizes[size]
        )}
      />
    </div>
  );
}
