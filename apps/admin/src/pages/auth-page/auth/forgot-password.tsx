import { Button, InputField, successToast } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { useNavigate } from "react-router-dom";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import useRequestPasswordResetMutation from "@/lib/services/api/auth/request-password-reset.api";
import { USER_TYPE } from "@/lib/constants";

export default function Forgotpassword() {
  const navigate = useNavigate();
  const { emailValidation } = schemaValidation;

  const { mutateAsync: requestPasswordReset, isPending } =
    useRequestPasswordResetMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: createValidationSchema({
      email: emailValidation(),
    }),
    onSubmit: async (values) => {
      console.log("Form submitted:", values);
      const req = await requestPasswordReset({
        ...values,
        role: USER_TYPE.ADMIN,
      });
      successToast("Password reset link sent to your email");
      const resetUrl = req.data;
      if (resetUrl) {
        const tokenParam = resetUrl.split("/reset-password")[1];

        navigate(ROUTE_KEYS.RESET_PASSWORD + tokenParam);
      }
    },
  });

  const { handleSubmit } = formik;

  return (
    <div
      className="w-full mx-auto flex items-center justify-center bg-[#FFFFFF]  p-6 min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGE_PATHS.adminLoginBackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-white opacity-[0.44]"></div>
      <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full z-10  max-w-[679px] p-6 rounded-[25px] md:!rounded-[50px] shadow-lg">
        <div className="flex flex-col items-center justify-center  w-full z-10 py-20 max-w-[294.5px]">
          <div className="w-fit">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full max-w-[200px] h-[90px] sm:!h-[115px] sm:!max-w-[295px] object-contain"
            />
          </div>

          <FormikProvider value={formik}>
            <div className="flex flex-col gap-[12px] w-full max-w-[300px] items-center h-fit">
              <Typography.h2
                className=" tracking-[1%] text-[#111214] "
                weight={"bold"}
              >
                Can't remember your password?
              </Typography.h2>
              <Typography.body1 className="font-normal text-[18px] w-full  tracking-[1%] leading-[100%] text-[#5A5F61] mb-5">
                Uh oh! Please provide your email to reset the password.
              </Typography.body1>
            </div>

            <FormikProvider value={formik}>
              <Form
                onSubmit={handleSubmit}
                className="space-y-6 w-full max-w-[294.5px]"
              >
                <InputField.primary
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  rounded="full"
                  className="w-full h-12"
                  validate
                />
                <div className="flex flex-col items-center gap-6 pt-4 w-full">
                  <Button.PrimarySolid
                    className="w-full h-12 font-semibold text-white "
                    type="submit"
                    loading={isPending}
                  >
                    Reset
                  </Button.PrimarySolid>
                </div>
              </Form>
            </FormikProvider>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
