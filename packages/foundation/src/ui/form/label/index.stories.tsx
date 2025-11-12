import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Label> = {
  title: "UI/Form/Label",
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: "select",
      options: ["body1", "body2", "caption"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component: Story = {
  args: {
    children: "Label Text",
    size: "body1",
    weight: "regular",
  },
};
