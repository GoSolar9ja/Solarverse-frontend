import * as Yup from "yup";

interface ValidationArgsType {
  errorMessage?: string;
}

interface FieldMatchArgsType {
  fieldName: string;
  errorMessages?: {
    fieldMatchError?: string;
  };
}

interface TextFieldArgsType extends ValidationArgsType {
  alphaNumericError?: string;
}

// Creating validation schema
const createValidationSchema = (args: Yup.ObjectShape) =>
  Yup.object().shape(args);

// Schemas validations
const schemaValidation = {
  // Email Validation
  emailValidation: () => {
    return Yup.string()
      .trim()
      .email("Enter a valid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[A-Za-z]{2,}$/,
        "Email must have a valid domain suffix (e.g., .com, .io, .co.uk)"
      )
      .required("Email is required");
  },

  // Validation for fields
  fieldValidation: () => {
    return Yup.string();
  },

  numberFieldValidation: () => {
    return Yup.number().typeError("This field must be a number");
  },

  textFieldValidation: (args?: TextFieldArgsType) => {
    const regex = /^[^0-9]*$/;

    return Yup.string().matches(
      regex,
      args?.alphaNumericError ??
        "This field should not contain a numeric character"
    );
  },

  // Password validation
  passwordValidation: () => {
    return Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      )
      .test(
        "password-complexity",
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        (value) => {
          return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(
            value || ""
          );
        }
      );
  },

  // List selection validation
  listSelectionValidation: (args?: ValidationArgsType) => {
    return Yup.array().min(
      1,
      args?.errorMessage ?? "An item must be selected from the list"
    );
  },

  // Validating if this field matches another field
  matchFieldValidation: ({ errorMessages, fieldName }: FieldMatchArgsType) =>
    Yup.string().oneOf(
      [Yup.ref(fieldName)],
      errorMessages?.fieldMatchError ?? "Field does not match"
    ),

  // Boolean validation
  booleanValidation: () => {
    return Yup.string().oneOf(["true"], "You must accept the terms");
  },
  // Phone number validation
  phoneNumberValidation: () => {
    return (
      Yup.string()
        // .matches(/^\+[0-9]+$/, "Phone number must start with a country code")
        .matches(/^\d+$/, "Phone number must contain only numbers")
        .min(10, "Phone number must be at least 10 digits long ")
        .max(11, "Phone number must not exceed 11 digits")
        .required("Phone number is required")
    );
  },
  objectFieldValidation: (args?: {
    [key: string]:
      | Yup.StringSchema
      | Yup.NumberSchema
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | Yup.ArraySchema<any, any, any, any>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      | Yup.ObjectSchema<any>
      | Yup.BooleanSchema;
  }) => {
    return Yup.object().shape(args ?? {});
  },
};

export { schemaValidation, createValidationSchema };
