// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import {
  Button,
  ComponentVisibility,
  InputField,
  UploadField,
} from "@solarverse/ui";
import { useNavigate } from "react-router-dom";
import {
  createValidationSchema,
  fileToBase64,
  schemaValidation,
} from "@solarverse/utils";
import ArrowDownIcon from "@/components/common/icons/arrowdown-icon";

import { Typography } from "@solarverse/ui";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import { XIcon } from "lucide-react";
import { useState } from "react";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
// import { USER_TYPE } from "@/lib/constants";

interface LoadOption {
  label: string;
  value: string;
}

const InstallerOnboardingFormThree = () => {
  // const { login } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const loadOptions = [
    "Fan",
    "Fridge",
    "Oven",
    "Air Conditioner",
    "Television",
    "Washing Machine",
    "Iron",
    "Water Heater",
  ];

  const { listSelectionValidation, fieldValidation } = schemaValidation;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      certifications: [] as Array<File & { url: string }>,
      images: [] as Array<File & { url: string }>,
      loads: [] as LoadOption[],
      projectLocation: " ",
    },
    validationSchema: createValidationSchema({
      certifications: listSelectionValidation().min(1),
      images: listSelectionValidation().min(
        1,
        "At least one image is required"
      ),
      loads: listSelectionValidation().min(1, "At least one image is required"),
      projectLocation: fieldValidation().required(
        "Business location is required"
      ),
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
      navigate("/sign-in");
      // Redirect to dashboard (Protected route)
    },
  });

  const { handleSubmit } = formik;

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center max-w-[375px] md:!max-w-[1440px] h-[700px]  bg-[#F4F4F4]">
      <div className="flex flex-col w-full gap-6 max-w-[345px] md:!max-w-[1076px]  h-fit p-[40px] bg-[#FFFFFF]">
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
            Let Home/Business owners see your certified Skills
          </Typography.body1>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center ml-[14%] w-full h-fit max-w-[504px]">
              <div className="flex flex-col gap-8">
                <div className="space-y-6 flex flex-col w-full max-w-[285px]">
                  <InputField.primary
                    label="Project Location"
                    name="projectLocation"
                    placeholder="John"
                    rounded="full"
                    value={formik.values.projectLocation} // 👈 add
                    onChange={formik.handleChange}
                    validate
                  />
                  <div className="flex flex-col relative">
                    <Typography.body1 className="mb-2">
                      Energy Consumption Preference
                    </Typography.body1>

                    {/* Input and dropdown toggle */}
                    <div className="flex items-center relative">
                      <InputField.primary
                        label=""
                        name="loads"
                        placeholder="Select energy-consuming appliances"
                        rounded="full"
                        readOnly
                        value={formik.values.loads
                          .map((item) => item.label)
                          .join(", ")}
                        validate
                      />

                      {/* Arrow icon toggle */}
                      <ArrowDownIcon
                        className={`absolute right-4 cursor-pointer transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      />
                    </div>

                    {/* Dropdown menu */}
                    {dropdownOpen && (
                      <div className="absolute z-10 top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-xl shadow-lg">
                        {loadOptions.map((option, index) => {
                          const isSelected = formik.values.loads.some(
                            (item) => item.label === option
                          );
                          return (
                            <div
                              key={index}
                              onClick={() => {
                                if (!isSelected) {
                                  // Append new item to loads
                                  formik.setFieldValue("loads", [
                                    ...formik.values.loads,
                                    {
                                      label: option,
                                      value: option.toLowerCase(),
                                    },
                                  ]);
                                } else {
                                  // If already selected, remove it
                                  formik.setFieldValue(
                                    "loads",
                                    formik.values.loads.filter(
                                      (item) => item.label !== option
                                    )
                                  );
                                }

                                // 👇 Close dropdown after selection
                                setDropdownOpen(false);
                              }}
                              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                                isSelected ? "bg-gray-200" : ""
                              }`}
                            >
                              {option}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Selected items as tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formik.values.loads.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-200 px-3 py-1 rounded-full"
                        >
                          <span>{item.label}</span>
                          <button
                            type="button"
                            className="ml-2"
                            onClick={() => {
                              const updated = formik.values.loads.filter(
                                (_, i) => i !== index
                              );
                              formik.setFieldValue("loads", updated);
                            }}
                          >
                            <XIcon className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <Typography.body1>Upload Photos</Typography.body1>
                  <div className="flex gap-5 w-full">
                    <FieldArray name="images">
                      {({ push, remove }) => (
                        <>
                          <UploadField
                            containerProps={{
                              className: "flex-1 w-full max-w-[232px] h-[61px]",
                            }}
                            showUploadList={false}
                            fieldProps={{
                              name: "images",
                              multiple: true,
                              accept: "image/*",
                              onChange: (e) => {
                                Array.from(e.target.files || []).map(
                                  (item) => ({
                                    name: item.name,
                                    url: fileToBase64(item).then((base64) => {
                                      push({ name: item.name, url: base64 });
                                    }),
                                  })
                                );
                              },
                            }}
                            validate
                          />

                          <ComponentVisibility
                            visible={formik.values.images.length > 0}
                          >
                            <div className="flex gap-5 ">
                              {formik.values.images.map((image, index) => (
                                <div className="relative">
                                  <Image
                                    containerClassName="size-[60px]"
                                    key={index}
                                    src={image.url || ""}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="absolute -top-3 -right-3 bg-gray-100 rounded-full p-1"
                                  >
                                    <XIcon className="w-4 h-4 text-red-500" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </ComponentVisibility>
                        </>
                      )}
                    </FieldArray>
                  </div>
                  <Typography.body1>PNG, JPG, PDF Only</Typography.body1>
                </div>
              </div>
              <Button.PrimarySolid
                className="w-full md:!self-end max-w-[290px] h-12 text-white mt-6"
                type="submit"
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

export default InstallerOnboardingFormThree;
