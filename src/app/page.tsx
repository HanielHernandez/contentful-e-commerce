import { cleanContentfulEntry } from "@/utils/contentful";
import contentfulClient from "./lib/contentfulClient";

export default async function Home() {

  const { items } =await contentfulClient.getEntries({
    content_type: "product",
    include: 10,
    limit: 1,
  });

  const cleanEntry = cleanContentfulEntry(items[0])

  return (
    <div>
    
    </div>
  );
}
