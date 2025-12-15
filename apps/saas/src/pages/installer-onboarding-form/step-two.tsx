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
import { ArrowLeft, File, XIcon } from "lucide-react";
import useBusinessDocumentUploadMutation from "@/lib/services/api/file-uploads/business-document-upload.api";
import ActivityStateTemplate from "@/components/common/templates/activity-state-template";
import { BUSINESS_DOCUMENT_TYPE } from "@/lib/constants";
import useGetBusinessProfileQuery from "@/lib/services/api/auth/get-business-profile.api";
import useCacDocumentUploadMutation from "@/lib/services/api/file-uploads/cac-document-upload.api";
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
// import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
// import { USER_TYPE } from "@/lib/constants";

const InstallerOnboardingFormTwo = () => {
  // const { login } = useAuthContext();
  const { data: businessProfileData } = useGetBusinessProfileQuery();
  const { listSelectionValidation } = schemaValidation;
  const navigate = useNavigate();
  const { mutateAsync: businessDocumentUpload, isPending: businessIsPending } =
    useBusinessDocumentUploadMutation();
  const { mutateAsync: cacDocumentUpload, isPending: cacIsPending } =
    useCacDocumentUploadMutation();

  const formik = useFormik({
    initialValues: {
      license: [] as Array<{ base64Url: string; file: File }>,
      cac: [] as Array<{ base64Url: string; file: File }>,
    },
    validationSchema: createValidationSchema({
      // license: listSelectionValidation(),
      cac: listSelectionValidation().min(1, "At least one image is required"),
    }),

    onSubmit: async (values) => {
      const cacCertFormData = new FormData();

      cacCertFormData.append(
        "documentType",
        BUSINESS_DOCUMENT_TYPE.CAC_CERTIFICATE
      );

      cacCertFormData.append(
        "businessName",
        businessProfileData?.data?.business.name || ""
      );

      cacCertFormData.append("file", values.cac[0].file);

      const licenses = values.license.map((value) => {
        const certFormData = new FormData();

        certFormData.append("documentType", BUSINESS_DOCUMENT_TYPE.CAC_LICENSE);
        certFormData.append(
          "businessName",
          businessProfileData?.data?.business.name || ""
        );

        certFormData.append("file", value.file);

        return businessDocumentUpload(certFormData);
      });

      await Promise.all([cacDocumentUpload(cacCertFormData)].concat(licenses));

      navigate(ROUTE_KEYS.INSTALLER_FORM_THREE);

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

  const { handleSubmit, errors } = formik;
  // const defaultClassName = "sm:even:ml-auto w-full sm:max-w-[285px]";
  console.log(errors);
  return (
    <div className="h-screen flex flex-col">
      <ActivityStateTemplate
        show={businessIsPending || cacIsPending}
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
                  {/* <FieldArray name="cac">
                    {({ push, remove }) => ( */}
                  <>
                    <UploadField
                      containerProps={{
                        className: " w-full flex-shrink-0 max-w-[282px]",
                      }}
                      showUploadList={false}
                      fieldProps={{
                        name: "cac",
                        // multiple: true,
                        accept: "image/*",
                        onChange: async (e) => {
                          const file = e.target.files?.[0];
                          formik.setFieldValue("cac", [
                            {
                              base64Url: await fileToBase64(file),
                              file,
                            },
                          ]);
                        },
                      }}
                      validate
                    />
                    <Typography.body2 className="tracking-[1%] text-[#5A5F61]">
                      PNG, JPG, PDF Only
                    </Typography.body2>
                    <ComponentVisibility visible={formik.values.cac.length > 0}>
                      <div className="flex gap-5 flex-wrap">
                        {formik.values.cac.map((cac, index) => (
                          <div key={index} className="relative max-w-[60px]">
                            <File
                              size={50}
                              className="fill-primary stroke-transparent"
                            />
                            <button
                              type="button"
                              onClick={() => formik.setFieldValue("cac", [])}
                              className="absolute -top-3 -right-0 bg-gray-100 rounded-full p-1"
                            >
                              <XIcon className="w-4 h-4 text-red-500" />
                            </button>
                            <Typography.body2 className="truncate">
                              {cac.file.name}
                            </Typography.body2>
                          </div>
                        ))}
                      </div>
                    </ComponentVisibility>
                  </>
                  {/* )}
                  </FieldArray> */}
                </div>
              </div>

              <div className="flex flex-col  text-center w-full">
                <Typography.body1 className="tracking-[1%] mb-2 text-[#111214] ">
                  Upload Certifications/Licenses{" "}
                  <span className="text-[#5A5F61] font-[350px]">
                    (optional)
                  </span>
                </Typography.body1>
                <div className="flex gap-5 flex-wrap flex-col items-center mx-auto  w-full">
                  <FieldArray name="license">
                    {({ push, remove }) => (
                      <>
                        <UploadField
                          containerProps={{
                            className: "flex-1 w-full max-w-[282px] ",
                          }}
                          showUploadList={false}
                          fieldProps={{
                            name: "license",
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
                        <Typography.body2 className="tracking-[1%] text-[#5A5F61] ">
                          PNG, JPG, PDF Only
                        </Typography.body2>

                        <ComponentVisibility
                          visible={formik.values.license.length > 0}
                        >
                          <div className="flex gap-5  ">
                            {formik.values.license.map((cert, index) => (
                              <div
                                key={index}
                                className="relative max-w-[60px]"
                              >
                                <File
                                  size={50}
                                  className="fill-primary stroke-transparent"
                                />
                                <button
                                  type="button"
                                  onClick={() => remove(index)}
                                  className="absolute -top-3 -right-0 bg-gray-100 rounded-full p-1"
                                >
                                  <XIcon className="w-4 h-4 text-red-500" />
                                </button>
                                <Typography.body2 className="truncate">
                                  {cert.file.name}
                                </Typography.body2>
                              </div>
                            ))}
                          </div>
                        </ComponentVisibility>
                      </>
                    )}
                  </FieldArray>
                </div>
              </div>
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
                className="w-full  mx-auto max-w-[290px] h-12 text-white mt-6"
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
