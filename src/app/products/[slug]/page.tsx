import contentfulClient from "@/app/lib/contentfulClient";
import { ProductDetailsProps } from "@/components/blocks/ProductDetails";
import { cleanContentfulEntry } from "@/utils/contentful";
import { ProductPage } from "./ProductPage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productEntry = await contentfulClient.getEntry(slug);
  const product = cleanContentfulEntry<ProductDetailsProps>(productEntry);

  return <ProductPage product={product} />;
}
