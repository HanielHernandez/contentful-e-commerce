import type { Meta, StoryObj } from "@storybook/react";
import { MlFormField } from "./MlFormField";

const meta = {
  title: "Molecules/FormField",
  component: MlFormField,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MlFormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: "primary",
    label: 'Text field',
    icon: 'search',
    placeholder: "My text field",
  },
} satisfies Story;

