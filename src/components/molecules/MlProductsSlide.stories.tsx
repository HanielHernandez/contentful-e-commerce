import type { Meta, StoryObj } from "@storybook/react";
import { MlProductsSlider } from "./MlProductsSlider";
import { document } from "@/utils/mocks";

const meta = {
  title: "Molecules/MlProductSlider",
  component: MlProductsSlider,
} satisfies Meta<typeof MlProductsSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "products",
    products: [
      {
        CONTENTFUL_ID: "1",
        description: document,
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
      {
        CONTENTFUL_ID: "2",
        description: document,
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
        rating: 6,
      },
      {
        CONTENTFUL_ID: "1",
        description: document,
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
      {
        CONTENTFUL_ID: "2",
        description: document,
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
        rating: 6,
      },
      {
        CONTENTFUL_ID: "1",
        description: document,
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
      {
        CONTENTFUL_ID: "2",
        description: document,
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
        rating: 6,
      },
      {
        CONTENTFUL_ID: "1",
        description: document,
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
      {
        CONTENTFUL_ID: "2",
        description: document,
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
        rating: 6,
      },
    ],
  },
} satisfies Story;
