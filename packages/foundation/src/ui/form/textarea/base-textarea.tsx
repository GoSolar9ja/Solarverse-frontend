import React from "react";
import { textareaTheme } from "./theme";
import { VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { ComponentVisibility } from "../../visibility/component-visibility";

export interface IBaseTextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaTheme> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  error?: string;
  touched?: boolean;
  leftSlotProps?: React.HTMLAttributes<HTMLDivElement>;
  rightSlotProps?: React.HTMLAttributes<HTMLDivElement>;
}

const BaseTextArea = ({
  variant,
  className,
  rightIcon,
  leftIcon,
  error,
  touched,
  leftSlotProps,
  rightSlotProps,
  rounded,
  ...props
}: IBaseTextAreaProps) => {
  const { className: leftSlotClassName, ...restLeftSlotProps } =
    leftSlotProps || {};
  const { className: rightSlotClassName, ...restRightSlotProps } =
    rightSlotProps || {};

  const fieldError = !!(error && touched);
  return (
    <div
      className={cn(
        textareaTheme({
          variant,
          fieldError,
          rounded,
          className,
        })
      )}
    >
      <ComponentVisibility visible={!!leftIcon}>
        <div
          className={cn(
            "pl-5  h-full text-xs sm:!text-base flex items-center justify-center",
            leftSlotClassName
          )}
          {...restLeftSlotProps}
        >
          {leftIcon}
        </div>
      </ComponentVisibility>
      <textarea
        onFocus={(e) => {
          e.target.parentElement?.classList.add("border-primary");
        }}
        onBlur={(e) => {
          e.target.parentElement?.classList.remove("border-primary");
        }}
        className={
          "w-full h-full outline-none sm:!px-5 px-2 text-xs md:!text-base resize-none"
        }
        {...props}
      />
      <ComponentVisibility visible={!!rightIcon}>
        <div
          className={cn(
            "pr-5  h-full flex items-center text-xs sm:!text-base justify-center",
            rightSlotClassName
          )}
          {...restRightSlotProps}
        >
          {rightIcon}
        </div>
      </ComponentVisibility>
    </div>
  );
};

export default BaseTextArea;
