"use client"
import { useEffect } from "react";
import contentfulClient from "../lib/contentfulClient";

export default function ProductsPage() {
  const getProduct = async () => {
    const pr = await contentfulClient.getEntries({
      content_type: "product",
      include: 10,
      limit: 1,
    });
    console.log(pr);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return <>Products page</>;
}
