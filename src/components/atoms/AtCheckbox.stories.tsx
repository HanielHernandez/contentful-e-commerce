import type { Meta, StoryObj } from "@storybook/react";
import { AtCheckbox } from "./AtCheckbox";

const meta = {
  title: "Atoms/Checkbox",
  component: AtCheckbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AtCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: <p>Label</p>,
  },
} satisfies Story;

export const Checked = {
  args: {
    checked: true,
    children: <p>Label</p>,
  },
} satisfies Story;
