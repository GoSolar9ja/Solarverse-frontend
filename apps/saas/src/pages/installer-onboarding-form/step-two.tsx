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
import useBusinessDocumentUploadMutation from "@/lib/services/api/file-uploads/business-document-upload.api";
import ActivityStateTemplate from "@/components/common/templates/activity-state-template";
import { BUSINESS_DOCUMENT_TYPE } from "@/lib/constants";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
// import { USER_TYPE } from "@/lib/constants";

const InstallerOnboardingFormTwo = () => {
  // const { login } = useAuthContext();

  const { listSelectionValidation } = schemaValidation;
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useBusinessDocumentUploadMutation();

  const formik = useFormik({
    initialValues: {
      certifications: [] as Array<{ base64Url: string; file: File }>,
      cac: [] as Array<{ base64Url: string; file: File }>,
    },
    validationSchema: createValidationSchema({
      // certifications: listSelectionValidation(),
      cac: listSelectionValidation().min(1, "At least one image is required"),
    }),

    onSubmit: async (values) => {
      const cacLicenseFormData = new FormData();
      const cacCertFormData = new FormData();

      for (let i = 0; i < values.cac.length; i++) {
        cacLicenseFormData.append("file", values.cac[i].file);
      }
      for (let i = 0; i < values.certifications.length; i++) {
        cacCertFormData.append("file", values.cac[i].file);
      }

      cacLicenseFormData.append(
        "documentType",
        BUSINESS_DOCUMENT_TYPE.CAC_LICENSE
      );
      cacCertFormData.append(
        "documentType",
        BUSINESS_DOCUMENT_TYPE.CAC_CERTIFICATE
      );

      cacLicenseFormData.append("businessName", "My Buss");
      cacCertFormData.append("businessName", "My Buss");

      await Promise.all([
        mutateAsync(cacLicenseFormData),
        mutateAsync(cacCertFormData),
      ]);

      navigate("/installer-form-three");

      console.log("Form submitted:", values);
      // 🔹 Mock backend auth (replace with API call later)
      // const mockUser = {
      //   token: "fake-jwt-token",
      //   profile: USER_TYPE.INSTALLER, // or "home" — this would normally come from backend
      // };

      // login({ token: mockUser.token, userType: mockUser.profile });
      // Save to localStorage

      // Update context

      // Redirect to dashboard (Protected route)
    },
  });

  const { handleSubmit } = formik;
  // const defaultClassName = "sm:even:ml-auto w-full sm:max-w-[285px]";

  return (
    <div className="h-screen flex flex-col">
      <ActivityStateTemplate
        show={isPending}
        children="Uploading documents..."
      />
      <div className=" w-full space-y-6  p-10 pb-20 bg-[#FFFFFF]  max-w-[1076px] mx-auto my-auto   ">
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
            weight={"medium"}
            className="tracking-[1%] text-center   text-[#5A5F61]"
          >
            Let Home/Business owners see your certified Skills
          </Typography.body1>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit} className="w-full ">
            <div className=" space-y-8 w-full items-center">
              <div className="flex flex-col  text-center w-full">
                <Typography.body1 className="tracking-[1%] mb-2 text-[#111214] ">
                  Upload CAC Certificate
                </Typography.body1>

                <div className="flex gap-5 flex-wrap flex-col items-center mx-auto  w-full">
                  <FieldArray name="cac">
                    {({ push, remove }) => (
                      <>
                        <UploadField
                          containerProps={{
                            className: " w-full flex-shrink-0 max-w-[282px]",
                          }}
                          showUploadList={false}
                          fieldProps={{
                            name: "cac",
                            multiple: true,
                            accept: "image/*",
                            onChange: (e) => {
                              Array.from(e.target.files || []).map((file) => {
                                fileToBase64(file).then((base64Url) => {
                                  push({ base64Url, file });
                                });
                              });
                            },
                          }}
                          validate
                        />

                        <ComponentVisibility
                          visible={formik.values.cac.length > 0}
                        >
                          <div className="flex gap-5 flex-wrap">
                            {formik.values.cac.map((image, index) => (
                              <div className="relative">
                                <Image
                                  containerClassName="size-[60px]"
                                  key={index}
                                  src={image.base64Url || ""}
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
                <Typography.body2 className="tracking-[1%] text-[#5A5F61] mt-2">
                  PNG, JPG, PDF Only
                </Typography.body2>
              </div>

              <div className="flex flex-col  text-center w-full">
                <Typography.body1 className="tracking-[1%] mb-2 text-[#111214] ">
                  Upload Certifications/Licenses{" "}
                  <span className="text-[#5A5F61] font-[350px]">
                    (optional)
                  </span>
                </Typography.body1>
                <div className="flex gap-5 flex-wrap flex-col items-center mx-auto  w-full">
                  <FieldArray name="certifications">
                    {({ push, remove }) => (
                      <>
                        <UploadField
                          containerProps={{
                            className: "flex-1 w-full max-w-[282px] ",
                          }}
                          showUploadList={false}
                          fieldProps={{
                            name: "certifications",
                            multiple: true,
                            accept: "image/*",
                            onChange: (e) => {
                              Array.from(e.target.files || []).map((file) => {
                                fileToBase64(file).then((base64Url) => {
                                  push({ base64Url, file });
                                });
                              });
                            },
                          }}
                          validate
                        />

                        <ComponentVisibility
                          visible={formik.values.certifications.length > 0}
                        >
                          <div className="flex gap-5  ">
                            {formik.values.certifications.map(
                              (image, index) => (
                                <div className="relative">
                                  <Image
                                    containerClassName="size-[60px]"
                                    key={index}
                                    src={image.base64Url || ""}
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
                <Typography.body2 className="tracking-[1%] text-[#5A5F61] mt-2">
                  PNG, JPG, PDF Only
                </Typography.body2>
              </div>
            </div>
            <Button.PrimarySolid
              className="w-full  mx-auto max-w-[290px] h-12 text-white mt-6"
              type="submit"
            >
              Continue
            </Button.PrimarySolid>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default InstallerOnboardingFormTwo;
