import dotenv from "dotenv";
import { algoliasearch } from "algoliasearch";
import { createClient } from "contentful";
import { cleanContentfulEntry } from "@/utils/contentful";

dotenv.config();

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_TOKEN as string,
});

const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "";
const ALGOLIA_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_WRITE_API_KEY || "";

const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);

async function getContentfulProducts() {
  const products = await contentfulClient.getEntries({
    content_type: "product",
    include: 8,
    limit: 100,
  });

  return products;
}

export default async function seed() {
  const { items } = await getContentfulProducts();
  // const { objectIDs } = await algoliaClient.batch({
  //   indexName: "elastic",
  //   batchWriteParams: {
  //     requests: items.map((x) => {
  //       return {
  //         action: "addObject",
  //         body: cleanContentfulEntry(x),
  //       };
  //     }),
  //   },
  //});

  console.log(
    "✅object indexed: ",
    JSON.stringify(cleanContentfulEntry(items[0]), null, 4)
  );
}

seed();
