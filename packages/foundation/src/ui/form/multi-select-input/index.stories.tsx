import type { Meta, StoryObj } from "@storybook/react-vite";
import { IMultiSelectInput, MultiSelectInput } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<IMultiSelectInput> = {
  title: "UI/Form/MultiSelectInput",
  component: MultiSelectInput.primary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "left",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<MultiSelectInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Primary Select",
    name: "primary-select",
    placeholder: "Select an option",
    onChange: (e) => console.log(e),
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Select",
    name: "secondary-select",
    placeholder: "Select an option",
    onChange: (e) => console.log(e),

    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
  render: (args) => <MultiSelectInput.secondary {...args} />,
};
