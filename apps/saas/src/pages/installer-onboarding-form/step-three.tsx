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
import { ROUTE_KEYS } from "@/lib/routes/routes-keys";
import usePastProjectUploadMutation from "@/lib/services/api/file-uploads/past-project-upload.api";

const InstallerOnboardingFormThree = () => {
  const { listSelectionValidation, fieldValidation } = schemaValidation;
  const navigate = useNavigate();
  const { mutateAsync: uploadPastProject, isPending } =
    usePastProjectUploadMutation();

  const formik = useFormik({
    initialValues: {
      projects: [
        {
          projectLocation: "",
          // loads: "",
          caption: "",
          energyConsumptionPreference: [],
          images: [] as Array<{ url: string; file: File }>,
        },
      ],
    },

    validationSchema: createValidationSchema({
      projects: listSelectionValidation().of(
        createValidationSchema({
          projectLocation: fieldValidation().required(
            "Project location is required"
          ),
          // loads: fieldValidation().required("Please enter loads"),
          caption: fieldValidation().optional(),
          energyConsumptionPreference: listSelectionValidation().min(
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

    onSubmit: (values) => {
      console.log("Form submitted:", values);
      const pastProjects = values.projects.map((project) => {
        const formData = new FormData();
        formData.append("projectLocation ", project.projectLocation);
        formData.append(
          "energyConsumptionPreference  ",
          project.energyConsumptionPreference.join(",")
        );
        formData.append("caption", project.caption);
        for (let i = 0; i < project.images.length; i++) {
          formData.append("file", project.images[i].file);
        }
        return uploadPastProject(formData);
      });

      Promise.all(pastProjects);

      // navigate(ROUTE_KEYS.INSTALLER_ROOT);
    },
  });

  const { handleSubmit } = formik;

  const energyConsumptionPreference = [
    { value: "fan", label: "Fan" },
    { value: "fridge", label: "Fridge" },
    { value: "oven", label: "Oven" },
  ];

  return (
    <div className="w-full mx-auto my-auto flex flex-col items-center justify-center  min-h-screen bg-[#F4F4F4] ">
      <div className="flex flex-col gap-6 max-w-[1076px] w-full h-fit  p-[40px] bg-[#FFFFFF]">
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
            <div className="flex flex-col gap-3  w-full  md:!max-w-[850px] mx-auto h-fit lg:!py-[20px]">
              <FieldArray name="projects">
                {({ push, remove }) => (
                  <div className="flex flex-col   gap-[10px] w-full ">
                    {formik.values.projects.map((project, index) => (
                      <div
                        key={index}
                        className="flex flex-col md:!flex-row gap-[20px] md:!w-[90%] w-full mx-auto"
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
                                name={`projects.${index}.energyConsumptionPreference`}
                                options={energyConsumptionPreference}
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
                                        "flex-1 w-full md:max-w-[277px] md!h-[61px]",
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
                                              file,
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
                                  energyConsumptionPreference: [],
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
                loading={isPending}
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
