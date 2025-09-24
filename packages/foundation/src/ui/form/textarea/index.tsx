import { Label } from "../label";
import BaseTextArea, { IBaseTextAreaProps } from "./base-textarea";
import { ErrorMessage } from "../error-message";
import { useField } from "formik";
import { ComponentVisibility } from "../../visibility/component-visibility";

interface ITextAreaFieldProps extends IBaseTextAreaProps {
  label?: string;
  validate?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

class TextAreaField {
  static primary = (props: Omit<ITextAreaFieldProps, "variant">) => {
    const { validate, ...rest } = props;

    return <Input validate={validate} variant="primary" {...rest} />;
  };
  static secondary = (props: Omit<ITextAreaFieldProps, "variant">) => {
    const { validate, ...rest } = props;

    return <Input validate={validate} variant="secondary" {...rest} />;
  };
}

export { TextAreaField };

const Input = ({ validate, ...props }: ITextAreaFieldProps) => {
  const Component = validate ? ValidatedInput : UnvalidatedInput;

  return <Component {...props} />;
};

const ValidatedInput = ({
  label,
  name,
  containerProps,
  ...props
}: ITextAreaFieldProps) => {
  const [field, meta] = useField({ name: name, type: props.type });
  const error = meta.error;
  const touched = meta.touched;
  return (
    <div {...containerProps}>
      <Label className="mb-0" htmlFor={name}>
        {label}
      </Label>
      <BaseTextArea {...field} {...props} error={error} touched={touched} />
      <ErrorMessage name={name || ""} />
    </div>
  );
};

const UnvalidatedInput = ({
  label,
  containerProps,
  ...props
}: ITextAreaFieldProps) => {
  return (
    <div {...containerProps}>
      <ComponentVisibility visible={!!label}>
        <Label className="mb-0" htmlFor={props.name}>
          {label}
        </Label>
      </ComponentVisibility>
      <BaseTextArea {...props} />
    </div>
  );
};
