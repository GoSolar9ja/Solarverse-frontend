// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import { Button, ComponentVisibility, UploadField } from "@solarverse/ui";
import { InputField } from "@solarverse/ui";
import { useNavigate } from "react-router-dom";
import { createValidationSchema, fileToBase64, schemaValidation } from "@solarverse/utils";
import {  Form, FormikProvider, useFormik } from "formik";
import { Typography } from "@solarverse/ui";

import { Checkbox } from "@solarverse/ui";
import { useState } from "react";
import { useRef } from "react";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
// import { USER_TYPE } from "@/lib/constants";
import UploadIcon from "@/components/common/icons/upload-icon";
// import { XIcon } from "lucide-react";


interface BirthdayPickerProps {
  value: string;
  onChange: (date: string) => void;
}

const BirthdayPicker: React.FC<BirthdayPickerProps> = ({ value, onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const openDatePicker = () => {
    if (inputRef.current) {
      // Try modern way first
      inputRef.current.showPicker?.();
      // Fallback
      inputRef.current.click();
    }
  };

  const date = value ? new Date(value) : null;

  return (
    <div className="flex gap-2">
      <div
        className="rounded-full shadow-sm h-[59px] w-full max-w-[72px] text-center p-[15px] tracking-[1.5%] bg-[#F5F5F5]"
        onClick={openDatePicker}
      >
        {date ? date.getDate() : "Day"}
      </div>
      <div
        className="rounded-full shadow-sm h-[59px] w-full max-w-[72px] text-center p-[15px] tracking-[1.5%] bg-[#F5F5F5]"
        onClick={openDatePicker}
      >
        {date ? date.toLocaleString("default", { month: "short" }) : "Month"}
      </div>
      <div
        className="rounded-full shadow-sm h-[59px] w-full max-w-[72px] text-center p-[15px] tracking-[1.5%] bg-[#F5F5F5]"
        onClick={openDatePicker}
      >
        {date ? date.getFullYear() : "Year"}
      </div>

      {/* Hidden input that triggers calendar */}
      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="hidden"
      />
    </div>
  );
};

const InstallerOnboardingForm = () => {
  // const { login } = useAuthContext();

  const {
    fieldValidation,
    phoneNumberValidation,
    booleanValidation,
    numberFieldValidation,
    listSelectionValidation,
  } = schemaValidation;
   const navigate = useNavigate();

  const [generatedOtp, setGeneratedOtp] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      businessName: "",
      businessRegNum: "",
      businessLocation: "",
      gender: "",
      birthday: "",
      nin:"",
      phone: "",
      otp: "",
      acceptTerms: false,
      images: [] as Array<File & { url: string }>,
    },
    validationSchema: createValidationSchema({
      firstName: fieldValidation().required("First name is required"),
      lastName: fieldValidation().required("Last name is required"),
      nin: fieldValidation().length(11, "NIN must be 11 digits").required("nin is required"),
      businessName: fieldValidation().required("Business name is required"),
      businessRegNum: numberFieldValidation().optional(),
      businessLocation: fieldValidation().required("Business location is required"), 
      gender: fieldValidation().required("Gender is required"),
      images: listSelectionValidation().min(
        1,
        "At least one image is required"
      ),
      birthday: fieldValidation().required("Birthday is required"),
      phone: phoneNumberValidation().required("Phone number is required"),
      otp: fieldValidation()
        .length(6, "OTP must be 6 digits")
        .required("Click on Verify to generate OTP")
        .test("match-otp", "Invalid OTP", function (value) {
          return value === generatedOtp; // use  generatedOtp for validation
        }),

      acceptTerms: booleanValidation().required("You must accept terms"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      // 🔹 Mock backend auth (replace with API call later)
      // const mockUser = {
      //   token: "fake-jwt-token",
      //   profile: USER_TYPE.INSTALLER, // or "home" — this would normally come from backend
      // };

      // login({ token: mockUser.token, userType: mockUser.profile });
      // Save to localStorage

      // Update context

      resetForm();
      navigate("/installer-form-two")
      // Redirect to dashboard (Protected route)
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
    <div className="w-full mx-auto flex flex-col items-center justify-center max-w-[375px] md:!max-w-[1440px] md:!h-[1242px] h-full bg-[#F4F4F4]">
      <div className="flex flex-col w-full gap-6 max-w-[345px] md:!max-w-[1076px] md:!h-[1247px] h-fit p-[40px] bg-[#FFFFFF]">
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
            <div className="flex flex-col gap-3  w-full max-w-[850px] h-fit lg:!py-[20px] lg:!ml-[13%]">
              <div className="grid grid-cols-1 md:!grid-cols-2  items-center gap-6 lg:!justify-between  w-full max-w-[850px] h-fit  ">
              <div className="space-y-6 flex flex-col w-full max-w-[285px]">
                  <InputField.primary
                    label="First Name"
                    name="firstName"
                    placeholder="John"
                    rounded="full"
                    value={formik.values.firstName} // 👈 add
                    onChange={formik.handleChange}
                    validate
                  />
                  <InputField.primary
                    label=" Business Name"
                    name="businessName"
                    placeholder="Solar Pro"
                    rounded="full"
                    value={formik.values.businessName} 
                    onChange={formik.handleChange}
                    validate
                  />
                  
                  
                </div>
              <div className="space-y-6 flex flex-col w-full max-w-[285px]">
                  
                  <InputField.primary
                    label="Last Name"
                    name="lastName"
                    placeholder="Doe"
                    rounded="full"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    validate
                  />
                  <InputField.primary
                    label="Business Reg.No"
                    name="businessRegNum"
                    placeholder="RC123456"
                    rounded="full"
                    value={formik.values.businessRegNum}
                    onChange={formik.handleChange}
                    validate
                  />
                  
                </div>
                <div className="space-y-6 flex flex-col w-full max-w-[285px]">
                  <InputField.primary
                    label="NIN"
                    name="nin"
                    placeholder="Enter NIN"
                    rounded="full"
                    value={formik.values.nin} // 👈 add
                    onChange={formik.handleChange}
                    validate
                  />
                  <div className="flex flex-col h-fit w-full gap-2 max-w-[204px] ">
                  <Typography.body1 className=" tracking-[1%]">
                  Business Logo </Typography.body1>
                  <UploadField
                    fieldProps={{
                      name: "images",
                      multiple: true,
                      accept: "image/*",
                      onChange: (e) => {
                        Array.from(e.target.files || []).map((item) => ({
                          name: item.name,
                          url: fileToBase64(item).then((base64) => {
                            formik.setFieldValue("images", [
                              { name: item.name, url: base64 },
                            ]);
                          }),
                        }));
                      },
                    }}
                    validate
                    showUploadList={false}
                  >
                    {({ onClick }) => (
                      <div onClick={onClick} className= "h-[8 0px]">
                        <ComponentVisibility
                          visible={!!formik.values.images.length}
                        >
                          <Image
                            containerClassName="h-[80px] w-full max-w-[200px]"
                            className="rounded-full"
                            src={formik.values.images[0]?.url || ""}
                          />
                        </ComponentVisibility>

                        <ComponentVisibility
                          visible={!formik.values.images.length}
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
                  PNG, JPG only </Typography.body1>
                
                </div>
                  </div>

                <div className="space-y-6 flex flex-col w-full max-w-[285px]">
                
                  <InputField.primary
                    label="Business Adress"
                    name="businessLocation"
                    placeholder="plot 124, Ikeja Lagos"
                    rounded="full"
                    value={formik.values.businessLocation}
                    onChange={formik.handleChange}
                    validate
                  />
                  <div className="flex flex-col h-fit w-full gap-2 max-w-[204px] ">
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
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      validate
                    />
                    <InputField.primary
                      name="otp"
                      className="w-full max-w-[294.5px] h-[50px] mt-9"
                      placeholder="Enter OTP"
                      rounded="full"
                      value={formik.values.otp}
                      onChange={formik.handleChange}
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
                >
                  Continue
                </Button.PrimarySolid>
              </div>
            </div>
            <div className="flex items-center gap-6">
            <pre className="text-xs bg-gray-100 p-2 mt-4">
  {JSON.stringify(formik.values, null, 2)}
</pre>
<pre className="text-xs text-red-500">
  {JSON.stringify(formik.errors, null, 2)}
</pre>

            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default InstallerOnboardingForm;
