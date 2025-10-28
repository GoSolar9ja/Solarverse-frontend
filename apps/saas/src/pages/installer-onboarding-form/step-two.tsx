// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import { Button, ComponentVisibility, UploadField } from "@solarverse/ui";
import { useNavigate } from "react-router-dom";
import {
  createValidationSchema,
  fileToBase64,
  schemaValidation,
} from "@solarverse/utils";

import { Typography } from "@solarverse/ui";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import { XIcon } from "lucide-react";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
// import { USER_TYPE } from "@/lib/constants";

const InstallerOnboardingFormTwo = () => {
  // const { login } = useAuthContext();

  const { listSelectionValidation } = schemaValidation;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      certifications: [] as Array<File & { url: string }>,
      images: [] as Array<File & { url: string }>,
    },
    validationSchema: createValidationSchema({
      certifications: listSelectionValidation().min(1),
      images: listSelectionValidation().min(
        1,
        "At least one image is required"
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
                <div className="flex flex-col">
                <Typography.body1>
                  Upload CAC Certificate
                </Typography.body1>

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
                              Array.from(e.target.files || []).map((item) => ({
                                name: item.name,
                                url: fileToBase64(item).then((base64) => {
                                  push({ name: item.name, url: base64 });
                                }),
                              }));
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
                <Typography.body1>
                PNG, JPG, PDF Only
                </Typography.body1>
                </div>
                
                <div className="flex flex-col">
                  <Typography.body1>
                    Upload Certifications/Licenses (optional)
                  </Typography.body1>
                  <div className="flex gap-5 w-full">
                    <FieldArray name="certifications">
                      {({ push, remove }) => (
                        <>
                          <UploadField
                            containerProps={{
                              className: "flex-1 w-full max-w-[232px] h-[61px]",
                            }}
                            showUploadList={false}
                            fieldProps={{
                              name: "certifications",
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
                            visible={formik.values.certifications.length > 0}
                          >
                            <div className="flex gap-5 ">
                              {formik.values.certifications.map(
                                (image, index) => (
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
                                )
                              )}
                            </div>
                          </ComponentVisibility>
                        </>
                      )}
                    </FieldArray>
                  </div>
                  <Typography.body1>
                  PNG, JPG, PDF Only
                </Typography.body1>
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

export default InstallerOnboardingFormTwo;
