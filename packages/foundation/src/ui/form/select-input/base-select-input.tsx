import { VariantProps } from "class-variance-authority";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select-input-primitives";
import { selectInputTheme } from "./theme";
import { cn } from "@/lib/utils";

export interface IBaseSelectInputProps
  extends VariantProps<typeof selectInputTheme> {
  options: { label: string; value: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  error?: string;
  touched?: boolean;
}

const BaseSelectInput = ({
  options,
  placeholder,
  value,
  onChange,
  className = "w-full",
  variant,
  error,
  touched,
}: IBaseSelectInputProps) => {
  const fieldError = !!(error && touched);
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger
        value={value}
        options={options}
        placeholder={placeholder}
        variant={variant}
        className={className}
        fieldError={fieldError}
      >
        <SelectValue
          placeholder={
            <span
              className={cn({
                "text-black text-xs md:!text-base": value,
                "text-gray-400": value,
              })}
            >
              {placeholder}
            </span>
          }
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="border-b border-gray-200"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BaseSelectInput;
