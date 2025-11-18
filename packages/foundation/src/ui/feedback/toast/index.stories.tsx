import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster, errorToast, successToast } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Feedback/Toast",
  component: Toaster,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SuccessToast: Story = {
  args: {},
  render: () => (
    <div>
      <Toaster richColors />
      <button onClick={() => successToast("Event has been created")}>
        Show Toast
      </button>
    </div>
  ),
};
export const ErrorToast: Story = {
  args: {},
  render: () => (
    <div>
      <Toaster richColors />
      <button onClick={() => errorToast("Event has been created")}>
        Show Toast
      </button>
    </div>
  ),
};
