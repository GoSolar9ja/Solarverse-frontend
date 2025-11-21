import IMAGE_PATHS from "@/assets/images";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, successToast } from "@solarverse/ui";
import { InputField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { Image } from "@solarverse/ui";
import useRequestPasswordResetMutation from "@/lib/services/api/auth/request-password-reset.api";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";

export default function Forgotpassword() {
  const { emailValidation } = schemaValidation;
  const navigate = useNavigate();
  const {
    mutateAsync: requestPasswordReset,
    isPending,
    isSuccess,
  } = useRequestPasswordResetMutation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: createValidationSchema({
      email: emailValidation(),
    }),
    onSubmit: async (values) => {
      console.log("Form submitted:", values);
      const req = await requestPasswordReset(values);
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
    <div className="w-full ">
      {isSuccess && (
        <Alert.success
          description="Password reset link sent to your email"
          usePortal
        />
      )}
      <div>
        <Link to="/sign-in">
          <button className="bg-[#F5F5F5] mb-7 rounded-[5px] border border-[#C1C6C5]/50 flex items-center justify-center w-full md:!h-[64px] max-w-[100px] h-[44px] p-[20px] cursor-pointer gap-4 md:!max-w-[143px]">
            <Image
              src={IMAGE_PATHS.arrrowBackImg}
              alt="back arrow icon"
              containerClassName="w-full max-w-[20px] object-contain"
            />
            <Typography.body1
              weight={"medium"}
              className="tracking-[1.5%] text-[#111214]"
            >
              Back
            </Typography.body1>
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-[25px] w-full max-w-[295px]">
        <div className="flex flex-col gap-[12px] w-full max-w-[276px] h-fit">
          <Typography.h2
            className=" tracking-[1%] text-[#111214]"
            weight={"bold"}
          >
            Can’t remember your password?
          </Typography.h2>
          <Typography.body1 className="font-normal text-[18px] w-full max-w-[250px] tracking-[1%] leading-[100%] text-[#5A5F61]">
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
      </div>
    </div>
  );
}
