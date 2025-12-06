import { Button } from "@solarverse/ui";
import { PasswordField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
import { useQueryParams } from "@solarverse/hooks";
import useResetPasswordMutation from "@/lib/services/api/auth/reset-password.api";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";

export default function Resetpassword() {
  const { getParam } = useQueryParams();

  const navigate = useNavigate();
  const { passwordValidation, matchFieldValidation } = schemaValidation;
  const token = getParam("token") || "";
  const { mutateAsync: resetPassword, isPending } = useResetPasswordMutation();
  const formik = useFormik({
    initialValues: {
      // currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: createValidationSchema({
      // currentPassword: passwordValidation().required(
      //   "Please enter current password"
      // ),
      newPassword: passwordValidation().required(
        "Please enter current password"
      ),
      confirmPassword: matchFieldValidation({
        fieldName: "newPassword",
        errorMessages: { fieldMatchError: "Passwords do not match" },
      }).required("Please confirm new password"),
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
    <div
      className="w-full mx-auto flex items-center justify-center bg-[#FFFFFF]  p-6 min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGE_PATHS.adminLoginBackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-white opacity-[0.44]"></div>
      <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full z-10 max-w-[679px] p-6 rounded-[25px] md:!rounded-[50px] shadow-lg">
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full z-10  py-20 max-w-[294.5px]">
          <div className="w-fit">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full max-w-[200px] h-[90px] sm:!h-[115px] sm:!max-w-[295px] object-contain"
            />
          </div>

          <div className="flex items-center flex-col   h-fit">
            <Typography.h2
              className="tracking-[1%] text-[#111214]"
              weight={"bold"}
            >
              Reset Password
            </Typography.h2>
            <Typography.body1 className="font-normal text-[18px] tracking-[1%] text-[#5A5F61] pb-5 pt-2">
              Kindly fill in the information below to reset your password
            </Typography.body1>
          </div>

          <FormikProvider value={formik}>
            <Form onSubmit={handleSubmit} className="space-y-6 w-full ">
              {/* <PasswordField
                label="Current Password"
                name="currentPassword"
                placeholder="Enter current password"
                rounded="full"
                className="w-full h-12"
                validate
              /> */}
              <PasswordField
                label="New Password"
                name="newPassword"
                placeholder="Enter new password"
                rounded="full"
                className="w-full h-12"
                validate
              />
              <PasswordField
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm new password"
                rounded="full"
                className="w-full h-12"
                validate
              />

              <div className="flex flex-col items-center gap-6 pt-4 w-full">
                <Button.PrimarySolid
                  className="w-full h-12 text-white"
                  type="submit"
                  loading={isPending}
                >
                  Reset Password
                </Button.PrimarySolid>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
