// import { useNavigate } from "react-router-dom";
import { Button, ErrorMessage } from "@solarverse/ui";
import { InputField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { Checkbox } from "@solarverse/ui";
import { useEffect } from "react";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
import BirthdayPicker from "@/components/common/birthday-picker";
import useUpdateProfileMutation from "@/lib/services/api/auth/update-profile.api";
import { USER_TYPE } from "@/lib/constants";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import useGetProfileQuery from "@/lib/services/api/auth/get-profile.api";

import useRequestOtpMutation from "@/lib/services/api/auth/request-otp.api";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import useVerifyOtpMutation from "@/lib/services/api/auth/verify-otp.api";
import { ArrowLeft } from "lucide-react";

const HomeOwnerOnboardingForm = () => {
  const { data } = useGetProfileQuery();
  const profile = data?.data;
  const { mutateAsync: updateProfile, isPending: isUpdatingProfile } =
    useUpdateProfileMutation();
  const { fieldValidation, phoneNumberValidation, booleanValidation } =
    schemaValidation;
  const navigate = useNavigate();

  const { mutateAsync: requestOtpMutation, isPending: isRequestingOtp } =
    useRequestOtpMutation();
  const { mutateAsync: verifyOtpMutation, isPending: isVerifyingOtp } =
    useVerifyOtpMutation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      birthday: undefined as Date | undefined,
      phone: "",
      otp: "",
      acceptTerms: false,
    },
    validationSchema: createValidationSchema({
      firstName: fieldValidation().required("First name is required"),
      lastName: fieldValidation().required("Last name is required"),
      gender: fieldValidation().required("Gender is required"),
      birthday: fieldValidation().required("Birthday is required"),
      phone: phoneNumberValidation().required("Phone number is required"),
      otp: fieldValidation()
        .length(6, "OTP must be 6 digits")
        .required("Click on Verify to generate OTP"),
      acceptTerms: booleanValidation().required("You must accept terms"),
    }),
    onSubmit: async (values) => {
      const { birthday, firstName, gender, lastName, phone } = values;

      const formattedPhone = phone.replace("0", "234");
      const dob = format(birthday || "", "yyyy-MM-dd");

      await verifyOtpMutation({
        mobile: formattedPhone,
        otp: values.otp,
      });

      await updateProfile(
        {
          dob,
          firstName,
          lastName,
          gender,
          mobile: formattedPhone,
          role: USER_TYPE.HOME_OWNER,
        },
        {
          onSuccess() {
            navigate(ROUTE_KEYS.HOME_OWNER_ROOT);
          },
        }
      );
    },
  });

  const { handleSubmit } = formik;

  const handleGenerateOtp = async () => {
    if (!formik.errors.phone) {
      const formattedPhone = formik.values.phone.replace("0", "234");

      const res = await requestOtpMutation({
        mobileNumber: formattedPhone,
      });
      toast.success(res.message);
      if (res.data?.message) {
        alert(res.data?.message);
      }
    } else {
      toast.error("Invalid Phone number");
    }
  };

  useEffect(() => {
    formik.setFieldValue("email", profile?.user.email);
    formik.setFieldValue("firstName", profile?.user.firstName);
    formik.setFieldValue("lastName", profile?.user.lastName);
  }, [data]);

  console.log(profile?.user);
  const defaultClassName = "sm:even:ml-auto w-full sm:max-w-[285px]";

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center   h-full bg-[#F4F4F4] py-10">
      <div className="flex flex-col w-full gap-6  p-[40px] bg-[#FFFFFF] max-w-[1076px]">
        <div className="flex flex-col items-center">
          <div className="w-fit sm:!mb-6">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full  max-w-[200px] h-[90px] sm:!h-[115px] sm:!max-w-[295px] object-contain"
            />
          </div>
          <Typography.body1
            size={"h2"}
            weight={"semibold"}
            className="tracking-[1%] text-center   text-[#5A5F61]"
          >
            Help us learn more about you!
          </Typography.body1>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            {/* Name & Email Section */}
            <div className="flex flex-col gap-3  w-full max-w-[850px] mx-auto h-fit lg:!py-[20px]">
              <div className="grid grid-cols-1 sm:grid-cols-2!   gap-x-20 gap-5 lg:justify-between!  w-full  h-fit  ">
                <InputField.primary
                  label="First Name"
                  name="firstName"
                  placeholder="John"
                  rounded="full"
                  containerProps={{
                    className: defaultClassName,
                  }}
                  validate
                />
                <InputField.primary
                  label="Last Name"
                  name="lastName"
                  placeholder="Solar Pro"
                  rounded="full"
                  validate
                  containerProps={{
                    className: defaultClassName,
                  }}
                />
                <InputField.primary
                  label="Email"
                  name="email"
                  placeholder="Doe"
                  rounded="full"
                  validate
                  containerProps={{
                    className: defaultClassName,
                  }}
                />

                <div
                  className={cn(
                    "flex flex-col h-fit w-full gap-2 max-w-[204px] ",
                    defaultClassName
                  )}
                >
                  <Typography.body1 className="tracking-[1%] text-[#5A5F61]">
                    Gender
                  </Typography.body1>
                  <div className="flex gap-4 h-[60px]">
                    {/* Male */}
                    <button
                      type="button"
                      onClick={() => formik.setFieldValue("gender", "male")}
                      className={`flex items-center gap-4 w-full px-6 py-3 rounded-full justify-center ${
                        formik.values.gender === "male"
                          ? "bg-[#FFFFFF] drop-shadow"
                          : "bg-[#F5F5F5]"
                      }`}
                    >
                      <Image
                        src={IMAGE_PATHS.maleGenderImg}
                        alt="male-icon"
                        containerClassName="w-5 h-5"
                      />
                      <Typography.body1 size="h6" weight="medium">
                        Male
                      </Typography.body1>
                    </button>

                    {/* Female */}
                    <button
                      type="button"
                      onClick={() => formik.setFieldValue("gender", "female")}
                      className={`flex items-center gap-4 w-full  px-6  py-3 rounded-full justify-center ${
                        formik.values.gender === "female"
                          ? "bg-[#FFFFFF] drop-shadow"
                          : "bg-[#F5F5F5]"
                      }`}
                    >
                      <Image
                        src={IMAGE_PATHS.femaleGenderImg}
                        alt="female-icon"
                        containerClassName="w-5 h-5"
                      />
                      <Typography.body1 size="h6" weight="medium">
                        Female
                      </Typography.body1>
                    </button>
                  </div>
                  <ErrorMessage name="gender" />
                </div>

                <div className="  max-w-[223px]  gap-[7px] sm:col-span-2! my-3">
                  <Typography.body1 className="mb-2">
                    Your Birthday
                  </Typography.body1>
                  <BirthdayPicker
                    value={formik.values.birthday}
                    onChange={(date) => formik.setFieldValue("birthday", date)}
                  />
                </div>

                <div className="flex sm:col-span-2! gap-5 sm:flex-row flex-col">
                  <div className={cn("relative sm:max-w-[294px] w-full")}>
                    <InputField.primary
                      label="Phone Number"
                      name="phone"
                      placeholder="e.g 09094093040"
                      rounded="full"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      validate
                    />
                    <button
                      className="cursor-pointer md:top-[1px]! sm:-top-[4px]! -top-1.5  right-0 absolute"
                      type="button"
                      disabled={isRequestingOtp}
                    >
                      <Typography.body2
                        inline
                        onClick={handleGenerateOtp}
                        variant={"secondary"}
                        weight="medium"
                        className={isRequestingOtp ? "animate-pulse" : ""}
                      >
                        {isRequestingOtp ? "Processing..." : "Verify"}
                      </Typography.body2>
                    </button>
                  </div>
                  <InputField.primary
                    name="otp"
                    label="otp"
                    labelProps={{ className: "invisible" }}
                    containerProps={{ className: " w-full" }}
                    className="w-full sm:max-w-[294px]  "
                    placeholder="Enter OTP"
                    rounded="full"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    maxLength={6}
                    validate
                  />
                </div>
              </div>

              {/* Birthday, Phone, Terms Section */}

              <div className="flex items-center mt-4 mb-4 sm:mb-0! gap-2 w-fit">
                <Checkbox
                  name="acceptTerms"
                  checked={formik.values.acceptTerms}
                  onCheckedChange={(checked) =>
                    formik.setFieldValue("acceptTerms", checked)
                  }
                  className="border-blue-600 "
                />

                <Typography.body1
                  variant={"fadedDark"}
                  weight="medium"
                  className="mt-1"
                >
                  By signing up, you agree to our{" "}
                  <Link
                    target="_blank"
                    to={"https://solarverse.ng/terms-conditions"}
                  >
                    <Typography.body1 inline variant={"secondary"}>
                      Terms of Service
                    </Typography.body1>{" "}
                  </Link>
                  and{" "}
                  <Link
                    to={"https://solarverse.ng/privacy-policy"}
                    target="_blank"
                  >
                    <Typography.body1 inline variant={"secondary"}>
                      Privacy Policy
                    </Typography.body1>
                  </Link>
                </Typography.body1>
              </div>
              <div className="flex gap-5">
                <Button.TertiarySolid
                  onClick={() => navigate(-1)}
                  type="button"
                  className="w-full mx-auto max-w-[290px]  h-12  mt-6"
                >
                  <ArrowLeft /> Back
                </Button.TertiarySolid>
                <Button.PrimarySolid
                  className="w-full mx-auto max-w-[290px]  mt-6"
                  type="submit"
                  disabled={!formik.values.acceptTerms}
                  loading={isUpdatingProfile || isVerifyingOtp}
                >
                  Continue
                </Button.PrimarySolid>
              </div>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default HomeOwnerOnboardingForm;
