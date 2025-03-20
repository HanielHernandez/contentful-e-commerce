import type { Meta, StoryObj } from "@storybook/react";
import { AtTextField } from "./AtTextField";

const meta = {
  title: "Atoms/TextField",
  component: AtTextField,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AtTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: "primary",
    placeholder: 'My text field'
  },
} satisfies Story;

export const disable = {
  args: {
    disabled:true,
    variant: "primary",
    placeholder: "My text field",
  },
} satisfies Story;


export const pilled = {
  args: {
    pill: true,
    variant: "primary",
    placeholder: "My text field",
  },
} satisfies Story;