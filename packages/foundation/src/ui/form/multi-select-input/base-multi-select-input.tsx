import { Popover, PopoverContent, PopoverTrigger } from "@/ui/overlay/popover";
import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/ui/command";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ComponentVisibility } from "@/ui/visibility/component-visibility";
import { selectInputTheme } from "../select-input/theme";
import { IBaseSelectInputProps } from "../select-input/base-select-input";

export interface IBaseMultiSelectInput
  extends Omit<IBaseSelectInputProps, "value"> {
  value?: string[];
}

export function BaseMultiSelectInput({
  variant,
  className,
  rounded,
  fieldError,
  value = [],
  onChange,
  options = [],
  placeholder = "Select an option",
}: IBaseMultiSelectInput) {
  const selectedValues = options.filter((item) => value.includes(item.value));

  return (
    <Popover>
      <PopoverTrigger
        className={selectInputTheme({
          className: cn(
            "data-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground   dark:hover:bg-input/50 py-3 flex  items-center  gap-2 px-5  disabled:cursor-not-allowed disabled:opacity-50  *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-primary outline flex-wrap w-full",
            value.length > 0 && "h-auto",
            className
          ),
          variant,
          fieldError,
          rounded,
        })}
      >
        <>
          <ComponentVisibility visible={value.length > 0}>
            {selectedValues.map((item) => (
              <p
                key={item.value}
                className="border border-blue-400 text-blue-400 text-[9px] py-1 px-2"
              >
                {item.label}
              </p>
            ))}
          </ComponentVisibility>
          <ComponentVisibility visible={value.length === 0}>
            <p className="text-gray-400">{placeholder}</p>
          </ComponentVisibility>
        </>
      </PopoverTrigger>
      <PopoverContent
        className="min-w-(--radix-popover-trigger-width) bg-white p-0"
        align="start"
      >
        <Command className="w-full max-h-[400px]">
          <CommandInput placeholder="Search framework..." className="h-9 " />
          <CommandList>
            <CommandEmpty>No Items found.</CommandEmpty>
            <CommandGroup>
              {options.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={onChange}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedValues.find(
                        (selected) => selected.value === item.value
                      )
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
