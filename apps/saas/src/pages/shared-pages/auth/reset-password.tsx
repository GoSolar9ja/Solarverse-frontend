import { Button } from "@solarverse/ui";
import { PasswordField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useQueryParams } from "@solarverse/hooks";
import useResetPasswordMutation from "@/lib/services/api/auth/reset-password.api";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";

export default function Resetpassword() {
  const { getParam } = useQueryParams();
  const token = getParam("token") || "";
  const navigate = useNavigate();
  const { mutateAsync: resetPassword, isPending } = useResetPasswordMutation();
  const { passwordValidation, matchFieldValidation } = schemaValidation;

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: createValidationSchema({
      password: passwordValidation().required("Password is required"),
      confirmPassword: matchFieldValidation({
        fieldName: "password",
        errorMessages: { fieldMatchError: "Passwords do not match" },
      }).required("Please confirm your password"),
    }),
    onSubmit: async (values) => {
      await resetPassword({ token, newPassword: values.confirmPassword });
      toast.success("Password reset successful!");
      navigate(ROUTE_KEYS.SIGN_IN);
      // Redirect after toast
    },
  });

  const { handleSubmit } = formik;

  return (
    <div className="flex flex-col gap-[25px] w-full">
      <div className="flex flex-col gap-[12px]  h-fit">
        <Typography.h2 className="tracking-[1%] text-[#111214]" weight={"bold"}>
          Reset Password
        </Typography.h2>
        <Typography.body1 className="font-normal tracking-[1.5%] text-[#5A5F61]">
          Kindly enter and confirm your new password below.
        </Typography.body1>
      </div>

      <FormikProvider value={formik}>
        <Form onSubmit={handleSubmit} className="space-y-5 w-full ">
          <PasswordField
            name="password"
            placeholder="Enter new password"
            rounded="full"
            className="w-full h-12"
            validate
          />
          <PasswordField
            name="confirmPassword"
            placeholder="Confirm new password"
            rounded="full"
            className="w-full h-12"
            validate
          />

          <Button.PrimarySolid
            className="w-full cursor-pointer mt-7  text-white"
            type="submit"
            loading={isPending}
          >
            Reset
          </Button.PrimarySolid>
        </Form>
      </FormikProvider>
    </div>
  );
}
