import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Typography.h1> = {
  title: "UI/Typography",
  component: Typography.h1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
  },
} satisfies Meta<typeof Typography.h1>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1: Story = {
  args: {
    children: "Heading 1",
    weight: "bold",
  },
};

export const H2: Story = {
  args: {
    children: "Heading 2",
    weight: "bold",
  },
  render: (args) => <Typography.h2 {...args} />,
};

export const H3: Story = {
  args: {
    children: "Heading 3",
    weight: "semibold",
  },
  render: (args) => <Typography.h3 {...args} />,
};

export const H4: Story = {
  args: {
    children: "Heading 4",
    weight: "semibold",
  },
  render: (args) => <Typography.h4 {...args} />,
};

export const H5: Story = {
  args: {
    children: "Heading 5",
    weight: "medium",
  },
  render: (args) => <Typography.h5 {...args} />,
};

export const H6: Story = {
  args: {
    children: "Heading 6",
    weight: "medium",
  },
  render: (args) => <Typography.h6 {...args} />,
};

export const Body1: Story = {
  args: {
    children: "Body text 1",
    weight: "regular",
  },
  render: (args) => <Typography.body1 {...args} />,
};

export const Body2: Story = {
  args: {
    children: "Body text 2",
    weight: "regular",
  },
  render: (args) => <Typography.body2 {...args} />,
};
