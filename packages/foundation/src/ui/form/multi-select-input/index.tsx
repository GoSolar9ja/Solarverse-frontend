import { cn } from "@/lib/utils";
import { Label } from "../label";
import {
  BaseMultiSelectInput,
  IBaseMultiSelectInput,
} from "./base-multi-select-input";
import { FieldArray, useField } from "formik";
import { ErrorMessage } from "../error-message";

export interface IMultiSelectInput extends IBaseMultiSelectInput {
  validate?: boolean;
  name?: string;
  label?: string;
}

export class MultiSelectInput {
  static primary = (props: IMultiSelectInput) => {
    return <Select variant={"primary"} {...props} />;
  };
  static secondary = (props: IMultiSelectInput) => {
    return <Select variant={"secondary"} {...props} />;
  };
}

const Select = ({ validate, ...props }: IMultiSelectInput) => {
  const Component = validate
    ? ValidatedMultiSelectInput
    : UnValidatedMultiSelectInput;

  return <Component {...props} />;
};

const ValidatedMultiSelectInput = (props: IMultiSelectInput) => {
  const { name, label, className } = props;
  const [field, meta] = useField({ name });

  const selectedValues = field.value || [];

  return (
    <FieldArray name={field.name}>
      {({ push, remove }) => (
        <div className={cn("space-y-2", className)}>
          <Label className="lg:mb-0 mb-2" htmlFor={name}>
            {label}
          </Label>

          <BaseMultiSelectInput
            {...props}
            {...meta}
            {...field}
            fieldError={!!meta.error}
            value={selectedValues}
            onChange={(value) =>
              selectedValues.includes(value)
                ? remove(selectedValues.findIndex((v: string) => v === value))
                : push(value)
            }
          />
          <ErrorMessage name={name || ""} />
        </div>
      )}
    </FieldArray>
  );
};

const UnValidatedMultiSelectInput = (props: IMultiSelectInput) => {
  const { label, ...rest } = props;
  return (
    <div>
      <Label className="lg:mb-0 mb-2" htmlFor={props.name}>
        {label}
      </Label>
      <BaseMultiSelectInput {...rest} />
    </div>
  );
};
