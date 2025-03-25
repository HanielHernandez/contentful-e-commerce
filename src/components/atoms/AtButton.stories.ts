import type { Meta, StoryObj } from "@storybook/react";
import { AtButton } from "./AtButton";

const meta = {
  title: "Atoms/Buttons",
  component: AtButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AtButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    color: "primary",
    children: "My Button",
  },
} satisfies Story;
