import { Label } from "../label";
import BaseInput, { IBaseInputProps } from "./base-input";
import { ErrorMessage } from "../error-message";
import { useField } from "formik";
import { ComponentVisibility } from "../../visibility/component-visibility";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface IInputFieldProps extends IBaseInputProps {
  label?: string | ReactNode;
  validate?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  labelProps?: React.HTMLAttributes<HTMLLabelElement>;
}

class InputField {
  static primary = (props: Omit<IInputFieldProps, "variant">) => {
    const { validate, ...rest } = props;

    return <Input validate={validate} variant="primary" {...rest} />;
  };
  static secondary = (props: Omit<IInputFieldProps, "variant">) => {
    const { validate, ...rest } = props;

    return <Input validate={validate} variant="secondary" {...rest} />;
  };
}

export { InputField, Input };

const Input = ({ validate, ...props }: IInputFieldProps) => {
  const Component = validate ? ValidatedInput : UnvalidatedInput;

  return <Component {...props} />;
};

const ValidatedInput = ({
  label,
  name,
  containerProps,
  labelProps,
  ...props
}: IInputFieldProps) => {
  const [field, meta] = useField({ name: name, type: props.type });
  const error = meta.error;
  const touched = meta.touched;
  const { className: labelClassName, ...restLabelProps } = labelProps || {};

  return (
    <div {...containerProps}>
      <Label
        className={cn("mb-2 md:mb-0", labelClassName)}
        htmlFor={name}
        {...restLabelProps}
      >
        {label}
      </Label>
      <BaseInput {...field} error={error} touched={touched} {...props} />
      <ErrorMessage name={name || ""} />
    </div>
  );
};

const UnvalidatedInput = ({
  label,
  containerProps,
  labelProps,
  ...props
}: IInputFieldProps) => {
  const { className: labelClassName, ...restLabelProps } = labelProps || {};

  return (
    <div {...containerProps}>
      <ComponentVisibility visible={!!label}>
        <Label
          className={cn("mb-2 md:mb-0", labelClassName)}
          htmlFor={props.name}
          {...restLabelProps}
        >
          {label}
        </Label>
      </ComponentVisibility>
      <BaseInput {...props} />
    </div>
  );
};
