import { FieldArray, useField } from "formik";
import BaseUploadField from "./base-upload-field";
import { ErrorMessage } from "../error-message";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentVisibility } from "@/ui/visibility/component-visibility";

interface IUploadFieldProps {
  validate?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  children?({ onClick }: { onClick(): void }): React.ReactNode;
  fieldProps?: React.ComponentProps<"input"> & {
    label?: React.ReactNode;
    value?: File[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  showUploadList?: boolean;
}

const UploadField = ({
  validate,
  showUploadList = true,
  ...props
}: IUploadFieldProps) => {
  const Component = validate ? ValidatedUploadField : UnvalidatedUploadField;
  return <Component {...props} showUploadList={showUploadList} />;
};

export { UploadField };

const ValidatedUploadField = (props: IUploadFieldProps) => {
  const { fieldProps, containerProps, showUploadList, children } = props;
  const { name, multiple, ...restFieldProps } = fieldProps || {};
  const [field, meta, helper] = useField({ name });
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
              fieldProps={{
                error,
                touched,
                ...field,
                onChange: (e) => {
                  const files = Array.from(e.target.files || []);
                  if (multiple) {
                    for (let i = 0; i < files.length; i++) {
                      push([files[i]]);
                    }
                  } else {
                    helper.setValue([files[0]]);
                  }
                },
                multiple,
                ...restFieldProps,
              }}
              // eslint-disable-next-line react/no-children-prop
              children={children}
            />
            <ComponentVisibility visible={!!showUploadList}>
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
                            className="absolute -top-3 -right-3 bg-gray-100 rounded-full p-1"
                          >
                            <XIcon className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </ComponentVisibility>
          </>
        )}
      </FieldArray>

      <ErrorMessage name={name || ""} />
    </div>
  );
};

const UnvalidatedUploadField = (props: IUploadFieldProps) => {
  const { fieldProps, children } = props;
  return (
    <>
      <BaseUploadField fieldProps={{ ...fieldProps }} children={children} />
      {/* <ErrorMessage name={fieldProps?.name || ""} /> */}
    </>
  );
};
