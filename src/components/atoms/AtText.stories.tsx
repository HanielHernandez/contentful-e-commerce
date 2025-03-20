import type { Meta, StoryObj } from "@storybook/react";
import { AtText } from "./AtText";

const meta = {
  title: "Atoms/Text",
  component: AtText,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AtText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    variant: "h1",
    children:  <p> Laborum sit labore adipisicing <span className="material-icons">add</span> </p>,
  },
} satisfies Story;
