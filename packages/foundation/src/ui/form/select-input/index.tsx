import BaseSelectInput, { IBaseSelectInputProps } from "./base-select-input";
import { Label } from "../label";
import { ErrorMessage } from "../error-message";
import { useField } from "formik";
import { cn } from "../../../lib/utils";

export interface ISlotSelectInputProps extends IBaseSelectInputProps {
  label: string;
  name: string;
  validate?: boolean;
}

export class SelectInput {
  static primary = (props: ISlotSelectInputProps) => {
    return <Select variant={"primary"} {...props} />;
  };
  static secondary = (props: ISlotSelectInputProps) => {
    return <Select variant={"secondary"} {...props} />;
  };
}

const Select = ({ validate, ...props }: ISlotSelectInputProps) => {
  const Component = validate ? ValidatedSelectInput : UnvalidatedSelectInput;

  return <Component {...props} />;
};

const ValidatedSelectInput = ({
  label,
  name,
  className,
  ...props
}: ISlotSelectInputProps) => {
  const [field, meta] = useField({ name, type: "" });

  const handleChange = (value: string) => {
    field.onChange(name)(value);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <Label className="mb-2" htmlFor={name}>
        {label}
      </Label>
      <BaseSelectInput
        {...props}
        {...field}
        error={meta.error}
        touched={meta.touched}
        onChange={handleChange}
      />
      <ErrorMessage name={name || ""} />
    </div>
  );
};

const UnvalidatedSelectInput = ({ label, ...props }: ISlotSelectInputProps) => {
  return (
    <div>
      <Label className="mb-2" htmlFor={props.name}>
        {label}
      </Label>
      <BaseSelectInput {...props} />
    </div>
  );
};
