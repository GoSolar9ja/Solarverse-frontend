"use client";
import { Button } from "@solar-verse/ui";
import { InputField } from "@solar-verse/ui";
import { TextAreaField } from "@solar-verse/ui";
import { schemaValidation, createValidationSchema } from "@solar-verse/utils";
import { Form, FormikProvider, useFormik } from "formik";
import React from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const { emailValidation, fieldValidation } = schemaValidation;
const validationSchema = createValidationSchema({
  name: fieldValidation().required("Name is required"),
  email: emailValidation().required("Email is required"),
  message: fieldValidation().required("Message is required"),
});

type MessageFormType = typeof initialValues;

export default function MessageForm() {
  const onSubmit = (values: MessageFormType) => {
    console.log("Form submitted:", values);
  };

  const formik = useFormik<MessageFormType>({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="relative z-20">
      <FormikProvider value={formik}>
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-2 mt-10 gap-10 max-w-[712px] mx-auto"
        >
          <InputField.primary
            label="Name"
            name="name"
            placeholder="Enter Name"
            rounded={"full"}
            validate
          />
          <InputField.primary
            label="Email"
            name="email"
            placeholder="Enter Email"
            rounded={"full"}
            validate
          />
          <TextAreaField.primary
            label="Message"
            name="message"
            containerProps={{ className: "col-span-2" }}
            placeholder="Type Your Message"
            validate
          />
          <div className="col-span-2 ">
            <Button.PrimarySolid
              className="md:!ml-auto mx-auto max-w-[274px] w-full"
              type="submit"
            >
              Submit Message
            </Button.PrimarySolid>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
}
