"use client";
import { AtText } from "../atoms/AtText";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AtRating } from "../atoms/AtRating";
import { formatPrice } from "@/app/lib/utils";
import { AtButton } from "../atoms/AtButton";
import { MlImagesSlider } from "../molecules/MLImagesSlider";
import { MlProductCardProps } from "../molecules/MlProductCard";

export interface ProductDetailsProps {
  product: MlProductCardProps;
  onProductAdded?: (product: MlProductCardProps) => void;
}

export const ProductDetails = ({
  product,
  onProductAdded,
}: ProductDetailsProps) => {
  return (
    <div className="container mx-auto p-4 xl:p-0">
      <div className="flex flex-row ">
        <div className="w-full md:w-1/2 pr-4">
          <MlImagesSlider images={product.images}></MlImagesSlider>
        </div>
        <div className="w-full md:w-1/2 pl-4 flex flex-col gap-4">
          <AtRating
            id={product.CONTENTFUL_ID}
            rating={product.rating}
          ></AtRating>
          <AtText variant="h2">{product.title} </AtText>
          <AtText As="div">
            {documentToReactComponents(product.description)}
          </AtText>
          <AtText variant="h3"> {formatPrice(product.price)}</AtText>
          <div>
            <AtButton
              color="primary"
              onClick={() => {
                if (onProductAdded) onProductAdded(product);
              }}
            >
              Add To Cart <i className="material-icons ml-4">shopping_cart</i>
            </AtButton>
          </div>
        </div>
      </div>
    </div>
  );
};
