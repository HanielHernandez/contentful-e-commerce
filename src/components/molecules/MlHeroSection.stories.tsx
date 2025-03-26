import type { Meta, StoryObj } from "@storybook/react";
import { MlHeroSection } from "./MlHeroSection";
import { Document } from "@contentful/rich-text-types";

const meta = {
  title: "Molecules/HeroSection",
  component: MlHeroSection,

  decorators: (Story) => {
    return (
      <div className="container mx-auto h-[calc(100vh-32px)]">
        <Story />
      </div>
    );
  },
} satisfies Meta<typeof MlHeroSection>;

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
    title: "Test product",
    callToActionText: "Shop Now",
    url: "/#",
  },
} satisfies Story;
