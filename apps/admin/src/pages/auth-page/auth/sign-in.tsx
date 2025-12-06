import { Link } from "react-router-dom";
import { InputField, successToast } from "@solarverse/ui";
import { PasswordField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { USER_TYPE } from "@/lib/constants";
import IMAGE_PATHS from "@/assets/images";
import { Image } from "@solarverse/ui";
import { Button } from "@solarverse/ui";
import useLoginMutation from "@/lib/services/api/auth/login.api";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";

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
      const req = loginMutation({
        email: values.email,
        password: values.password,
      });
      const res = await req;
      const accessToken = res.data?.tokens.access;
      // const refreshToken = res.data?.tokens.refresh;

      if (accessToken) {
        login({ token: accessToken, userType: USER_TYPE.SUPER_ADMIN });
        successToast("Login successful");
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
      <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full z-10 h-[620px] md:!h-[756px] max-w-[679px] p-6 rounded-[25px] md:!rounded-[50px] shadow-lg">
        <div className="flex flex-col items-center justify-center bg-[#FFFFFF] w-full z-10 h-[320px] max-w-[628px]">
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
              Login with Email
            </Typography.h2>
            <Typography.body1 className="font-normal pt-2 pb-5 text-[18px] tracking-[1%] text-[#5A5F61]">
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
                  loading={isPending}
                >
                  Log in
                </Button.PrimarySolid>

                <Link to={ROUTE_KEYS.FORGOT_PASSWORD}>
                  <Typography.body1
                    variant={"secondary"}
                    className="underline "
                    weight={"medium"}
                  >
                    Forgot password?
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
