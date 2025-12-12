// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import {
  Button,
  ComponentVisibility,
  ErrorMessage,
  errorToast,
  successToast,
  UploadField,
} from "@solarverse/ui";
import { InputField } from "@solarverse/ui";
import { useNavigate } from "react-router-dom";
import {
  createValidationSchema,
  fileToBase64,
  schemaValidation,
} from "@solarverse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { Checkbox } from "@solarverse/ui";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
// import { USER_TYPE } from "@/lib/constants";
import UploadIcon from "@/components/common/icons/upload-icon";
import { cn } from "@/lib/utils";
import BirthdayPicker from "@/components/common/birthday-picker";
import useRequestOtpMutation from "@/lib/services/api/auth/request-otp.api";
import { format } from "date-fns";
import { USER_TYPE } from "@/lib/constants";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import useUpdateProfileMutation from "@/lib/services/api/auth/update-profile.api";
import useBusinessLogoUploadMutation from "@/lib/services/api/file-uploads/business-logo-upload.api";
// import { XIcon } from "lucide-react";

const InstallerOnboardingForm = () => {
  // const { login } = useAuthContext();

  const {
    fieldValidation,
    phoneNumberValidation,
    booleanValidation,
    listSelectionValidation,
  } = schemaValidation;
  const navigate = useNavigate();

  const { mutateAsync: requestOtpMutation, isPending: isRequestingOtp } =
    useRequestOtpMutation();

  const { mutateAsync: updateProfile, isPending: isUpdatingProfile } =
    useUpdateProfileMutation();

  const {
    mutateAsync: uploadBusinessLogo,
    isPending: isUploadingBusinessLogo,
  } = useBusinessLogoUploadMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      businessRegNum: "",
      businessLocation: "",
      gender: "",
      birthday: undefined,
      nin: "",
      phone: "",
      otp: "",
      acceptTerms: false,
      businessLogo: undefined as
        | Array<{ file: File; base64Url: string }>
        | undefined,
    },
    validationSchema: createValidationSchema({
      firstName: fieldValidation().required("First name is required"),
      lastName: fieldValidation().required("Last name is required"),
      nin: fieldValidation()
        .length(11, "NIN must be 11 digits")
        .required("nin is required"),
      businessName: fieldValidation().required("Business name is required"),
      businessRegNum: fieldValidation().optional(),
      businessLocation: fieldValidation().required(
        "Business location is required"
      ),
      gender: fieldValidation().required("Gender is required"),
      businessLogo: listSelectionValidation().min(
        1,
        "At least one image is required"
      ),
      birthday: fieldValidation().required("Birthday is required"),
      phone: phoneNumberValidation().required("Phone number is required"),
      otp: fieldValidation()
        .length(6, "OTP must be 6 digits")
        .required("Click on Verify to generate OTP"),

      acceptTerms: booleanValidation().required("You must accept terms"),
    }),
    onSubmit: async (values) => {
      const { birthday, firstName, gender, lastName, phone, nin } = values;
      const formData = new FormData();
      const formattedPhone = phone.replace("0", "234");
      const dob = format(birthday || "", "yyyy-MM-dd");

      formData.append("file", values.businessLogo?.[0].file || "");

      await updateProfile({
        dob,
        firstName,
        lastName,
        gender,
        nin,
        mobile: formattedPhone,
        role: USER_TYPE.INSTALLER,
        businessName: values.businessName,
        cacRegistrationNumber: values.businessRegNum,
        address: values.businessLocation,
      });

      await uploadBusinessLogo(formData);

      navigate(ROUTE_KEYS.INSTALLER_FORM_TWO);
    },
  });

  const { handleSubmit } = formik;

  const handleGenerateOtp = async () => {
    if (!formik.errors.phone) {
      const formattedPhone = formik.values.phone.replace("0", "234");

      const res = await requestOtpMutation({
        mobileNumber: formattedPhone,
      });
      successToast(res.message);
      if (res.data?.message) {
        alert(res.data?.message);
      }
    } else {
      errorToast("Invalid Phone number");
    }
  };

  const defaultClassName = "sm:even:ml-auto w-full sm:max-w-[285px]";

  console.log(formik.errors);
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center  sm:!h-[1242px] h-full bg-[#F4F4F4]">
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
            weight={"medium"}
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
                  placeholder="Doe"
                  rounded="full"
                  validate
                  containerProps={{
                    className: defaultClassName,
                  }}
                />
                <InputField.primary
                  label=" Business Name"
                  name="businessName"
                  placeholder="Solar Pro"
                  rounded="full"
                  validate
                  containerProps={{
                    className: defaultClassName,
                  }}
                />
                <InputField.primary
                  label={
                    <span>
                      Business Reg.No{" "}
                      <span className="text-gray-400">(optional)</span>{" "}
                    </span>
                  }
                  name="businessRegNum"
                  placeholder="RC123456"
                  rounded="full"
                  validate
                  containerProps={{
                    className: defaultClassName,
                  }}
                />
                <InputField.primary
                  label="NIN"
                  name="nin"
                  placeholder="Enter NIN"
                  rounded="full"
                  validate
                  containerProps={{
                    className: defaultClassName,
                  }}
                />

                <InputField.primary
                  label="Business Adress"
                  name="businessLocation"
                  placeholder="plot 124, Ikeja Lagos"
                  rounded="full"
                  validate
                  containerProps={{
                    className: defaultClassName,
                  }}
                />

                <div
                  className={cn(
                    "flex flex-col h-fit  gap-2 ",
                    defaultClassName
                  )}
                >
                  <Typography.body1 className=" tracking-[1%]">
                    Business Logo{" "}
                  </Typography.body1>

                  <UploadField
                    fieldProps={{
                      name: "businessLogo",
                      accept: "image/*",
                      multiple: true,
                      onChange: async (e) => {
                        const file = e.target.files?.[0];
                        formik.setFieldValue("businessLogo", [
                          {
                            base64Url: await fileToBase64(file),
                            file,
                          },
                        ]);
                      },
                    }}
                    validate
                    showUploadList={false}
                  >
                    {({ onClick }) => (
                      <div onClick={onClick} className="h-full">
                        <ComponentVisibility
                          visible={!!formik.values.businessLogo?.[0].base64Url}
                        >
                          <Image
                            containerClassName="h-full w-full max-w-[200px]"
                            className="rounded-full"
                            src={
                              formik.values.businessLogo?.[0].base64Url || ""
                            }
                          />
                        </ComponentVisibility>

                        <ComponentVisibility
                          visible={!formik.values.businessLogo?.[0].base64Url}
                        >
                          <div className="flex rounded-full cursor-pointer bg-[#F5F5F5] items-center h-[59px] w-full p-[20px] max-w-[185px] gap-[8px] ">
                            <UploadIcon />
                            <Typography.body1 className=" tracking-[1%]">
                              Upload photo
                            </Typography.body1>
                          </div>
                        </ComponentVisibility>
                      </div>
                    )}
                  </UploadField>

                  <Typography.body1 className=" tracking-[1%]">
                    PNG, JPG only{" "}
                  </Typography.body1>
                </div>

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

                <div className="flex sm:col-span-2! gap-5">
                  <div className={cn("relative max-w-[294px] w-full")}>
                    <InputField.primary
                      label="Phone Number"
                      name="phone"
                      placeholder="Enter phone number"
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
                    className="w-full max-w-[294px]  "
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
                  <Typography.body1 inline variant={"secondary"}>
                    Terms of Service
                  </Typography.body1>{" "}
                  and{" "}
                  <Typography.body1 inline variant={"secondary"}>
                    Privacy Policy
                  </Typography.body1>
                </Typography.body1>
              </div>

              <Button.PrimarySolid
                className="w-full mx-auto max-w-[290px] h-12 text-white mt-6"
                type="submit"
                loading={isUpdatingProfile || isUploadingBusinessLogo}
              >
                Continue
              </Button.PrimarySolid>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default InstallerOnboardingForm;
