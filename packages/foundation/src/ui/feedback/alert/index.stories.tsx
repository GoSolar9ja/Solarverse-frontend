import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Feedback/Alert",
  component: Alert.success,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "top",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: { description: { control: "text" }, title: { control: "text" } },
} satisfies Meta<React.ComponentProps<typeof Alert.success>>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SuccessAlert: Story = {
  args: { title: "Success!", description: "This is a success alert." },
  render: (args) => <Alert.success {...args} />,
};
export const ErrorAlert: Story = {
  args: { title: "Error!", description: "This is a error alert." },
  render: (args) => <Alert.error {...args} />,
};
