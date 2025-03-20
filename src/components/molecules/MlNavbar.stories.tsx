import type { Meta, StoryObj } from "@storybook/react";
import MlNavbar from "./MlNavbar";

const meta = {
  title: "Molecules/Navbar",
  component: MlNavbar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MlNavbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    logo: {
      width: 40,
      height: 40,
      title: "",
      description: "",

      file: {
        url: "https://images.ctfassets.net/0k1lmot35ek0/nP2RfmajSUD9g8slshoVU/538a9a4a12d620d842d7b61bf9f602e9/descarga__4_.png",
      },
    },
    links: [
      {
        url: "#",
        text: "Home",
        icon: "",
      },
      {
        url: "#",
        text: "Products",
        icon: "",
      },
      {
        url: "#",
        text: "Deals",
        icon: "",
      },
      {
        url: "#",
        text: "About us",
        icon: "",
      },
    ],
  },
} satisfies Story;
