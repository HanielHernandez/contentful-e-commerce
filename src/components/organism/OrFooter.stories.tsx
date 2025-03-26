import type { Meta, StoryObj } from "@storybook/react";
import { OrFooter } from "./OrFooter";
import { Document } from "@contentful/rich-text-types";

const meta = {
  title: "Organism/Footer",
  component: OrFooter,
  parameters: {},
} satisfies Meta<typeof OrFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

const document = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Ut reprehenderit reprehenderit incididunt exercitation eu",
          marks: [],
          data: {},
        },
      ],
    },
  ],
};

export const Default = {
  args: {
    logo: {
      title: "",
      description: "",
      file: {
        url: "https://images.ctfassets.net/0k1lmot35ek0/nP2RfmajSUD9g8slshoVU/538a9a4a12d620d842d7b61bf9f602e9/descarga__4_.png",
        details: {
          size: 0, // bytes
          image: {
            width: 0, // pixels
            height: 0, // pixels
          },
        },
      },
    },
    description: document as Document,
    links: [
      {
        url: "#",
        text: "Site",
        icon: "",
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
      {
        url: "#",
        text: "Products",
        icon: "",
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
      {
        url: "#",
        text: "Products",
        icon: "",
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
    ],
  },
} satisfies Story;
