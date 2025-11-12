import type { Meta, StoryObj } from "@storybook/react-vite";
import { AnimatedVisibility } from "./animated-visibility";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AnimatedVisibility> = {
  title: "UI/Visibility/AnimatedVisibility",
  component: AnimatedVisibility,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof AnimatedVisibility>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Component: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    
    return (
      <div>
        <button 
          onClick={() => setVisible(!visible)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Toggle Visibility
        </button>
        <AnimatedVisibility visible={visible}>
          <div className="p-4 bg-green-100 border border-green-300 rounded">
            This content will animate in and out
          </div>
        </AnimatedVisibility>
      </div>
    );
  },
  args: {},
};