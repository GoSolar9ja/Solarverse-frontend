"use client";
import {
  Button,
  ComponentVisibility,
  Image,
  UploadField,
} from "@solar-verse/ui";
import { InputField } from "@solar-verse/ui";
import { PasswordField } from "@solar-verse/ui";
import { SelectInput } from "@solar-verse/ui";
import { Typography } from "@solar-verse/ui";

import {
  createValidationSchema,
  fileToBase64,
  schemaValidation,
} from "@solar-verse/utils";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import { UserIcon, MailIcon, SearchIcon, XIcon } from "lucide-react";
import * as Yup from "yup";

const initialProductListValue = {
  id: undefined,
  name: "",
  // id: 0,
  quantity: 0,
  // price: 0,
};

export default function Components() {
  const {
    numberFieldValidation,
    fieldValidation,
    emailValidation,
    listSelectionValidation,
  } = schemaValidation;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      search: "",
      category: "",
      productList: [initialProductListValue],
      images: [] as Array<File & { url: string }>,
      image: [] as Array<File & { url: string }>,
    },
    validationSchema: createValidationSchema({
      name: fieldValidation().required("Name is required"),
      email: emailValidation(),
      password: fieldValidation().required("Password is required"),
      search: fieldValidation(),
      category: fieldValidation().required("Category is required"),
      image: listSelectionValidation().max(1, "Image is required"),
      images: listSelectionValidation().min(
        1,
        "At least one image is required"
      ),
      productList: Yup.array().of(
        createValidationSchema({
          name: fieldValidation().required("Product name is required"),
          quantity: numberFieldValidation()
            .required("Quantity is required")
            .min(1, "Quantity must be greater than 0"),
        })
      ),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  const { handleSubmit } = formik;

  console.log(formik.values.images);
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:!px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography.h1 variant="primary" className="mb-4">
            SolarVerse UI Components
          </Typography.h1>
          <Typography.body1 variant="fadedDark" className="max-w-2xl mx-auto">
            A comprehensive showcase of all available UI components and their
            variants. This documentation demonstrates the design system used
            throughout the application.
          </Typography.body1>
        </div>

        {/* Typography Section */}
        <section className="mb-16">
          <Typography.h2
            variant="primary"
            className="mb-8 border-b border-gray-200 pb-4"
          >
            Typography Components
          </Typography.h2>

          <div className="grid grid-cols-1 lg:!grid-cols-2 gap-8">
            {/* Typography Sizes */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Typography.h3 variant="primary100" className="mb-4">
                Typography Sizes
              </Typography.h3>
              <div className="space-y-3">
                <Typography.h1 variant="primary">
                  Heading 1 (h1) - 30px/34px/40px (Mobile/Tablet/Desktop)
                </Typography.h1>
                <Typography.h2 variant="primary100">
                  Heading 2 (h2) - 24px/28px/34px (Mobile/Tablet/Desktop)
                </Typography.h2>
                <Typography.h3 variant="success">
                  Heading 3 (h3) - 20px/24px/30px (Mobile/Tablet/Desktop)
                </Typography.h3>
                <Typography.h4 variant="error">
                  Heading 4 (h4) - 18px/20px/24px (Mobile/Tablet/Desktop)
                </Typography.h4>
                <Typography.h5 variant="primary">
                  Heading 5 (h5) - 16px/18px/20px (Mobile/Tablet/Desktop)
                </Typography.h5>
                <Typography.h6 variant="primary100">
                  Heading 6 (h6) - 14px/16px/18px (Mobile/Tablet/Desktop)
                </Typography.h6>
                <Typography.body1 variant="fadedDark">
                  Body 1 (body1) - 12px/14px/16px (Mobile/Tablet/Desktop)
                </Typography.body1>
                <Typography.body2 variant="fadedLight">
                  Body 2 (body2) - 10px/12px/14px (Mobile/Tablet/Desktop)
                </Typography.body2>
              </div>
            </div>

            {/* Typography Variants */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Typography.h3 variant="primary100" className="mb-4">
                Typography Variants
              </Typography.h3>
              <div className="space-y-3">
                <Typography.h4 variant="primary">
                  Primary Color Variant
                </Typography.h4>
                <Typography.h4 variant="primary100">
                  Primary100 Color Variant
                </Typography.h4>
                <Typography.h4 variant="success">
                  Success Color Variant
                </Typography.h4>
                <Typography.h4 variant="error">
                  Error Color Variant
                </Typography.h4>
                <Typography.h4 variant="fadedLight">
                  Faded Light Variant
                </Typography.h4>
                <Typography.h4 variant="fadedDark">
                  Faded Dark Variant
                </Typography.h4>
              </div>
            </div>
          </div>
        </section>

        {/* Button Section */}
        <section className="mb-16">
          <Typography.h2
            variant="primary"
            className="mb-8 border-b border-gray-200 pb-4"
          >
            Button Components
          </Typography.h2>

          <div className="space-y-8">
            {/* Button Variants */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Typography.h3 variant="primary100" className="mb-6">
                Button Variants
              </Typography.h3>
              <div className="grid grid-cols-1 md:!grid-cols-2 lg:!grid-cols-4 gap-4">
                <div className="space-y-3">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Primary Variants
                  </Typography.body2>
                  <Button.PrimarySolid>Primary Solid</Button.PrimarySolid>
                  <Button.SecondarySolid>Secondary Solid</Button.SecondarySolid>
                  <Button.PrimarySolid>Primary Solid</Button.PrimarySolid>
                  <Button.PrimaryOutline>Primary Outline</Button.PrimaryOutline>
                  <Button.PrimaryBrightOutline>
                    Primary Bright Outline
                  </Button.PrimaryBrightOutline>
                </div>

                <div className="space-y-3">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Success Variants
                  </Typography.body2>
                  <Button.SuccessSolid>Success Solid</Button.SuccessSolid>
                  <Button.SuccessOutline>Success Outline</Button.SuccessOutline>
                </div>

                <div className="space-y-3">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Error Variants
                  </Typography.body2>
                  <Button.ErrorSolid>Error Solid</Button.ErrorSolid>
                  <Button.ErrorOutline>Error Outline</Button.ErrorOutline>
                </div>

                <div className="space-y-3">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Disabled States
                  </Typography.body2>
                  <Button.PrimarySolid disabled>
                    Disabled Solid
                  </Button.PrimarySolid>
                  <Button.PrimaryOutline disabled>
                    Disabled Outline
                  </Button.PrimaryOutline>
                </div>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Typography.h3 variant="primary100" className="mb-6">
                Button Sizes
              </Typography.h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button.PrimarySolid size="sm">Small (sm)</Button.PrimarySolid>
                <Button.PrimarySolid size="md">Medium (md)</Button.PrimarySolid>
                <Button.PrimarySolid size="xl">
                  Extra Large (xl)
                </Button.PrimarySolid>
              </div>
            </div>

            {/* Button Rounded Variants */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Typography.h3 variant="primary100" className="mb-6">
                Button Rounded Variants
              </Typography.h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button.PrimarySolid rounded="md">
                  Medium Rounded
                </Button.PrimarySolid>
                <Button.PrimarySolid rounded="lg">
                  Large Rounded
                </Button.PrimarySolid>
                <Button.PrimarySolid rounded="full">
                  Fully Rounded
                </Button.PrimarySolid>
              </div>
            </div>
          </div>
        </section>

        {/* Input Field Section */}
        <section className="mb-16">
          <Typography.h2
            variant="primary"
            className="mb-8 border-b border-gray-200 pb-4"
          >
            Input Field Components
          </Typography.h2>

          <div className="space-y-8">
            {/* Input Variants */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Typography.h3 variant="primary100" className="mb-6">
                Input Field Variants
              </Typography.h3>
              <div className="grid grid-cols-1 md:!grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Primary Variant
                  </Typography.body2>
                  <InputField.primary
                    label="Primary Input"
                    name="primaryInput"
                    placeholder="Enter text here..."
                  />
                  <InputField.primary
                    label="Primary Input with Icon"
                    name="primaryInputWithIcon"
                    placeholder="Enter text here..."
                    leftIcon={<UserIcon className="w-5 h-5" />}
                  />
                  <InputField.primary
                    label="Primary Input Disabled"
                    name="primaryInputDisabled"
                    placeholder="Disabled input"
                    disabled
                  />
                </div>

                <div className="space-y-4">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Secondary Variant
                  </Typography.body2>
                  <InputField.secondary
                    label="Secondary Input"
                    name="secondaryInput"
                    placeholder="Enter text here..."
                  />
                  <InputField.secondary
                    label="Secondary Input with Icon"
                    name="secondaryInputWithIcon"
                    placeholder="Enter text here..."
                    leftIcon={<MailIcon className="w-5 h-5" />}
                  />
                  <InputField.secondary
                    label="Secondary Input Disabled"
                    name="secondaryInputDisabled"
                    placeholder="Disabled input"
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Input Rounded Variants */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Typography.h3 variant="primary100" className="mb-6">
                Input Field Rounded Variants
              </Typography.h3>
              <div className="grid grid-cols-1 md:!grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Primary with Rounded Variants
                  </Typography.body2>
                  <InputField.primary
                    label="Default Rounded"
                    name="defaultRounded"
                    placeholder="Default rounded"
                  />
                  <InputField.primary
                    label="Full Rounded"
                    name="fullRounded"
                    placeholder="Fully rounded"
                    rounded="full"
                  />
                </div>

                <div className="space-y-4">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-semibold"
                  >
                    Secondary with Rounded Variants
                  </Typography.body2>
                  <InputField.secondary
                    label="Default Rounded"
                    name="secondaryDefaultRounded"
                    placeholder="Default rounded"
                  />
                  <InputField.secondary
                    label="Full Rounded"
                    name="secondaryFullRounded"
                    placeholder="Fully rounded"
                    rounded="full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Select Input Section */}
        <section className="mb-16">
          <Typography.h2
            variant="primary"
            className="mb-8 border-b border-gray-200 pb-4"
          >
            Select Input Components
          </Typography.h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Typography.h3 variant="primary100" className="mb-6">
              Select Input Variants
            </Typography.h3>
            <div className="grid grid-cols-1 md:!grid-cols-2 gap-6">
              <div className="space-y-4">
                <Typography.body2 variant="fadedDark" className="font-semibold">
                  Primary Variant
                </Typography.body2>
                <SelectInput.primary
                  label="Primary Select"
                  name="primarySelect"
                  placeholder="Select an option"
                  options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                    { label: "Option 3", value: "option3" },
                  ]}
                />
                <SelectInput.primary
                  label="Primary Select"
                  name="primarySelect2"
                  placeholder="Select an option"
                  options={[
                    { label: "Option 1", value: "option1" },
                    { label: "Option 2", value: "option2" },
                  ]}
                />
              </div>

              <div className="space-y-4">
                <Typography.body2 variant="fadedDark" className="font-semibold">
                  Secondary Variant
                </Typography.body2>
                <SelectInput.secondary
                  label="Secondary Select"
                  name="secondarySelect"
                  placeholder="Select an option"
                  options={[
                    { label: "Category A", value: "categoryA" },
                    { label: "Category B", value: "categoryB" },
                    { label: "Category C", value: "categoryC" },
                  ]}
                />
                <SelectInput.secondary
                  label="Secondary Select"
                  name="secondarySelect2"
                  placeholder="Select an option"
                  options={[
                    { label: "Category A", value: "categoryA" },
                    { label: "Category B", value: "categoryB" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Form Example Section */}
        <section className="mb-16">
          <Typography.h2
            variant="primary"
            className="mb-8 border-b border-gray-200 pb-4"
          >
            Complete Form Example
          </Typography.h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Typography.h3 variant="primary100" className="mb-6">
              Interactive Form with Validation
            </Typography.h3>
            <Typography.body1 variant="fadedDark" className="mb-6">
              This form demonstrates all components working together with Formik
              validation.
            </Typography.body1>

            <FormikProvider value={formik}>
              <Form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                <div className="grid grid-cols-1 md:!grid-cols-2 gap-6">
                  <InputField.primary
                    label="Full Name"
                    name="name"
                    placeholder="Enter your full name"
                    leftIcon={<UserIcon className="w-5 h-5" />}
                    validate
                  />
                  <InputField.primary
                    label="Email Address"
                    name="email"
                    placeholder="Enter your email"
                    leftIcon={<MailIcon className="w-5 h-5" />}
                    validate
                  />
                </div>

                <PasswordField
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                  rounded={"full"}
                  validate
                />

                <InputField.secondary
                  label="Search"
                  name="search"
                  placeholder="Search for something..."
                  leftIcon={<SearchIcon className="w-5 h-5" />}
                  rounded="full"
                  validate
                />

                <SelectInput.primary
                  label="Category"
                  name="category"
                  placeholder="Select a category"
                  options={[
                    { label: "Technology", value: "tech" },
                    { label: "Finance", value: "finance" },
                    { label: "Healthcare", value: "healthcare" },
                    { label: "Education", value: "education" },
                  ]}
                  validate
                />

                <div className="mt-5 space-y-5">
                  <Typography.h4 variant={"primary"}>
                    Single File Upload
                  </Typography.h4>
                  <div className="flex gap-5 w-full">
                    <UploadField
                      containerProps={{ className: "flex-1" }}
                      showUploadList={false}
                      fieldProps={{
                        name: "image",
                        multiple: false,
                        accept: "image/*",
                        onChange: (e) => {
                          const file = e.target.files![0];
                          console.log(file);
                          fileToBase64(file).then((base64) => {
                            formik.setFieldValue("image", [
                              {
                                name: file.name,
                                url: base64,
                              },
                            ]);
                          });
                        },
                      }}
                      validate
                    />

                    <ComponentVisibility
                      visible={formik.values.image.length > 0}
                    >
                      <div className="flex gap-5 size-[60px]">
                        {" "}
                        <Image src={formik.values.image[0]?.url || ""} />
                      </div>
                    </ComponentVisibility>
                  </div>
                  <UploadField
                    fieldProps={{
                      name: "image",
                      multiple: false,
                      accept: "image/*",
                    }}
                    validate
                  />
                </div>

                <div className="mt-5 space-y-5">
                  <Typography.h4 variant={"primary"}>
                    Multiple File Upload
                  </Typography.h4>
                  <div className="flex gap-5 w-full">
                    <FieldArray name="images">
                      {({ push, remove }) => (
                        <>
                          <UploadField
                            containerProps={{ className: "flex-1" }}
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
                              {" "}
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
                  <UploadField
                    fieldProps={{
                      name: "images",
                      multiple: true,
                      accept: "image/*",
                    }}
                    validate
                  />
                </div>

                {/* <UploadField fieldProps={{ name: "images" }} validate>
                  {(props) => (
                    <div
                      className="rounded-lg text-center cursor-pointer p-2"
                      {...props}
                    >
                      knfknef
                    </div>
                  )}
                </UploadField> */}
                <div className="pt-4">
                  <Typography.h4 variant="primary100" className="mb-4">
                    Product List
                  </Typography.h4>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button.PrimarySolid type="submit" size="md">
                    Submit Form
                  </Button.PrimarySolid>
                  <Button.PrimaryOutline
                    type="button"
                    onClick={() => formik.resetForm()}
                  >
                    Reset Form
                  </Button.PrimaryOutline>
                </div>
              </Form>
            </FormikProvider>
          </div>
        </section>

        {/* Component Usage Guide */}
        <section className="mb-16">
          <Typography.h2
            variant="primary"
            className="mb-8 border-b border-gray-200 pb-4"
          >
            Component Usage Guide
          </Typography.h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Typography.h3 variant="primary100" className="mb-6">
              Available Props and Variants
            </Typography.h3>

            <div className="space-y-6">
              <div>
                <Typography.h4 variant="success" className="mb-3">
                  Typography
                </Typography.h4>
                <div className="bg-gray-50 p-4 rounded-md">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-mono text-sm"
                  >
                    Sizes: h1, h2, h3, h4, body1, body2
                    <br />
                    Variants: primary, secondary, success, error, fadedLight,
                    fadedDark
                    <br />
                    Weight: regular, medium, semibold, bold
                  </Typography.body2>
                </div>
              </div>

              <div>
                <Typography.h4 variant="success" className="mb-3">
                  Buttons
                </Typography.h4>
                <div className="bg-gray-50 p-4 rounded-md">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-mono text-sm"
                  >
                    Variants: PrimarySolid, PrimaryOutline,
                    PrimaryBrightOutline, SuccessSolid, SuccessOutline,
                    ErrorSolid, ErrorOutline
                    <br />
                    Sizes: sm, md, xl
                    <br />
                    Rounded: md, lg, full
                  </Typography.body2>
                </div>
              </div>

              <div>
                <Typography.h4 variant="success" className="mb-3">
                  Input Fields
                </Typography.h4>
                <div className="bg-gray-50 p-4 rounded-md">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-mono text-sm"
                  >
                    Variants: primary, secondary
                    <br />
                    Rounded: full, lg, md, sm, xs
                    <br />
                    Icons: leftIcon, rightIcon
                    <br />
                    Validation: validate prop for Formik integration
                  </Typography.body2>
                </div>
              </div>

              <div>
                <Typography.h4 variant="success" className="mb-3">
                  Select Inputs
                </Typography.h4>
                <div className="bg-gray-50 p-4 rounded-md">
                  <Typography.body2
                    variant="fadedDark"
                    className="font-mono text-sm"
                  >
                    Variants: primary, secondary
                    <br />
                    Options: Array of &#123;label, value&#125; objects
                    <br />
                    Validation: validate prop for Formik integration
                  </Typography.body2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <Typography.body1 variant="fadedDark">
            Kpoikpoimingi Investment Design System - Built with Next.js,
            Tailwind CSS, and Formik
          </Typography.body1>
        </footer>
      </div>
    </div>
  );
}
