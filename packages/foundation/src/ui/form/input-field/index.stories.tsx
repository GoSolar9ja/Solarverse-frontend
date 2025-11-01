import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<InputField> = {
  title: "UI/Form/InputField",
  component: InputField.primary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Primary Input",
    name: "primary-input",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Secondary Input",
    name: "secondary-input",
  },
  render: (args) => <InputField.secondary {...args} />,
};

export const WithError: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Input with Error",
    name: "error-input",
    error: "This field is required",
    touched: true,
  },
  render: (args) => <InputField.primary {...args} />,
};
