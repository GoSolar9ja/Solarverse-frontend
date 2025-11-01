import type { Meta, StoryObj } from "@storybook/react-vite";
import { CenterLayout } from "./center-layout";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CenterLayout> = {
  title: "UI/Layouts/CenterLayout",
  component: CenterLayout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CenterLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component: Story = {
  args: {
    children: <div className="bg-blue-500 text-white p-4 rounded">Centered Content</div>,
    className: "h-64 w-64 border border-gray-300",
  },
};