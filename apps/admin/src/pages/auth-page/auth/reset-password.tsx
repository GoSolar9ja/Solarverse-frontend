import { Button } from "@solar-verse/ui";
import { PasswordField } from "@solar-verse/ui";
import { createValidationSchema, schemaValidation } from "@solar-verse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solar-verse/ui";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Image } from "@solar-verse/ui";
import IMAGE_PATHS from "@/assets/images";

export default function Resetpassword() {
  const navigate = useNavigate();
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
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);

      toast.success("Password reset successful!");

      resetForm();

      // Redirect after toast
      setTimeout(() => {
        navigate("/sign-in");
      }, 5000);
    },
  });

  const { handleSubmit } = formik;

  return (
    <div className="w-full mx-auto flex flex-1 justify-center items-center bg-white h-fit">
      <div className="flex flex-col md:!flex-row w-full max-w-6xl p-6 md:!p-10 gap-8 md:!gap-[93px]">
        {/* Left side - form */}
        <div className="flex flex-col w-full max-w-[320px] mx-auto items-center">
          <div className="w-full max-w-[250px] h-[90px] md:!h-[115] md:!max-w-[295px] mb-6">
            <Image
              src={IMAGE_PATHS.logoImg}
              alt="App logo"
              containerClassName="w-full"
            />
          </div>

          <div className="flex flex-col gap-[25px] ">
            <div className="flex flex-col gap-[12px] w-[276px] h-fit">
              <Typography.h2
                className="tracking-[1%] text-[#111214]"
                weight={"bold"}
              >
                Reset Password
              </Typography.h2>
              <Typography.body1 className="font-normal tracking-[1.5%] text-[#5A5F61]">
                Kindly enter and confirm your new password below.
              </Typography.body1>
            </div>

            <FormikProvider value={formik}>
              <Form onSubmit={handleSubmit} className="space-y-3 w-full ">
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
                  className="w-full cursor-pointer mt-13 h-12 text-white"
                  type="submit"
                  size="md"
                >
                  Reset
                </Button.PrimarySolid>
              </Form>
            </FormikProvider>
          </div>
        </div>

        {/* Right side - image */}
        <div className="hidden lg:!block w-full max-w-[875px] h-[1000px]">
          <Image
            containerClassName="w-full h-[850px]"
            src={IMAGE_PATHS.installerImg}
            alt="installer-image"
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
