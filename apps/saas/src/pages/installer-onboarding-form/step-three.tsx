// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
          images: [] as Array<File & { url: string }>,
        },
      ],
    },

    validationSchema: createValidationSchema({
      projects: listSelectionValidation().of(
        createValidationSchema({
          projectLocation: fieldValidation().required("Project location is required"),
          loads: fieldValidation().required("Please enter loads"),
          caption: fieldValidation().optional(),
          images: listSelectionValidation().min(1, "At least one image is required"),
        })
      ),
    }),
    
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      //  Mock backend auth (replace with API call later)
      const mockUser = {
        token: "fake-jwt-token",
        profile: USER_TYPE.INSTALLER, // or "home" — this would normally come from backend
      };

      login({ token: mockUser.token, userType: mockUser.profile });
      // Save to localStorage

      // Update context

      resetForm();
      navigate("/sign-in");
      // Redirect to dashboard (Protected route)
    },
  });
  useEffect(() => {
    if (formik.values.projects.length === 0) {
      formik.setFieldValue("projects", [
        { projectLocation: "", loads: "", caption: "", images: [] },
      ]);
    }
  }, [formik.values.projects.length]);

  const { handleSubmit } = formik;

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center max-w-[375px] md:!max-w-[1440px] h-fit  bg-[#F4F4F4]">
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
            Show Past Project
          </Typography.body1>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full md:!max-w-[795px] max-w-[345px] h-fit ">
              <div className="flex w-full max-w-[345px] md:!ml-[20%] md:!max-w-[795px] gap-[10px]">
                <FieldArray name="projects">
                  {({ push, remove }) => (
                    <div>
                      {formik.values.projects.map((project, index) => (
                        <div 
                        key={index}
                        className="flex flex-col ml-[13%] md:!flex-row gap-[10px] w-full max-w-[345px] md:!max-w-[700px] ">
                          <div
                           
                            className="flex flex-col border border-[#C1C6C5]/50 pt-[20px] pr-[10px] pb-[20px] pl-[10px] gap-[30px] md:!gap-[50px] rounded-[10px] w-full h-fit md:!max-w-[688px] mt-4"
                          >
                            {/* Form Fields */}
                            <div className="grid grid-cols-1 gap-[30px] md:!grid-cols-2 md:!gap-[81px] w-full md:!max-w-[688px] h-fit">
                              <div>
                                <Typography.body1 weight="semibold">
                                  Project Location
                                </Typography.body1>
                                <InputField.primary
                                  className="w-full md:!max-w-[285px]"
                                  name={`projects[${index}].projectLocation`}
                                  placeholder="Project Location"
                                  rounded="full"
                                  value={project.projectLocation}
                                  onChange={formik.handleChange}
                                  validate
                                />
                              </div>

                              <div>
                                <Typography.body1 weight="semibold">
                                  Energy Consumption Preference
                                </Typography.body1>
                                <InputField.primary
                                  className="w-full md:!max-w-[285px]"
                                  name={`projects[${index}].loads`}
                                  placeholder="Fan, Fridge, Oven"
                                  rounded="full"
                                  value={project.loads}
                                  onChange={formik.handleChange}
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
                                          "flex-1 w-full max-w-[102px] md:!max-w-[232px]  md!h-[61px]",
                                      }}
                                      showUploadList={false}
                                      fieldProps={{
                                        name: `projects[${index}].images`,
                                        multiple: true,
                                        accept: "image/*",
                                        onChange: (e) => {
                                          Array.from(
                                            e.target.files || []
                                          ).forEach((file) => {
                                            fileToBase64(file).then(
                                              (base64) => {
                                                pushImage({
                                                  name: file.name,
                                                  url: base64,
                                                });
                                              }
                                            );
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
                                  </>
                                )}
                              </FieldArray>
                            </div>

                            {/* Caption Field */}
                            <div>
                              <Typography.body1 weight="semibold">
                                Caption
                              </Typography.body1>
                              <InputField.primary
                                className="w-full max-w-[642px]"
                                name={`projects[${index}].caption`}
                                placeholder="Caption"
                                rounded="full"
                                value={project.caption}
                                onChange={formik.handleChange}
                                validate
                              />
                            </div>
                          </div>
                          {/* Add/Delete Buttons */}
                          <div className="flex gap-4 h-[43px] md:!mt-[126px]">
                            {index === 0 ? (
                              // Show only Add button on first project
                              <button
                                type="button"
                                onClick={() =>
                                  push({
                                    projectLocation: "",
                                    loads: "",
                                    caption: "",
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
                              // Show delete on new added blocks
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

// <div className="flex flex-col border border-[#C1C6C5]/50 pt-[20px] pr-[10px] pb-[20px] pl-[10px] gap-[50px] rounded-[10px] w-full h-fit max-w-[688px] ">
//                 <div className="grid grid-cols-2 gap-[81px]  w-full max-w-[688px] h-fit">
//                   <div>
//                   <Typography.body1 weight="semibold">Project Location</Typography.body1>
//                   <InputField.primary
//                     className="w-full max-w-[285px] "
//                     label=""
//                     name="projectLocation"
//                     placeholder="John"
//                     rounded="full"
//                     value={formik.values.projectLocation}
//                     onChange={formik.handleChange}
//                     validate
//                   />
//                   </div>

//                     {/* Input and dropdown toggle */}
//                     <div>
//                     <Typography.body1 weight="semibold">Energy Consumption Preference</Typography.body1>
//                       <InputField.primary
//                         className="w-full max-w-[285px]"
//                         label=""
//                         name="loads"
//                         placeholder="Fan, Fridge, Oven"
//                         rounded="full"
//                         value={formik.values.loads}
//                         validate
//                       />
//                     </div>
//                 </div>

//                 <div className="flex  flex-col">
//                   <Typography.body1 weight="semibold">Upload Photos</Typography.body1>
//                   <div className="flex pb-5 pt-2 gap-5 w-full">
//                     <FieldArray name="images">
//                       {({ push, remove }) => (
//                         <>
//                           <UploadField
//                             containerProps={{
//                               className: "flex-1 w-full max-w-[232px] h-[61px]",
//                             }}
//                             showUploadList={false}
//                             fieldProps={{
//                               name: "images",
//                               multiple: true,
//                               accept: "image/*",
//                               onChange: (e) => {
//                                 Array.from(e.target.files || []).map(
//                                   (item) => ({
//                                     name: item.name,
//                                     url: fileToBase64(item).then((base64) => {
//                                       push({ name: item.name, url: base64 });
//                                     }),
//                                   })
//                                 );
//                               },
//                             }}
//                             validate
//                           />

//                           <ComponentVisibility
//                             visible={formik.values.images.length > 0}
//                           >
//                             <div className="flex gap-5 ">
//                               {formik.values.images.map((image, index) => (
//                                 <div className="relative">
//                                   <Image
//                                     containerClassName="size-[60px]"
//                                     key={index}
//                                     src={image.url || ""}
//                                   />
//                                   <button
//                                     type="button"
//                                     onClick={() => remove(index)}
//                                     className="absolute -top-3 -right-3 bg-gray-100 rounded-full p-1"
//                                   >
//                                     <XIcon className="w-4 h-4 text-red-500" />
//                                   </button>
//                                 </div>
//                               ))}
//                             </div>
//                           </ComponentVisibility>
//                         </>
//                       )}
//                     </FieldArray>
//                   </div>
//                   <Typography.body2 className="text-[#5A5F61]">PNG, JPG Only</Typography.body2>
//                 </div>
//                 <div>
//                 <Typography.body1 weight="semibold">Caption</Typography.body1>
//                 <InputField.primary
//                     className="w-full max-w-[642px]"
//                     label=""
//                     name="caption"
//                     placeholder="Jonh"
//                     rounded="full"
//                     value={formik.values.projectLocation}
//                     onChange={formik.handleChange}
//                     validate
//                   />
//                 </div>
//               </div>
//               <div className="flex w-full gap-[10px] h-fit max-w-[160px] mt-[126px] ">
//               <div className=" border inline-flex justify-center items-center rounded-[50px] w-full max-w-[53px] bg-[#FFFFFF] h-[46px] p-[10px] border-[#E3140F]">
//                 <DeleteIcon />
//               </div>
//               <div className=" border inline-flex justify-center items-center rounded-[50px] w-full max-w-[88px] gap-1 bg-[#FFFFFF] h-[46px] p-[10px] border-[#2495D1]">
//                 <CrossIcon /><Typography.body1
//                 className="text-[#2495D1]"
//                 >Add</Typography.body1>
//               </div>

//               </div>
