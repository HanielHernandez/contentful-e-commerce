import type { Meta, StoryObj } from "@storybook/react";
import { MlCategoriesSlider } from "./MlCategoriesSlider";
import { Document } from "@contentful/rich-text-types";

const meta = {
  title: "Molecules/MlCategoriesSlider",
  component: MlCategoriesSlider,
} satisfies Meta<typeof MlCategoriesSlider>;

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
    title: "Categories",
    categories: [
      {
        contentTypeId: "1",
        name: "Test",
        image: {
          title: "",
          width: 1920,
          height: 1080,
          description: "",
          file: {
            url: "https://loremflickr.com/cache/resized/defaultImage.small_320_240_g.jpg",
            details: {
              size: 100,
              image: {
                width: 1920,
                height: 1080,
              },
            },
          },
        },
        description: document as Document,
      },
      {
        contentTypeId: "2",
        name: "Test",
        image: {
          title: "",
          width: 1920,
          height: 1080,
          description: "",
          file: {
            url: "https://loremflickr.com/cache/resized/defaultImage.small_320_240_g.jpg",
            details: {
              size: 100,
              image: {
                width: 1920,
                height: 1080,
              },
            },
          },
        },
        description: document as Document,
      },
      {
        contentTypeId: "3",
        name: "Test",
        image: {
          title: "",
          width: 1920,
          height: 1080,
          description: "",
          file: {
            url: "https://loremflickr.com/cache/resized/defaultImage.small_320_240_g.jpg",
            details: {
              size: 100,
              image: {
                width: 1920,
                height: 1080,
              },
            },
          },
        },
        description: document as Document,
      },
      {
        contentTypeId: "4",
        name: "Test",
        image: {
          title: "",
          width: 1920,
          height: 1080,
          description: "",
          file: {
            url: "https://loremflickr.com/cache/resized/defaultImage.small_320_240_g.jpg",
            details: {
              size: 100,
              image: {
                width: 1920,
                height: 1080,
              },
            },
          },
        },
        description: document as Document,
      },
      {
        contentTypeId: "5",
        name: "Test",
        image: {
          title: "",
          width: 1920,
          height: 1080,
          description: "",
          file: {
            url: "https://loremflickr.com/cache/resized/defaultImage.small_320_240_g.jpg",
            details: {
              size: 100,
              image: {
                width: 1920,
                height: 1080,
              },
            },
          },
        },
        description: document as Document,
      },
      {
        contentTypeId: "6",
        name: "Test",
        image: {
          title: "",
          width: 1920,
          height: 1080,
          description: "",
          file: {
            url: "https://loremflickr.com/cache/resized/defaultImage.small_320_240_g.jpg",
            details: {
              size: 100,
              image: {
                width: 1920,
                height: 1080,
              },
            },
          },
        },
        description: document as Document,
      },
    ],
  },
} satisfies Story;
