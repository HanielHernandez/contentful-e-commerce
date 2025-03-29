"use client";
import { AtImage, AtImageProps } from "../atoms/AtImage";
import { Document } from "@contentful/rich-text-types";
import { ContentfulContentType } from "@/types/contentful/content-model/contentful-types";
import "swiper/css";
import "swiper/css/navigation";
import { AtText } from "../atoms/AtText";
import Link from "next/link";
import { MlSlider, MlSliderItem } from "./MlSlider";
// import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
export interface Category extends ContentfulContentType {
  image: AtImageProps;
  name: string;
  description: Document;
}

interface MlCategoriesSliderProps {
  title: string;
  categories: Category[];
}

const onRenderSlider = (cat: MlSliderItem) => {
  return (
    <Link
      href={`/categories/${cat.CONTENTFUL_ID}`}
      className="flex flex-col pr-8 gap-4  rounded-sm"
    >
      <AtImage
        {...cat.image}
        className="rounded-md bg-neutral-200 object-contain h-64 md:h-95"
      />
      <div className="">
        <AtText variant="h3">{cat.name}</AtText>
      </div>
    </Link>
  );
};

export const MlCategoriesSlider = ({
  categories,
  title = "Categories",
}: MlCategoriesSliderProps) => {
  return (
    <div className="relative w-full h-full group container mx-auto mb-6 px-4 lg:px-0">
      <MlSlider
        items={categories}
        title={title}
        renderSlider={onRenderSlider}
      />
    </div>
  );
};
