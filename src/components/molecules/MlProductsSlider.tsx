"use client";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { MlSlider, MlSliderItem } from "./MlSlider";
import { MlProductCard, MlProductCardProps } from "./MlProductCard";

interface MlProductsSliderProps {
  title: string;
  products: MlProductCardProps[];
}

const onRenderSlider = (product: MlSliderItem) => {
  return (
    <Link
      href={`/Products/${product.CONTENTFUL_ID}`}
      className="flex flex-col pr-8 gap-4  rounded-sm"
    >
      <MlProductCard {...(product as MlProductCardProps)} />
    </Link>
  );
};

export const MlProductsSlider = ({
  products,
  title = "Products",
}: MlProductsSliderProps) => {
  return (
    <div className="relative w-full h-full group container mx-auto mb-6 px-4 lg:px-0">
      <MlSlider items={products} title={title} renderSlider={onRenderSlider} />
    </div>
  );
};
