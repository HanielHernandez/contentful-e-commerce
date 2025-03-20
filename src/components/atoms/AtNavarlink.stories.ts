import type { Meta, StoryObj } from "@storybook/react";
import AtNavbarLink from "./AtNavbarlink";

const meta = {
  title: "Atoms/NavbarLink",
  component: AtNavbarLink,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AtNavbarLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    url: "#",
    text: "Home",
    icon: "",
    links: []
  },
} satisfies Story;
