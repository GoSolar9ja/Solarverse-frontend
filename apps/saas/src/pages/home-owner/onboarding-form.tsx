import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import { Button } from "@solarverse/ui";
import { InputField } from "@solarverse/ui";
import { createValidationSchema, schemaValidation } from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { Checkbox } from "@solarverse/ui";
import { useState } from "react";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
import BirthdayPicker from "@/components/common/birthday-picker";
import useUpdateProfileMutation from "@/lib/services/api/auth/update-profile.api";
import { USER_TYPE } from "@/lib/constants";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";

const HomeOwnerOnboardingForm = () => {
  const { mutateAsync: updateProfile, isPending } = useUpdateProfileMutation();
  const { fieldValidation, phoneNumberValidation, booleanValidation } =
    schemaValidation;
  const navigate = useNavigate();

  const [generatedOtp, setGeneratedOtp] = useState("");

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
      otp: Yup.string()
        .length(6, "OTP must be 6 digits")
        .required("Click on Verify to generate OTP")
        .test("match-otp", "Invalid OTP", function (value) {
          return value === generatedOtp; // use  generatedOtp for validation
        }),

      acceptTerms: booleanValidation().required("You must accept terms"),
    }),
    onSubmit: async (values) => {
      const { birthday, firstName, gender, lastName, phone } = values;

      const dob = format(birthday || "", "yyyy-MM-dd");
      await updateProfile({
        dob,
        firstName,
        lastName,
        gender,
        mobile: phone,
        role: USER_TYPE.HOME_OWNER,
      });
      navigate(ROUTE_KEYS.HOME_OWNER_ROOT);
    },
  });

  const { handleSubmit } = formik;

  // ✅ Generate OTP
  const handleGenerateOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp); // store OTP in state
    formik.setFieldValue("otp", ""); // reset input
    console.log("Generated OTP:", otp);
    alert(`Your OTP is: ${otp}`); // simulate sending OTP
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center max-w-[375px] md:!max-w-[1440px] h-[1242px] bg-[#F4F4F4]">
      <div className="flex flex-col w-full gap-6 max-w-[345px] md:!max-w-[1076px] h-[1147px] p-[40px] bg-[#FFFFFF]">
        <div className="flex flex-col items-center">
          <div className="w-fit md:!mb-6">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full  max-w-[200px] h-[90px] md:!h-[115px] md:!max-w-[295px] object-contain"
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
            <div className="flex flex-col gap-3  w-full max-w-[850px] h-fit lg:!py-[20px] lg:!ml-[8%]">
              <div className="flex flex-col md:!flex-row  items-center gap-6 lg:!justify-between w-full max-w-[850px] h-fit  ">
                <div className="space-y-6 flex flex-col w-full max-w-[285px]">
                  <InputField.primary
                    label="First Name"
                    name="firstName"
                    placeholder="Enter first name"
                    rounded="full"
                    validate
                  />
                  <InputField.primary
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    rounded="full"
                    className="w-full h-12"
                    validate
                    disabled
                  />
                </div>

                <div className="space-y-6 flex flex-col w-full max-w-[285px]">
                  <InputField.primary
                    label="Last Name"
                    name="lastName"
                    placeholder="Enter last name"
                    rounded="full"
                    validate
                  />
                  <Typography.body1 className="tracking-[1%] text-[#5A5F61]">
                    Gender
                  </Typography.body1>
                  <div className="flex gap-4 h-[64px] -mt-4">
                    {/* Male */}
                    <button
                      type="button"
                      onClick={() => formik.setFieldValue("gender", "M")}
                      className={`flex items-center gap-4 w-full px-6 py-3 rounded-full justify-center ${
                        formik.values.gender === "M"
                          ? "bg-[#FFFFFF] drop-shadow"
                          : "bg-gray-100/50 border border-[#C1C6C5]"
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
                      onClick={() => formik.setFieldValue("gender", "F")}
                      className={`flex items-center gap-4 w-full  px-6  py-3 rounded-full justify-center ${
                        formik.values.gender === "F"
                          ? "bg-[#FFFFFF] drop-shadow"
                          : "bg-gray-100/50 border border-[#C1C6C5]"
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
                </div>
              </div>
              {/* Birthday, Phone, Terms Section */}
              <div className="flex gap-4  md:!items-start flex-col w-full max-w-[600px] mt-6">
                <div className="flex flex-col w-full max-w-[223px] h-[91px] gap-[7px]">
                  <Typography.body1 weight="medium">
                    Your Birthday
                  </Typography.body1>
                  <BirthdayPicker
                    value={formik.values.birthday}
                    onChange={(date) => formik.setFieldValue("birthday", date)}
                  />
                </div>

                <div className="flex items-center flex-col relative w-full  max-w-[375px] md:!max-w-[877px] h-fit">
                  <Typography.body1
                    onClick={handleGenerateOtp}
                    className="text-[#E49F13] cursor-pointer  md:!top-4 top-3 left-[85%] md:!left-[38%] absolute"
                    size="h6"
                    weight="medium"
                  >
                    Verify
                  </Typography.body1>
                  <div className="grid grid-cols-1  md:!grid-cols-2   w-full max-w-[375px] md:!max-w-[600px] h-fit items-center gap-2 mt-4">
                    <InputField.primary
                      label="Phone Number"
                      name="phone"
                      className="w-full max-w-[294.5px] h-[50px]"
                      placeholder="Enter phone number"
                      rounded="full"
                      validate
                    />
                    <InputField.primary
                      name="otp"
                      className="w-full max-w-[294.5px] h-[50px] mt-9"
                      placeholder="Enter OTP"
                      rounded="full"
                      maxLength={6}
                      validate
                    />
                  </div>
                </div>

                <div className="flex justify-center md:!items-center mt-4 mb-4 md:!mb-0 gap-2 w-full max-w-[600px] h-[19px]">
                  <Checkbox
                    name="acceptTerms"
                    checked={formik.values.acceptTerms}
                    onCheckedChange={(checked) =>
                      formik.setFieldValue("acceptTerms", checked)
                    }
                    className="border-blue-600 mt-0.5 md:!mt-0"
                  />

                  <Typography.body1 size="h6" weight="medium">
                    By signing up, you agree to our{" "}
                    <span className="text-red-500">Terms of Service</span> and{" "}
                    <span className="text-red-500">Privacy Policy</span>
                  </Typography.body1>
                </div>

                <Button.PrimarySolid
                  className="w-full md:!self-end max-w-[290px] h-12 text-white mt-6"
                  type="submit"
                  disabled={!formik.values.acceptTerms}
                  loading={isPending}
                >
                  Submit
                </Button.PrimarySolid>
              </div>
            </div>
            {/* <div className="flex items-center gap-6">
            <pre className="text-xs bg-gray-100 p-2 mt-4">
  {JSON.stringify(formik.values, null, 2)}
</pre>
<pre className="text-xs text-red-500">
  {JSON.stringify(formik.errors, null, 2)}
</pre>

            </div> */}
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default HomeOwnerOnboardingForm;
