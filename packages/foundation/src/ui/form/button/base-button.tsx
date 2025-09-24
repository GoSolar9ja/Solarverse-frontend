import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from "react";
import { buttonSpinnerTheme, buttonTheme, ButtonThemeProps } from "./theme";

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonThemeProps {
  loading?: boolean;
}

const ButtonSpinner = (props: ButtonThemeProps) => {
  return <div className={buttonSpinnerTheme(props)} />;
};

const BaseButton = forwardRef(
  (
    {
      variant,
      size,
      rounded,
      className,
      children,
      loading,
      disabled,
      fullWidth,
      ...props
    }: BaseButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={buttonTheme({
          variant,
          size,
          rounded,
          className,
          fullWidth,
        })}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {children}
        {loading && <ButtonSpinner variant={variant} size={size} />}
      </button>
    );
  }
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
