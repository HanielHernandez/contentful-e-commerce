import dotenv from "dotenv";
import contentfulManagement from "contentful-management";
import { algoliasearch } from "algoliasearch";
import { createClient } from "contentful";

dotenv.config();

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN as string,
});

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "";
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY || "";

const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;

async function getContentfulProducts() {
  // const space = await contentfulClient.getSpace(SPACE_ID);
  // const environment = await space.getEnvironment("master");

  const products = await contentfulClient.getEntries({
    content_type: "product",
    include: 10,
    limit: 100,
  });

  return products;
}

export default async function seed() {
  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);

  const { items } = await getContentfulProducts();

  const { objectIDs } = await algoliaClient.batch({
    indexName: "elastic",
    batchWriteParams: {
      requests: items.map((x) => {
        return {
          action: "addObject",
          body: x,
        };
      }),
    },
  });

  // ({
  //   indexName: "elastic",
  //   objectID: product.sys.id,
  //   body: product,
  // });
  console.log("✅object indexed:  ", JSON.stringify(objectIDs, null, 4));
}

seed();
