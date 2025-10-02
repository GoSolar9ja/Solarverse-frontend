import React, { useRef } from "react";
import { UploadCloudIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "../label";
import { ComponentVisibility } from "@/ui/visibility/component-visibility";

const BaseUploadField = (props: {
  fieldProps: React.ComponentProps<"input"> & {
    error?: string;
    touched?: boolean;
    label?: React.ReactNode;
    value?: File[];
  };
  children?({ onClick }: { onClick(): void }): React.ReactNode;
}) => {
  const {
    className,
    error,
    touched,
    label = "Select a file",
    accept = "image/png,image/jpeg,application/pdf",
    value,
    ...rest
  } = props.fieldProps;

  const files = value ? Array.from(value as unknown as File[]) : [];
  const fieldError = !!(error && touched);

  const ref = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    ref.current?.click();
  };
  return (
    <>
      <input ref={ref} type="file" accept={accept} {...rest} hidden />
      <ComponentVisibility visible={!props.children}>
        <div
          onClick={handleClick}
          className={cn(
            "border border-dashed rounded-full p-5 bg-[#FBFBFB] w-full flex  gap-3 items-center justify-center",
            fieldError ? "border-red-500" : "border-[#1312124D]",
            className
          )}
        >
          <UploadCloudIcon />
          <Label htmlFor={rest.name} size={"body2"} className="text-[#111214]">
            {files?.length
              ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
              : label}
          </Label>
        </div>
      </ComponentVisibility>
      <ComponentVisibility visible={!!props.children}>
        {props.children?.({ onClick: handleClick })}
      </ComponentVisibility>
    </>
  );
};

export default BaseUploadField;
