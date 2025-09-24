import { FieldArray, useField } from "formik";
import BaseUploadField from "./base-upload-field";
import { ErrorMessage } from "../error-message";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface IUploadFieldProps {
  validate?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  fieldProps?: React.ComponentProps<"input"> & {
    label?: React.ReactNode;
    value?: File[];
    onChange?: (files: File[]) => void;
  };
}

const UploadField = ({ validate, ...props }: IUploadFieldProps) => {
  const Component = validate ? ValidatedUploadField : UnvalidatedUploadField;
  return <Component {...props} />;
};

export { UploadField };

const ValidatedUploadField = (props: IUploadFieldProps) => {
  const { fieldProps, containerProps } = props;
  const { name, ...restFieldProps } = fieldProps || {};
  const [field, meta] = useField({ name });
  const error = meta.error;
  const touched = meta.touched;

  // console.log("field", field.value);
  const files = field.value?.flat();

  return (
    <div {...containerProps}>
      <FieldArray name={name || ""}>
        {({ remove, push }) => (
          <>
            <BaseUploadField
              error={error}
              touched={touched}
              {...field}
              {...restFieldProps}
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                for (let i = 0; i < files.length; i++) {
                  push([files[i]]);
                }
              }}
            />
            <div className="flex gap-2 flex-wrap mt-3">
              <AnimatePresence>
                {files?.map((file: File, index: number) => {
                  return (
                    <motion.div
                      key={file.name + index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="text-center px-3 py-2 bg-[#FBFBFB] border-[#1312122E] border rounded-md relative"
                        key={file.name}
                      >
                        <p className="text-xs">{file.name}</p>
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="absolute -top-3 -right-3 bg-[#D5F3FF] rounded-full p-1"
                        >
                          <XIcon className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </>
        )}
      </FieldArray>

      <ErrorMessage name={name || ""} />
    </div>
  );
};

const UnvalidatedUploadField = (props: IUploadFieldProps) => {
  const { fieldProps } = props;
  return (
    <>
      <BaseUploadField {...fieldProps} />
      {/* <ErrorMessage name={fieldProps?.name || ""} /> */}
    </>
  );
};
