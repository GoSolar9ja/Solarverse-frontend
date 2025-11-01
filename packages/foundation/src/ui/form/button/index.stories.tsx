import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Form/Button",
  component: Button.PrimarySolid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button.PrimarySolid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimarySolid: Story = {
  args: {
    children: "Primary Solid Button",
    loading: false,
    disabled: false,
  },
};

export const SecondarySolid: Story = {
  args: {
    children: "Secondary Solid Button",
    loading: false,
    disabled: false,
  },
  render: (args) => <Button.SecondarySolid {...args} />,
};

export const PrimaryOutline: Story = {
  args: {
    children: "Primary Outline Button",
    loading: false,
    disabled: false,
  },
  render: (args) => <Button.PrimaryOutline {...args} />,
};

export const PrimaryBrightOutline: Story = {
  args: {
    children: "Primary Bright Outline Button",
    loading: false,
    disabled: false,
  },
  render: (args) => <Button.PrimaryBrightOutline {...args} />,
};

export const SuccessSolid: Story = {
  args: {
    children: "Success Solid Button",
    loading: false,
    disabled: false,
  },
  render: (args) => <Button.SuccessSolid {...args} />,
};

export const SuccessOutline: Story = {
  args: {
    children: "Success Outline Button",
    loading: false,
    disabled: false,
  },
  render: (args) => <Button.SuccessOutline {...args} />,
};

export const ErrorSolid: Story = {
  args: {
    children: "Error Solid Button",
    loading: false,
    disabled: false,
  },
  render: (args) => <Button.ErrorSolid {...args} />,
};

export const ErrorOutline: Story = {
  args: {
    children: "Error Outline Button",
    loading: false,
    disabled: false,
  },
  render: (args) => <Button.ErrorOutline {...args} />,
};