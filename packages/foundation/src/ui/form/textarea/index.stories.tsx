import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextAreaField } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextAreaField.primary> = {
  title: "UI/Form/TextArea",
  component: TextAreaField.primary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof TextAreaField.primary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Primary Text Area",
    name: "primary-textarea",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Secondary Text Area",
    name: "secondary-textarea",
  },
  render: (args) => <TextAreaField.secondary {...args} />,
};

export const WithError: Story = {
  args: {
    placeholder: "Enter text...",
    label: "Text Area with Error",
    name: "error-textarea",
    error: "This field is required",
    touched: true,
  },
  render: (args) => <TextAreaField.primary {...args} />,
};