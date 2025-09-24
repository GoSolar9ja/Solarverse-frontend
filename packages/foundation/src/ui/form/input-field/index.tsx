import { Label } from "../label";
import BaseInput, { IBaseInputProps } from "./base-input";
import { ErrorMessage } from "../error-message";
import { useField } from "formik";
import { ComponentVisibility } from "../../visibility/component-visibility";

interface IInputFieldProps extends IBaseInputProps {
  label?: string;
  validate?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
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
  ...props
}: IInputFieldProps) => {
  const [field, meta] = useField({ name: name, type: props.type });
  const error = meta.error;
  const touched = meta.touched;

  return (
    <div {...containerProps}>
      <Label className="mb-0" htmlFor={name}>
        {label}
      </Label>
      <BaseInput {...props} {...field} error={error} touched={touched} />
      <ErrorMessage name={name || ""} />
    </div>
  );
};

const UnvalidatedInput = ({
  label,
  containerProps,
  ...props
}: IInputFieldProps) => {
  return (
    <div {...containerProps}>
      <ComponentVisibility visible={!!label}>
        <Label className="mb-0" htmlFor={props.name}>
          {label}
        </Label>
      </ComponentVisibility>
      <BaseInput {...props} />
    </div>
  );
};
