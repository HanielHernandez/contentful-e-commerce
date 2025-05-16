"use client";

import { ProductDetails } from "@/components/blocks/ProductDetails";
import { MlProductCardProps } from "@/components/molecules/MlProductCard";
import { useProductsStore } from "@/providers/products-store-provider";
import { FC } from "react";

export type ProductPageProps = {
  product: MlProductCardProps;
};

export const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const { addProduct } = useProductsStore((state) => state);

  return (
    <ProductDetails
      product={product}
      onProductAdded={(prod) => addProduct({ ...prod, quantity: 1 })}
    ></ProductDetails>
  );
};
