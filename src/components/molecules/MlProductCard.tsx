import clsx from "clsx";
import { AtImage, AtImageProps } from "../atoms/AtImage";
import { formatPrice } from "@/app/lib/utils";

export interface MlProductCardProps {
  title: string;
  price: number;
  images: AtImageProps[];
  rating: number;
  description: string;
  CONTENTFUL_ID: string;
}

export function MlProductCard({
  title,
  price,
  rating,
  images,
  CONTENTFUL_ID,
}: MlProductCardProps) {
  const stars = new Array(5).fill(0);
  return (
    <div className="flex flex-col w-full h-full transitions-colors ease-in-out duration-300 overflow-hidden  hover:bg-neutral-100 bg-white border border-neutral-200 rounded-md ">
      <AtImage
        {...images[0]}
        className="w-full  rouned-top-md object-contain bg-white aspect-square"
        width={"100"}
        height={"100"}
      />

      <div className="flex flex-col gap-2 p-4">
        <div className="text-xl font-bold text-neutral-800 truncate">
          {title}
        </div>
        <div>
          {stars.map((_, i) => {
            return (
              <span
                key={`${CONTENTFUL_ID}-${i}`}
                className={clsx(
                  "material-icons !text-base",
                  i < rating ? "text-yellow-400" : "text-gray-600"
                )}
              >
                star
              </span>
            );
          })}
        </div>
        <></>
        <div className="text-lg font-bold text-blue-800">
          {formatPrice(price)}
        </div>
      </div>
    </div>
  );
}
