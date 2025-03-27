import type { Meta, StoryObj } from "@storybook/react";
import { MlSlider } from "./MlSlider";

const meta = {
  title: "Molecules/MlSlider",
  component: MlSlider,
} satisfies Meta<typeof MlSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "My Slider",
    renderSlider: (item) => <div className="h-32 border">{item.name}</div>,
    items: [
      { name: "1", contentTypeId: "1" },
      { name: "2", contentTypeId: "2" },
      { name: "3", contentTypeId: "3" },
      { name: "4", contentTypeId: "4" },
      { name: "5", contentTypeId: "5" },
    ],
  },
} satisfies Story;
