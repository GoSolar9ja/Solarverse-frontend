import { Link } from "react-router-dom";
import { InputField, successToast } from "@solarverse/ui";
import { PasswordField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { Button } from "@solarverse/ui";
import useLoginMutation from "@/lib/services/api/auth/login.api";
import { baseURL } from "@/lib/services/config/axios-instance";
import GoogleIcon from "@/assets/svgs/google-icon.svg?react";
import FacebookIcon from "@/assets/svgs/facebook-icon.svg?react";
export default function Signin() {
  const { passwordValidation, emailValidation } = schemaValidation;
  const { login } = useAuthContext();
  const { mutateAsync: loginMutation, isPending } = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: createValidationSchema({
      email: emailValidation(),
      password: passwordValidation().required("Password is required"),
    }),
    onSubmit: async (values) => {
      // console.log("Form submitted:", values);
      const req = loginMutation({
        email: values.email,
        password: values.password,
      });
      const res = await req;
      const accessToken = res.data?.tokens.access;
      // const refreshToken = res.data?.tokens.refresh;

      if (accessToken) {
        login({ token: accessToken });
        successToast("Login successful");
      }
    },
  });

  const { handleSubmit } = formik;

  // Handlers for social login (replace with backend/OAuth integration later)
  const handleGoogleLogin = () => {
    window.open(`${baseURL}/api/v1/auth/google`, "_blank");
  };

  const handleFacebookLogin = () => {
    window.open(`${baseURL}/api/v1/auth/facebook`, "_blank");
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* Google button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex items-center gap-4 w-full border border-[#C1C6C5] cursor-pointer px-6 py-3 bg-gray-100/50 rounded-full justify-center"
      >
        <GoogleIcon />

        <span className="text-lg font-normal text-[#111214]">
          Sign in with Google
        </span>
      </button>

      {/* Facebook button */}
      <button
        type="button"
        onClick={handleFacebookLogin}
        className="flex items-center gap-4 w-full border border-[#C1C6C5]/50 cursor-pointer px-6 py-3 bg-[#1877F2]/10 rounded-full justify-center"
      >
        <FacebookIcon />
        <span className="text-lg font-normal text-[#111214]">
          Sign in with Facebook
        </span>
      </button>

      <p className="text-[18px] font-medium text-[#111214]">or</p>

      <div className="flex flex-col gap-[25px] w-full">
        <div className="flex text-center items-center flex-col gap-[12px]  h-fit">
          <Typography.h2
            className=" tracking-[1%] text-[#111214]"
            weight={"bold"}
          >
            Login with Email
          </Typography.h2>
          <Typography.body1 className="font-normal text-center text-[18px] tracking-[1%] text-[#5A5F61]">
            Please enter email and password to login to your account
          </Typography.body1>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="space-y-4 w-full ">
            <InputField.primary
              label="Email"
              name="email"
              placeholder="Enter your email"
              rounded="full"
              className="w-full "
              validate
            />
            <PasswordField
              label="Password"
              name="password"
              placeholder="Enter your password"
              rounded="full"
              className="w-full "
              validate
            />
            <div className="flex flex-col items-center gap-6 pt-4 w-full">
              <Button.PrimarySolid
                className="w-full  text-white "
                type="submit"
                loading={isPending}
              >
                Log in
              </Button.PrimarySolid>
              <Link to="/forgot-password">
                <Typography.body1
                  variant={"secondary"}
                  className="underline"
                  weight={"medium"}
                >
                  Forgot password?
                </Typography.body1>
              </Link>
            </div>
          </Form>
        </FormikProvider>

        <Typography.body1 className=" inline-flex mx-auto  gap-2  text-lg text-center">
          Not yet a user?
          <Link to="/sign-up" className="text-primary font-semibold">
            Create an Account
          </Link>
        </Typography.body1>
      </div>
    </div>
  );
}
