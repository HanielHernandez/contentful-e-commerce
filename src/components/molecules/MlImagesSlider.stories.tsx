import type { Meta, StoryObj } from "@storybook/react";
import { MlImagesSlider } from "./MLImagesSlider";

const meta = {
  title: "Molecules/ImagesSlider",
  component: MlImagesSlider,

  decorators: (Story) => {
    return (
      <div className="container mx-auto h-[calc(100vh-32px)]">
        <Story />
      </div>
    );
  },
} satisfies Meta<typeof MlImagesSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    images: [
      {
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
      {
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
      {
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
      {
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
      {
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
    ],
  },
} satisfies Story;
