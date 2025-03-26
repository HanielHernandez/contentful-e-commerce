import { AtImageProps } from "../atoms/AtImage";
import { Document } from "@contentful/rich-text-types";
import { AtText } from "../atoms/AtText";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AtRating } from "../atoms/AtRating";
import { formatPrice } from "@/app/lib/utils";
import { AtButton } from "../atoms/AtButton";
import { MlImagesSlider } from "../molecules/MLImagesSlider";

export interface ProductDetailsProps {
  images: AtImageProps[];
  description: Document;
  title: string;
  price: number;
  rating: number;
  categories: unknown[];
  CONTENTFUL_ID: string;
}

export const ProductDetails = ({
  CONTENTFUL_ID,
  title,
  rating,
  images,
  description,
  price,
}: ProductDetailsProps) => {
  return (
    <div className="container mx-auto p-4 xl:p-0">
      <div className="flex flex-row ">
        <div className="w-full md:w-1/2 pr-4">
          <MlImagesSlider images={images}></MlImagesSlider>
        </div>
        <div className="w-full md:w-1/2 pl-4 flex flex-col gap-4">
          <AtRating id={CONTENTFUL_ID} rating={rating}></AtRating>
          <AtText variant="h2">{title} </AtText>
          <AtText As="div">{documentToReactComponents(description)}</AtText>
          <AtText variant="h3"> {formatPrice(price)}</AtText>
          <div>
            <AtButton color="primary">
              Add To Cart <i className="material-icons ml-4">shopping_cart</i>
            </AtButton>
          </div>
        </div>
      </div>
    </div>
  );
};
