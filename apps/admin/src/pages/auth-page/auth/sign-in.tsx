import { Link } from "react-router-dom";
import { InputField } from "@solarverse/ui";
import { PasswordField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { USER_TYPE } from "@/lib/constants";
import IMAGE_PATHS from "@/assets/images";
import { Image } from "@solarverse/ui";
import { Button } from "@solarverse/ui";

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
        profile: USER_TYPE.ADMIN, // or "home" — this would normally come from backend
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
    <div
      className="w-full mx-auto flex items-center justify-center bg-[#FFFFFF] max-w-[1440px] p-6 h-screen md:!h-[942px] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGE_PATHS.adminLoginBackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-white opacity-[0.44]"></div>
      <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full z-10 h-[620px] md:!h-[756px] max-w-[679px] p-6 rounded-[25px] md:!rounded-[50px] shadow-lg">
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full z-10 h-[320px] max-w-[628px]">
          <div className="w-fit">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full max-w-[200px] h-[90px] sm:!h-[115px] sm:!max-w-[295px] object-contain"
            />
          </div>

          <div className="flex items-center flex-col  w-[276px] h-fit">
            <Typography.h2
              className="tracking-[1%] text-[#111214]"
              weight={"bold"}
            >
              Login with Email
            </Typography.h2>
            <Typography.body1 className="font-normal text-center text-[18px] tracking-[1%] text-[#5A5F61]">
              Please enter email and password to login to your account
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
                  className="w-full h-12 text-white"
                  type="submit"
                >
                  Log in
                </Button.PrimarySolid>

                <Link to="/reset-password">
                  <Typography.body1
                    variant={"secondary"}
                    className="underline "
                    weight={"medium"}
                  >
                    Reset password?
                  </Typography.body1>
                </Link>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
}
