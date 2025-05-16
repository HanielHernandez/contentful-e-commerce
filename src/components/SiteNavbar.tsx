"use client";
import { FC } from "react";
import OrNavbar, { OrNavbarProps } from "./organism/OrNavbar";
import { useProductsStore } from "@/providers/products-store-provider";
export type SiteNavbarProps = {
  navbar: OrNavbarProps;
};

export const SiteNavbar: FC<SiteNavbarProps> = ({ navbar }) => {
  const { products } = useProductsStore((state) => state);

  return <OrNavbar {...navbar} productCounter={products.length} />;
};
