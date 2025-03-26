import { FC } from "react";
import { AtImageProps } from "../atoms/AtImage";
import { Document } from "@contentful/rich-text-types";

export type Category = {
  image: AtImageProps;
  title: string;
  description: Document;
};

interface MlCategoriesSliderProps {
  categories: Category[];
}

export const MlCategoriesSlider: FC<MlCategoriesSliderProps> = ({
  categories,
}: MlCategoriesSliderProps) => {
  return (
    <div>
      {categories.map(() => {
        return <div key=""></div>;
      })}
    </div>
  );
};
