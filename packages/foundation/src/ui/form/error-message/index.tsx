import { connect, getIn, useFormikContext } from "formik";
import { FC } from "react";

interface IInputMessageProps {
  name: string;
}

// This component renders an error message if a field has
// an error and it's already been touched.
const InputErrorMessage = (props: IInputMessageProps) => {
  const form = useFormikContext();
  // All FormikProps available on props.formik!
  const error = getIn(form.errors, props.name);
  const touch = getIn(form.touched, props.name);
  // const dirty = getIn(form.dirty, props.name);
  const submitCount = form.submitCount;
  // console.log('error', error);
  // console.log('touch', touch);
  // console.log('dirty', dirty);
  return touch && error && submitCount > 0 ? (
    <p className="text-red-500 text-sm mt-[3px]">{error}</p>
  ) : null;
};

const ErrorMessage: FC<IInputMessageProps> = connect(InputErrorMessage);

export { ErrorMessage };
