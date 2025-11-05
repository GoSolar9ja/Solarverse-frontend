import {
  Button,
  ComponentVisibility,
  InputField,
  MultiSelectInput,
  TextAreaField,
  UploadField,
} from "@solarverse/ui";
import { useNavigate } from "react-router-dom";
import {
  createValidationSchema,
  fileToBase64,
  schemaValidation,
} from "@solarverse/utils";
import DeleteIcon from "@/components/common/icons/delete-icon";
import { Typography } from "@solarverse/ui";
import { Image } from "@solarverse/ui";
import IMAGE_PATHS from "@/assets/images";
import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import { XIcon } from "lucide-react";
import CrossIcon from "@/components/common/icons/cross-icon";
import { useAuthContext } from "@/lib/providers/context-provider/auth-provider";
import { USER_TYPE } from "@/lib/constants";

const InstallerOnboardingFormThree = () => {
  const { login } = useAuthContext();
  const { listSelectionValidation, fieldValidation } = schemaValidation;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      projects: [
        {
          projectLocation: "",
          loads: "",
          caption: "",
          frameworks: [],
          images: [] as Array<File & { url: string }>,
        },
      ],
    },

    validationSchema: createValidationSchema({
      projects: listSelectionValidation().of(
        createValidationSchema({
          projectLocation: fieldValidation().required(
            "Project location is required"
          ),
          loads: fieldValidation().required("Please enter loads"),
          caption: fieldValidation().optional(),
          frameworks: listSelectionValidation().min(
            1,
            "Select at least one framework"
          ),
          images: listSelectionValidation().min(
            1,
            "At least one image is required"
          ),
        })
      ),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);

      const mockUser = {
        token: "fake-jwt-token",
        profile: USER_TYPE.INSTALLER,
      };

      login({ token: mockUser.token, userType: mockUser.profile });

      resetForm();
      navigate("/instller-dashboard");
    },
  });

  const { handleSubmit } = formik;

  const frameworks = [
    { value: "fan", label: "Fan" },
    { value: "fridge", label: "Fridge" },
    { value: "oven", label: "Oven" },
  ];

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center  h-fit bg-[#F4F4F4]">
      <div className="flex flex-col w-full gap-6 max-w-[1076px] h-fit  p-[40px] bg-[#FFFFFF]">
        <div className="flex flex-col items-center">
          <div className="w-fit md:!mb-6">
            <Image
              src={IMAGE_PATHS.transparentLogoImg}
              alt="App logo"
              containerClassName="w-full max-w-[200px] h-[90px] md:!h-[115px] md:!max-w-[295px] object-contain"
            />
          </div>
          <Typography.h2
            weight={"medium"}
            className="tracking-[1%] text-center text-[#5A5F61]"
          >
            Show Past Project
          </Typography.h2>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3  w-full max-w-[300px] md:!max-w-[850px] mx-auto h-fit lg:!py-[20px]">
              <FieldArray name="projects">
                {({ push, remove }) => (
                  <div className="flex flex-col md:!ml-[13%]  gap-[10px] w-full max-w-[345px] md:!max-w-[700px]">
                    {formik.values.projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:!flex-row gap-[10px]"
                      >
                        <div className="flex flex-col border border-[#C1C6C5]/50 pt-[40px] pr-[20px] pb-[40px] pl-[20px] gap-[30px] md:!gap-[50px] rounded-[10px] w-full h-fit md:!max-w-[688px] mt-4">
                          {/* Fields */}
                          <div className="grid grid-cols-1 gap-[30px] md:!grid-cols-2 md:!gap-[81px] w-full md:!max-w-[688px] h-fit">
                            <div>
                              <Typography.body1 weight="semibold">
                                Project Location
                              </Typography.body1>
                              <InputField.primary
                                rounded={"full"}
                                className="w-full md:!max-w-[285px]"
                                name={`projects.${index}.projectLocation`}
                                placeholder="Project Location"
                                validate
                              />
                            </div>

                            <div>
                              <Typography.body1
                                weight="semibold"
                                className="tracking-[1%]"
                              >
                                Energy Consumption Preference
                              </Typography.body1>
                              <MultiSelectInput.primary
                                placeholder="Fan, Fridge, Oven"
                                rounded={"full"}
                                name={`projects.${index}.frameworks`}
                                options={frameworks}
                                validate
                              />
                            </div>
                          </div>

                          {/* Upload Images */}
                          <div className="flex flex-col">
                            <Typography.body1 weight="semibold">
                              Upload Photos
                            </Typography.body1>
                            <FieldArray name={`projects[${index}].images`}>
                              {({ push: pushImage, remove: removeImage }) => (
                                <>
                                  <UploadField
                                    containerProps={{
                                      className:
                                        "flex-1 w-full max-w-[277px] md!h-[61px]",
                                    }}
                                    showUploadList={false}
                                    fieldProps={{
                                      name: `projects.${index}.images`,
                                      multiple: true,
                                      accept: "image/*",
                                      onChange: (e) => {
                                        Array.from(
                                          e.target.files || []
                                        ).forEach((file) => {
                                          fileToBase64(file).then((base64) => {
                                            pushImage({
                                              name: file.name,
                                              url: base64,
                                            });
                                          });
                                        });
                                      },
                                    }}
                                    validate
                                  />

                                  <ComponentVisibility
                                    visible={project.images?.length > 0}
                                  >
                                    <div className="flex gap-5 mt-2">
                                      {project.images?.map((img, i) => (
                                        <div key={i} className="relative">
                                          <Image
                                            containerClassName="size-[60px]"
                                            src={img.url}
                                          />
                                          <button
                                            type="button"
                                            onClick={() => removeImage(i)}
                                            className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1"
                                          >
                                            <XIcon className="w-4 h-4 text-red-500" />
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                  </ComponentVisibility>
                                  <Typography.body2 className="tracking-[1%] text-[#5A5F61] mt-5">
                                    PNG, JPG, Only
                                  </Typography.body2>
                                </>
                              )}
                            </FieldArray>
                          </div>

                          {/* Caption */}
                          <div>
                            <Typography.body1 weight="semibold">
                              Caption
                            </Typography.body1>
                            <TextAreaField.primary
                              className="w-full h-[90px]"
                              name={`projects.${index}.caption`}
                              placeholder="Write a caption"
                            />
                          </div>
                        </div>
                        {/* Add / Remove */}
                        <div className="flex gap-4  h-[43px] md:!mt-[126px] w-full max-w-[20px]">
                          {index === 0 ? (
                            <button
                              type="button"
                              onClick={() =>
                                push({
                                  projectLocation: "",
                                  loads: "",
                                  caption: "",
                                  frameworks: [],
                                  images: [],
                                })
                              }
                              className="border flex items-center gap-2 rounded-[50px] px-3 py-2 border-[#2495D1]"
                            >
                              <CrossIcon />
                              <Typography.body1 className="text-[#2495D1]">
                                Add
                              </Typography.body1>
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="border flex items-center justify-center rounded-[50px] px-3 py-2 border-[#E3140F]"
                            >
                              <DeleteIcon />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </FieldArray>

              <Button.PrimarySolid
                className="w-full max-w-[150px] self-center mx-auto  md:!max-w-[290px] h-12 text-white mt-6"
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
