import IMAGE_PATHS from "@/assets/images";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@solarverse/ui";
import { InputField } from "@solarverse/ui";
import { PasswordField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { useState } from "react";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import { Image } from "@solarverse/ui";

export default function Signup() {
  const { passwordValidation, emailValidation } = schemaValidation;
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
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
      // Show toast
      setShowToast(true);

      // Auto-hide toast after 3 seconds
      setTimeout(() => {
        setShowToast(false);
        // redirect to reset-confirm page
        navigate(ROUTE_KEYS.USER_OPTION);
      }, 5000);

      resetForm();
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
    <div className="w-full mx-auto flex flex-col justify-center items-center bg-white h-fit">
      {/* Toast Notification */}
      <div
        className={`flex w-full max-w-[294px] h-[40px] md:!max-w-[383px] p-[15px] rounded-[10px] mt-[10px] border bg-[#45E26F]/12 border-[#45E26F] justify-center items-center lg:!ml-[180px]
        transition-all duration-700 ease-in-out
        ${
          showToast
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }
        `}
      >
        <Typography.body1
          weight={"medium"}
          className="tracking-[1.5%] text-[#000000]"
        >
          A verification link has been sent to your email
        </Typography.body1>
      </div>
      <div className="flex flex-col md:!flex-row w-full max-w-6xl h-[1004px] p-6 md:!p-10 gap-8 md:!gap-[93px]">
        {/* Left side - form */}
        <div className="flex flex-col w-full max-w-[320px] mx-auto items-center">
          <div className="w-full max-w-fit h-fit md:!h-fit  mb-6">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full max-w-[100px] md:!max-w-[200px] h-fit"
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
                containerClassName="w-full max-w-[22px] h-fit"
              />
              <span className="text-lg font-normal text-[#111214]">
                Sign up with Google
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
                containerClassName="w-full max-w-[22px] h-fit"
              />
              <span className="text-lg font-normal text-[#111214]">
                Sign up with Facebook
              </span>
            </button>

            <p className="text-[18px] font-medium text-[#111214]">or</p>
            <div className="flex flex-col gap-[25px] w-full">
              <div className="flex items-center flex-col gap-[12px] w-[276px] h-fit">
                <Typography.h2
                  className=" tracking-[1%] text-[#111214]"
                  weight={"bold"}
                >
                  Sign Up with Email
                </Typography.h2>
                <Typography.body1 className="font-normal text-[18px] tracking-[1%] text-center text-[#5A5F61]">
                  Please enter email and password to create an account
                </Typography.body1>
              </div>

              <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit} className="space-y-4 w-full">
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

                  <Button.PrimarySolid className="w-full mt-6  " type="submit">
                    Continue
                  </Button.PrimarySolid>
                </Form>
              </FormikProvider>

              <Typography.body1 weight={"medium"} className="text-center">
                Already a user?{" "}
                <Link to="/sign-in" className="text-primary ">
                  Login
                </Link>
              </Typography.body1>
            </div>
          </div>
        </div>

        {/* Right side - image */}
        <div className="hidden lg:!block  w-full max-w-[875px] h-[1000px]">
          <Image
            containerClassName="w-full h-[850px]"
            className="rounded-[20px]"
            src={IMAGE_PATHS.installerImg}
            alt="installer-image"
          />
        </div>
      </div>
    </div>
  );
}
