import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
import { generateRichText } from "./utils.js";
import { Asset } from "contentful-management";

dotenv.config();

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENT_TYPE_ID = "product"; // Replace with your content type

async function getClient() {
  const contentfulManagement = await import("contentful-management");
  return contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
}
function slugify(str: string) {
  /** Convert string to URL-safe slug */
  return str
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
function getRandomElements<T>(array: T[], count: number): T[] {
  if (count > array.length) {
    throw new Error("Count cannot be greater than array length");
  }

  const shuffled = [...array].sort(() => Math.random() - 0.5); // Shuffle array
  return shuffled.slice(0, count); // Return first 'count' elements
}



async function createAssets() {
  try {
    const client = await getClient();
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment("master");


   const assets =  await environment.getAssets()
    

  
      return getRandomElements(assets.items || [],4);

  } catch (error) {
    console.error("❌ Error creating assets:", error);
  }
  return []

}

async function createCategory() {
  const client = await getClient();
  const space = await client.getSpace(SPACE_ID);
  const environment = await space.getEnvironment("master");

  const cat = await environment.createEntry("category", {
    fields: {
      name: {
        "en-US": faker.commerce.productAdjective(),
      },
      description: {
        "en-US": generateRichText(),
      },
    },
  });
  await cat.publish();
  return cat;
}

function generateProductRating(min = 1, max = 5, decimalPlaces = 1): number {
  return parseFloat(
    faker.number.float({ min, max, fractionDigits: 2 }).toFixed(decimalPlaces)
  );
}

async function createContentfulEntry() {
  try {
    const client = await getClient();
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment("master");
  
     
       const categories = [];

      for (let i = 0; i <= 5; i++) {
      const cat = await createCategory();
      categories.push(cat);
      console.log("✅ Category created:", cat.sys.id);

      for (let i = 0; i <= 10; i++) {
        const productName = faker.commerce.productName();

        const images = await createAssets();

        const entry = await environment.createEntry(CONTENT_TYPE_ID, {
          fields: {
            title: {
              "en-US": productName,
            },
            slug: {
              "en-US": slugify(productName),
            },
            description: {
              "en-US": generateRichText(),
            },
            rating: {
              "en-US": generateProductRating(0, 5),
            },
            price: {
              "en-US": faker.number.float({ fractionDigits: 2 }),
            },
            categories: {
              "en-US": [
                {
                  sys: {
                    type: "Link",
                    linkType: "Entry",
                    id: cat.sys.id,
                  },
                },
              ],
            },
            images: {
              "en-US": images && images.map((asset: Asset) => ({
                sys: {
                  type: "Link",
                  linkType: "Asset",
                  id: asset.sys.id,
                },
              })),
            },
          },
        });
        await entry.publish();
        console.log("✅ Product created:", entry.sys.id);
      }
    }

    // for (let i = 0; i <= 100; i++) {
    //   const product = {
    //     title: {
    //       "en-US": faker.commerce.productName(),
    //     },
    //     slug: {
    //       "en-US": faker.commerce.productName()
    //     } ,
    //   };
    // }
    // const entry = await environment.createEntry(CONTENT_TYPE_ID, {
    //   fields: {
    //     title: { "en-US": "My First Post" },
    //     description: { "en-US": "This is a description for my first post." },
    //     image: {
    //       "en-US": {
    //         sys: {
    //           type: "Link",
    //           linkType: "Asset",
    //           id: "your_asset_id", // Replace with actual asset ID
    //         },
    //       },
    //     },
    //   },
    // });
  } catch (error) {
    console.error("❌ Error creating entry:", error);
  }
}

createContentfulEntry();
