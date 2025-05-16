import type { Meta, StoryObj } from "@storybook/react";
import { MlProductCard } from "./MlProductCard";
import { Document } from "@contentful/rich-text-types";

const meta = {
  title: "Molecules/MlProductCard",
  component: MlProductCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MlProductCard>;

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
    CONTENTFUL_ID: "1",
    description: document as Document,
    price: 20,
    images: [
      {
        title: "",
        width: 100,
        height: 100,
        description: "",
        file: {
          url: "https://fakeimg.pl/600x400",
          details: {
            size: 100,
            image: {
              width: 150,
              height: 150,
            },
          },
        },
      },
    ],
    title: "Test product",
    rating: 4,
  },
} satisfies Story;
