import { Link } from "react-router-dom";
import { InputField } from "@solar-verse/ui";
import { PasswordField } from "@solar-verse/ui";
import { createValidationSchema, schemaValidation } from "@solar-verse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solar-verse/ui";

import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { USER_TYPE } from "@/lib/constants";
import IMAGE_PATHS from "@/assets/images";
import { Image } from "@solar-verse/ui";
import { Button } from "@solar-verse/ui";

export default function Signin() {
  const { passwordValidation, emailValidation } = schemaValidation;

  const { login } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: createValidationSchema({
      email: emailValidation(),
      password: passwordValidation().required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);

      // 🔹 Mock backend auth (replace with API call later)
      const mockUser = {
        email: values.email,
        token: "fake-jwt-token",
        profile: USER_TYPE.HOME_OWNER, // or "home" — this would normally come from backend
      };

      login({ token: mockUser.token, userType: mockUser.profile });
      // Save to localStorage

      // Update context

      resetForm();

      // Redirect to dashboard (Protected route)
    },
  });

  const { handleSubmit } = formik;

  // Handlers for social login (replace with backend/OAuth integration later)
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // e.g. window.location.href = "/api/auth/google";
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login clicked");
    // e.g. window.location.href = "/api/auth/facebook";
  };

  return (
    <div className="w-full mx-auto flex flex-1 justify-center items-center bg-white h-fit">
      <div className="flex flex-col md:!flex-row w-full max-w-6xl h-[1004px] p-6 md:!p-10 gap-8 md:!gap-[93px]">
        {/* Left side - form */}
        <div className="flex flex-col w-full max-w-[320px] mx-auto items-center">
          <div className=" mb-6">
            <Image
              src={IMAGE_PATHS.logoImg}
              alt="App logo"
              containerClassName="w-full max-w-[250px] h-[90px] md:!h-[115] md:!max-w-[295px]"
            />
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            {/* Google button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center gap-4 w-full border border-[#C1C6C5] cursor-pointer px-6 py-3 bg-gray-100/50 rounded-full justify-center"
            >
              <Image
                src={IMAGE_PATHS.googleImg}
                alt="google-logo"
                containerClassName="w-5 h-5"
              />
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
              <Image
                src={IMAGE_PATHS.facebookImg}
                alt="facebook-logo"
                containerClassName="w-5 h-5"
              />
              <span className="text-lg font-normal text-[#111214]">
                Sign in with Facebook
              </span>
            </button>

            <p className="text-[18px] font-medium text-[#111214]">or</p>
            <div className="flex flex-col gap-[25px] ">
              <div className="flex items-center flex-col gap-[12px] w-[276px] h-fit">
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
                <Form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <InputField.primary
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    rounded="full"
                    className="w-full h-12"
                    validate
                  />
                  <PasswordField
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    rounded="full"
                    className="w-full h-12"
                    validate
                  />

                  <div className="flex flex-col items-center gap-6 pt-4 w-full">
                    <Button.PrimarySolid
                      className="w-full h-12 text-white "
                      type="submit"
                    >
                      Submit
                    </Button.PrimarySolid>
                    <Link
                      to="/forgot-password"
                      className="font-semibold text-[14px] md:!text-lg underline text-[#E49F13]"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </Form>
              </FormikProvider>

              <h4 className="font-semibol inline-flex gap-2 mt-8 text-lg text-center">
                Not yet a user?
                <Link to="/sign-up" className="text-primary font-semibold">
                  Create an Account
                </Link>
              </h4>
            </div>
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
    </div>
  );
}
