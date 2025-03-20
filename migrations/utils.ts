import { faker } from "@faker-js/faker";

export function generateRichText() {
  return {
    nodeType: "document",
    data: {},
    content: [
      {
        nodeType: "paragraph",
        data: {},
        content: [
          {
            nodeType: "text",
            value: faker.commerce.productDescription(), // Random paragraph
            marks: [],
            data: {},
          },
        ],
      },
    ],
  };
}
