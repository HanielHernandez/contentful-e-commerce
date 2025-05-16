import { AtImage, AtImageProps } from "../atoms/AtImage";
import { formatPrice } from "@/app/lib/utils";
import { AtRating } from "../atoms/AtRating";
import { Document } from "@contentful/rich-text-types";

export interface MlProductCardProps {
  title: string;
  price: number;
  images: AtImageProps[];
  rating: number;
  description: Document;
  CONTENTFUL_ID: string;
}

export function MlProductCard({
  title,
  price,
  rating,
  images,
  CONTENTFUL_ID,
}: MlProductCardProps) {
  return (
    <div className="flex flex-col w-full h-full transitions-colors ease-in-out duration-300 overflow-hidden  hover:bg-neutral-100 bg-white border border-neutral-200 rounded-md ">
      <AtImage
        {...images[0]}
        className="w-full  rouned-top-md object-contain bg-white aspect-square"
        width={"100"}
        height={"100"}
      />

      <div className="flex flex-col gap-2 p-4">
        <div>
          <div className="text-xl font-bold text-neutral-800 truncate mb-2">
            {title}
          </div>
          <AtRating id={CONTENTFUL_ID} rating={rating}></AtRating>
        </div>
        <div className="text-xl font-medium text-gray-600">
          {formatPrice(price)}
        </div>
      </div>
    </div>
  );
}
