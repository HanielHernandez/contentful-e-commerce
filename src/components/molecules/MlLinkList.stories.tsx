import type { Meta, StoryObj } from "@storybook/react";
import { MlLinksList } from "./MlLinklist";

const meta = {
  title: "Molecules/MlLinkList",
  component: MlLinksList,
} satisfies Meta<typeof MlLinksList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    text: "Site Center",
    url: "/",
    links: [
      {
        text: "Home",
        url: "/",
      },
      {
        text: "About us",
        url: "/",
      },
      {
        text: "Products",
        url: "/",
      },
      {
        text: "Tersms of service",
        url: "/",
      },
    ],
  },
} satisfies Story;
