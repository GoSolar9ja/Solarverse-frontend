import React, { useRef } from "react";
import { UploadCloudIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "../label";

const BaseUploadField = (
  props: React.ComponentProps<"input"> & {
    error?: string;
    touched?: boolean;
    label?: React.ReactNode;
    value?: File[];
  }
) => {
  const {
    className,
    error,
    touched,
    label = "Upload a file",
    accept = "image/png,image/jpeg,application/pdf",
    value,
    ...rest
  } = props;

  const files = value ? Array.from(value as unknown as File[]) : [];
  const fieldError = !!(error && touched);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <input ref={ref} type="file" accept={accept} {...rest} hidden />
      <div
        onClick={() => ref.current?.click()}
        className={cn(
          "border border-dashed rounded-lg p-5 bg-[#FBFBFB] w-full flex flex-col items-center justify-center",
          fieldError ? "border-red-500" : "border-[#1312124D]",
          className
        )}
      >
        <UploadCloudIcon className="mb-3" />
        <Label htmlFor={rest.name} size={"body2"} className="text-[#111214]">
          {files?.length
            ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
            : label}
        </Label>
      </div>
    </>
  );
};

export default BaseUploadField;
