import { forwardRef } from "react";
import BaseButton, { BaseButtonProps } from "./base-button";

const Button = {
  PrimarySolid: forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => (
    <BaseButton variant="primarySolid" {...props} ref={ref} />
  )),
  SecondarySolid: forwardRef<HTMLButtonElement, BaseButtonProps>(
    (props, ref) => <BaseButton variant="secondarySolid" {...props} ref={ref} />
  ),
  PrimaryOutline: forwardRef<HTMLButtonElement, BaseButtonProps>(
    (props, ref) => <BaseButton variant="primaryOutline" {...props} ref={ref} />
  ),
  PrimaryBrightOutline: forwardRef<HTMLButtonElement, BaseButtonProps>(
    (props, ref) => (
      <BaseButton variant="primaryBrightOutline" {...props} ref={ref} />
    )
  ),
  SuccessSolid: forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => (
    <BaseButton variant="successSolid" {...props} ref={ref} />
  )),
  SuccessOutline: forwardRef<HTMLButtonElement, BaseButtonProps>(
    (props, ref) => <BaseButton variant="successOutline" {...props} ref={ref} />
  ),
  ErrorSolid: forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => (
    <BaseButton variant="errorSolid" {...props} ref={ref} />
  )),
  ErrorOutline: forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => (
    <BaseButton variant="errorOutline" {...props} ref={ref} />
  )),
};

// Add display names
Button.PrimarySolid.displayName = "Button.PrimarySolid";
Button.SecondarySolid.displayName = "Button.SecondarySolid";
Button.PrimaryOutline.displayName = "Button.PrimaryOutline";
Button.PrimaryBrightOutline.displayName = "Button.PrimaryBrightOutline";
Button.SuccessSolid.displayName = "Button.SuccessSolid";
Button.SuccessOutline.displayName = "Button.SuccessOutline";
Button.ErrorSolid.displayName = "Button.ErrorSolid";
Button.ErrorOutline.displayName = "Button.ErrorOutline";

export { Button };
