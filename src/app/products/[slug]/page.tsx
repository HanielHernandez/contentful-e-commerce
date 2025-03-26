import contentfulClient from "@/app/lib/contentfulClient";
import {
  ProductDetails,
  ProductDetailsProps,
} from "@/components/blocks/ProductDetails";
import { cleanContentfulEntry } from "@/utils/contentful";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productEntry = await contentfulClient.getEntry(slug);
  const product = cleanContentfulEntry<ProductDetailsProps>(productEntry);
  return <ProductDetails {...product} />;
}
