import { AtImageProps } from "../atoms/AtImage";

export type CategoryCard = {
  title: string;
  image: AtImageProps;
};

export interface OrCategoriesProps {
  categories: CategoryCard[];
}

export default function OrCategories() {
  return <div></div>;
}
